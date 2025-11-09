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
        return { icon: <FaClock />, text: "Análise pendente" };
      case "Verificada":
        return { icon: <FaCheckCircle />, text: "Verificada" };
      case "Respondida":
        return { icon: <FaCommentDots />, text: "Respondida" };
      case "Atualizada":
        return { icon: <FaSyncAlt />, text: "Atualizada" };
      default:
        return { icon: <FaClock />, text: status };
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
      <section>
        <div>Carregando perguntas...</div>
      </section>
    );
  }

  return (
    <section>
      <div>
        <h1>Minhas perguntas</h1>

        {error && <div>{error}</div>}

        <div>
          <table>
            <thead>
              <tr>
                <th>Id da pergunta</th>
                <th>Descrição</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {perguntas.length === 0 ? (
                <tr>
                  <td colSpan={4}>Nenhuma pergunta encontrada.</td>
                </tr>
              ) : (
                perguntas.map((pergunta) => {
                  const { icon, text } = getStatus(pergunta.status);
                  return (
                    <tr key={pergunta.id}>
                      <td>{pergunta.id}</td>
                      <td>
                        {truncarTexto(pergunta.pergunta)}
                        {pergunta.status === "Atualizada" && <span>(Editada)</span>}
                      </td>
                      <td>
                        <div>
                          {icon} {text}
                        </div>
                      </td>
                      <td>
                        <div>
                          <Link to={`/visualizar-pergunta/${pergunta.id}`} title="Visualizar">
                            <FaEye />
                          </Link>

                          {podeEditar(pergunta.status) && (
                            <Link to={`/editar-pergunta/${pergunta.id}`} title="Editar">
                              <FaEdit />
                            </Link>
                          )}

                          {podeExcluir(pergunta.status) && (
                            <button onClick={() => handleExcluirPergunta(pergunta.id, pergunta.pergunta)} title="Excluir">
                              <FaTrashAlt />
                            </button>
                          )}

                          {!podeEditar(pergunta.status) && !podeExcluir(pergunta.status) && (
                            <span>Apenas visualização</span>
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
