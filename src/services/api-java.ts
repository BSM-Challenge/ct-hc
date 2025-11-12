export interface Usuario {
  cpf: string;
  nome: string;
  email: string;
  senha: string;
}

export interface LoginRequest {
  email: string;
  senha: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

class ApiService {
  private baseURL = import.meta.env.VITE_API_JAVA as string;

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          error: data.erro || data.mensagem || 'Erro na requisição',
          message: data.mensagem
        };
      }

      return { data };
    } catch (error) {
      console.error('Erro na requisição:', error);
      return {
        error: 'Erro de conexão com o servidor'
      };
    }
  }

  async login(email: string, senha: string): Promise<ApiResponse<Usuario>> {
    return this.request<Usuario>('/login', {
      method: 'POST',
      body: JSON.stringify({ email, senha }),
    });
  }


  async criarUsuario(usuario: Omit<Usuario, 'cpf'> & { cpf?: string }): Promise<ApiResponse<Usuario>> {
    return this.request<Usuario>('/usuarios', {
      method: 'POST',
      body: JSON.stringify(usuario),
    });
  }

  async listarUsuarios(): Promise<ApiResponse<Usuario[]>> {
    return this.request<Usuario[]>('/usuarios');
  }

  async atualizarUsuario(cpf: string, usuario: Partial<Usuario>): Promise<ApiResponse<Usuario>> {
    return this.request<Usuario>(`/usuarios/${cpf}`, {
      method: 'PUT',
      body: JSON.stringify(usuario),
    });
  }

  async deletarUsuario(cpf: string): Promise<ApiResponse<void>> {
    return this.request<void>(`/usuarios/${cpf}`, {
      method: 'DELETE',
    });
  }
}

export const apiService = new ApiService();