const API_BASE_URL = 'http://localhost:8000';

export interface PerguntaData {
  nome: string;
  email: string;
  pergunta: string;
}

export interface MensagemData {
  nome: string;
  email: string;
  mensagem: string;
}

export interface Pergunta {
  id: number;
  nome: string;
  email: string;
  pergunta: string;
  status: string;
  data_envio: string;
}

export const apiService = {
  async enviarPergunta(perguntaData: PerguntaData) {
    const response = await fetch(`${API_BASE_URL}/perguntas/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(perguntaData),
    });
    
    if (!response.ok) {
      throw new Error('Erro ao enviar pergunta');
    }
    
    return response.json();
  },

  async enviarMensagem(mensagemData: MensagemData) {
    const response = await fetch(`${API_BASE_URL}/mensagens/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mensagemData),
    });
    
    if (!response.ok) {
      throw new Error('Erro ao enviar mensagem');
    }
    
    return response.json();
  },

  async listarPerguntas() {
    const response = await fetch(`${API_BASE_URL}/perguntas/`);
    if (!response.ok) {
      throw new Error('Erro ao carregar perguntas');
    }
    return response.json();
  },

  async buscarPerguntaPorId(id: number) {
    const response = await fetch(`${API_BASE_URL}/perguntas/${id}`);
    if (!response.ok) {
      throw new Error('Pergunta não encontrada');
    }
    return response.json();
  },

  async atualizarPergunta(id: number, novaPergunta: string) {
    const response = await fetch(`${API_BASE_URL}/perguntas/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novaPergunta),
    });
    
    if (!response.ok) {
      throw new Error('Erro ao atualizar pergunta');
    }
    
    return response.json();
  },

  async excluirPergunta(id: number) {
    const response = await fetch(`${API_BASE_URL}/perguntas/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Erro ao excluir pergunta');
    }
    
    return response.json();
  }
};