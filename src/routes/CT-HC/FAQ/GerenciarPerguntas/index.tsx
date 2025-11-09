import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrashAlt, FaClock, FaCheckCircle, FaCommentDots, FaSyncAlt } from "react-icons/fa";
import { apiService, type Pergunta } from "../../../../services/api-python";

export default function GerenciarPerguntas() {
  const [perguntas, setPerguntas] = useState<Pergunta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    carregarPerguntas();
  }, []);

  const carregarPerguntas = async () => {
    try {
      setLoading(true);
      const response = await apiService.listarPerguntas();
      setPerguntas(response.perguntas);
    } catch (error) {
      console.error("Erro ao carregar perguntas:", error);
      setError("Erro ao carregar perguntas. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleExcluirPergunta = async (id: number, perguntaTexto: string) => {
    if (!window.confirm(`Tem certeza que deseja excluir a pergunta:\n"${perguntaTexto.substring(0, 50)}..."?`)) return;

    try {
      await apiService.excluirPergunta(id);
      setPerguntas(perguntas.filter(p => p.id !== id));
      alert("Pergunta excluída com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir pergunta:", error);
      alert("Erro ao excluir pergunta. Tente novamente.");
    }
  };

  const getStatus = (status: string) => {
    switch (status) {
      case "Pendente":
        return { 
          icon: <FaClock className="text-[var(--color-blue-2)] text-xl" />, 
          text: "Análise pendente",
          textColor: "text-[var(--color-blue-2)]"
        };
      case "Verificada":
        return { 
          icon: <FaCheckCircle className="text-[var(--color-blue-2)] text-xl" />, 
          text: "Verificada",
          textColor: "text-[var(--color-blue-2)]"
        };
      case "Respondida":
        return { 
          icon: <FaCommentDots className="text-[var(--color-blue-2)] text-xl" />, 
          text: "Respondida",
          textColor: "text-[var(--color-blue-2)]"
        };
      case "Atualizada":
        return { 
          icon: <FaSyncAlt className="text-[var(--color-blue-2)] text-xl" />, 
          text: "Atualizada",
          textColor: "text-[var(--color-blue-2)]"
        };
      default:
        return { 
          icon: <FaClock className="text-[var(--color-blue-2)] text-xl" />, 
          text: status,
          textColor: "text-[var(--color-blue-2)]"
        };
    }
  };

  const podeEditar = (status: string) => {
    return status === "Pendente" || status === "Atualizada";
  };

  const podeExcluir = (status: string) => {
    return status === "Pendente" || status === "Atualizada";
  };

  const truncarTexto = (texto: string, maxLength: number = 60) => {
    if (!texto) return "";
    return texto.length > maxLength ? texto.substring(0, maxLength) + "..." : texto;
  };

  if (loading) {
    return (
      <section className="w-full min-h-screen flex justify-center items-center bg-blue-100">
        <div className="text-xl font-semibold text-[var(--color-blue-2)]">Carregando perguntas...</div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[var(--light-blue)] py-40 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-5xl font-extrabold text-[var(--dark-blue-title)] mb-8">
          Minhas perguntas
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 text-center">
            {error}
          </div>
        )}

        <div className="bg-white rounded-xl overflow-hidden shadow-md">
          <table className="w-full border-collapse">
            <thead className="bg-[var(--light-blue-2)] text-var(--dark-blue-title)">
              <tr>
                <th className="py-3 px-6 text-left font-semibold">Id da pergunta</th>
                <th className="py-3 px-6 text-left font-semibold">Descrição</th>
                <th className="py-3 px-6 text-left font-semibold">Status</th>
                <th className="py-3 px-6 text-center font-semibold">Ações</th>
              </tr>
            </thead>
            <tbody>
              {perguntas.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-8 text-gray-600">
                    Nenhuma pergunta encontrada.
                  </td>
                </tr>
              ) : (
                perguntas.map((pergunta) => {
                  const { icon, text, textColor } = getStatus(pergunta.status);
                  return (
                    <tr
                      key={pergunta.id}
                      className="border"
                    >
                      <td className="py-4 px-6 font-bold text-2xl text-[var(--color-black)]">
                        {pergunta.id}
                      </td>
                      <td className="py-4 px-6 text-[var(--color-black)] font-semibold">
                        {truncarTexto(pergunta.pergunta)}
                        {pergunta.status === "Atualizada" && (
                          <span className="ml-2 text-xs font-semibold">
                            (Editada)
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${textColor}`}>
                          {icon}
                          <span className="font-medium">{text}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex flex-row items-center gap-3">
                          <Link
                            to={`/visualizar-pergunta/${pergunta.id}`}
                            title="Visualizar"
                            className="p-2 bg-green-100 rounded-md hover:bg-green-200 transition"
                          >
                            <FaEye className="text-green-400 text-xl" />
                          </Link>

                          {podeEditar(pergunta.status) && (
                            <Link
                              to={`/editar-pergunta/${pergunta.id}`}
                              title="Editar"
                              className="p-2 bg-blue-100 rounded-md hover:bg-blue-200 transition"
                            >
                              <FaEdit className="text-blue-400 text-xl" />
                            </Link>
                          )}

                          {podeExcluir(pergunta.status) && (
                            <button
                              onClick={() => handleExcluirPergunta(pergunta.id, pergunta.pergunta)}
                              title="Excluir"
                              className="p-2 bg-red-100 rounded-md hover:bg-red-200 transition"
                            >
                              <FaTrashAlt className="text-red-400 text-xl" />
                            </button>
                          )}

                          {!podeEditar(pergunta.status) && !podeExcluir(pergunta.status) && (
                            <span className="text-xs text-gray-500 italic">
                              Apenas visualização
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}