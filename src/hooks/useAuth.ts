import { useState } from 'react';
import { apiService } from '../services/api-java';
import type { Usuario } from '../services/api-java';


export interface AuthState {
  usuario: Usuario | null;
  loading: boolean;
  error: string | null;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    usuario: null,
    loading: false,
    error: null,
  });

  const login = async (email: string, senha: string): Promise<boolean> => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const result = await apiService.login(email, senha);
      
      if (result.error) {
        setAuthState(prev => ({
          ...prev,
          loading: false,
          error: result.error || 'Erro no login'
        }));
        return false;
      }

      if (result.data) {
        setAuthState({
          usuario: result.data,
          loading: false,
          error: null
        });

        localStorage.setItem('usuario', JSON.stringify(result.data));
        return true;
      }

      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: 'Credenciais inválidas'
      }));
      return false;

    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: 'Erro de conexão'
      }));
      return false;
    }
  };

  const logout = () => {
    setAuthState({
      usuario: null,
      loading: false,
      error: null
    });
    localStorage.removeItem('usuario');
  };

  const checkAuth = () => {
    const usuarioSalvo = localStorage.getItem('usuario');
    if (usuarioSalvo) {
      setAuthState(prev => ({
        ...prev,
        usuario: JSON.parse(usuarioSalvo)
      }));
    }
  };

  return {
    ...authState,
    login,
    logout,
    checkAuth
  };
};