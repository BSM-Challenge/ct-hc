import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiService, type Pergunta } from "../../../../services/api-python";

export default function VisualizarPergunta() {
  const { id } = useParams();
  const [pergunta, setPergunta] = useState<Pergunta | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const carregarPergunta = async () => {
      try {
        setLoading(true);
        const response = await apiService.buscarPerguntaPorId(Number(id));
        setPergunta(response.pergunta);
      } catch (error) {
        console.error("Erro ao carregar pergunta:", error);
        setError("Erro ao carregar pergunta.");
      } finally {
        setLoading(false);
      }
    };

    carregarPergunta();
  }, [id]);

  if (loading) return <p>Carregando pergunta...</p>;
  if (error) return <p>{error}</p>;
  if (!pergunta) return <p>Pergunta não encontrada.</p>;

  return (
    <section>
      <h1>Detalhes da Pergunta</h1>
      <p>ID: {pergunta.id}</p>
      <p>Descrição: {pergunta.pergunta}</p>
      <p>Status: {pergunta.status}</p>
      <p>Data de criação: {pergunta.data_envio}</p>

      <Link to="/gerenciarPerguntas">Voltar</Link>
    </section>
  );
}
