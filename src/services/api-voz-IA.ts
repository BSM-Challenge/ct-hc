// src/services/api-voz.ts
const URL_API_VOZ = import.meta.env.VITE_API_URL_VOZ as string;

interface ComandoVozResponse {
  acao?: string;
  mensagem?: string;
}

export async function enviarComandoVoz(comando: string): Promise<ComandoVozResponse | null> {
  try {
    const response = await fetch(URL_API_VOZ, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comando }),
    });

    if (!response.ok) {
      console.error("Erro na resposta da API de voz:", response.status);
      return null;
    }

    const data = await response.json();
    console.log("Resposta da API de voz:", data);
    return data;
  } catch (error) {
    console.error("Erro ao enviar comando de voz:", error);
    return null;
  }
}