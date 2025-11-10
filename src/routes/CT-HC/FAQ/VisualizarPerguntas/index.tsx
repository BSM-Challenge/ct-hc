import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaClock } from "react-icons/fa";
import { apiService, type Pergunta } from "../../../../services/api-python";

export default function VisualizarPergunta() {
  const { id } = useParams<{ id: string }>();
  const [pergunta, setPergunta] = useState<Pergunta | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const carregarPergunta = async () => {
      try {
        setLoading(true);
        const response = await apiService.buscarPerguntaPorId(Number(id));
        setPergunta(response);
      } catch (error) {
        console.error("Erro ao carregar pergunta:", error);
        setError("Erro ao carregar os detalhes da pergunta.");
      } finally {
        setLoading(false);
      }
    };
    carregarPergunta();
  }, [id]);

  if (loading) {
    return (
      <section className="w-full min-h-screen flex justify-center items-center bg-[var(--light-blue)] ">
        <div className="text-xl font-semibold text-[var(--dark-blue-title)]">
          Carregando detalhes...
        </div>
      </section>
    );
  }

  if (error || !pergunta) {
    return (
      <section className="min-h-screen bg-[var(--light-blue)] flex flex-col items-center justify-center text-center px-6 py-40">
        <h1 className="text-3xl font-bold text-[var(--dark-blue-title)] mb-4">
          Erro ao carregar
        </h1>
        <p className="text-[var(--dark-blue-title)] mb-8">{error}</p>
        <Link
          to="/gerenciaPerguntas"
          className="bg-[var(--dark-blue-title)] text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Voltar
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[var(--light-blue)] pt-50 px-6">
      <div className="max-w-3xl mx-auto bg-[var(--color-white)] rounded-xl shadow-md p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-[var(--dark-blue-title)]">
            Detalhes da Pergunta
          </h1>
          <Link
            to="/gerenciarPerguntas"
            className="flex items-center gap-2 text-[var(--dark-blue-title)] hover:text-[var(--color-blue-2)] transition font-semibold"
          >
            <FaArrowLeft /> Voltar
          </Link>
        </div>

        <div className="space-y-6">
          <div>
            <p className="font-bold text-[var(--dark-blue-title)] text-2xl">ID:</p>
            <p className="text-[var(--color-black)] text-xl">{pergunta.id}</p>
          </div>

          <div>
            <p className="font-bold text-[var(--dark-blue-title)] text-2xl">Nome:</p>
            <p className="text-[var(--color-black)] text-xl">{pergunta.nome}</p>
          </div>

          <div>
            <p className="font-bold text-[var(--dark-blue-title)] text-2xl">E-mail:</p>
            <p className="text-[var(--color-black)] text-xl">{pergunta.email}</p>
          </div>

          <div>
            <p className="font-bold text-[var(--dark-blue-title)]text-2xl">Pergunta:</p>
            <p className="text-[var(--color-black)] text-xl">{pergunta.pergunta}</p>
          </div>

          <div>
            <p className="font-bold text-[var(--dark-blue-title)] text-2xl">Status:</p>
            <div className="flex items-center gap-2 text-[var(--color-blue-2)] font-semibold">
              <FaClock className="text-[var(--color-blue-2)] text-xl" />
              {pergunta.status}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
