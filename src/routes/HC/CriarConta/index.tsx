import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { apiService } from "../../../services/api-java";

const schema = z.object({
  nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  senha: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
  cpf: z.string().length(11, "CPF deve ter exatamente 11 dígitos"),
});

type FormData = z.infer<typeof schema>;

export default function CriarConta() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setSubmitError(null);
    setSuccessMessage(null);

    try {
      console.log("Enviando dados para API:", data);
      
      const result = await apiService.criarUsuario({
        cpf: data.cpf,
        nome: data.nome,
        email: data.email,
        senha: data.senha
      });

      if (result.error) {
        setSubmitError(result.error);
        console.error("Erro da API:", result.error);
      } else if (result.data) {
        setSuccessMessage("Conta criada com sucesso! Redirecionando para login...");
        console.log("Usuário criado:", result.data);
        
        setTimeout(() => {
          navigate("/entrarConta");
        }, 800);
      } else {
        setSubmitError("Erro desconhecido ao criar conta");
      }
    } catch (error) {
      console.error("Erro completo:", error);
      setSubmitError("Erro de conexão com o servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-background-linear flex justify-center items-center px-70">
      <div
        className="
        w-full bg-[var(--color-white-button-hover)] rounded-[20px] border-2
        border-[var(--color-white)] pr-7.5 pl-5 pt-7.5 pb-9
        "
      >
        <div className="flex">
          <span className="w-1/2 flex flex-col items-center gap-5">
            <h1 className="text-[var(--color-white)] text-6xl font-bold">
              Boas Vindas!
            </h1>
            <p className="text-[var(--color-white)] text-4xl text-center">
              Preencha seus dados para começar a usar nossos serviços.
            </p>
          </span>
          <span className="w-1/2 flex justify-end">
            <img src="logo-hc-verde.png" alt="Logo HC" className="2xl:w-[90%]" />
          </span>
        </div>

        {/* Mensagens de erro */}
        {submitError && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-center">
            {submitError}
          </div>
        )}

        {successMessage && (
          <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded text-center">
            {successMessage}
          </div>
        )}

        <div className="flex flex-col gap-[70px]">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap justify-around gap-10">
            {/* Campo Nome */}
            <div className="flex flex-col gap-5">
              <label className="text-[var(--color-white)] text-4xl font-bold">
                Nome:
              </label>
              <input
                type="text"
                {...register("nome")}
                placeholder="Digite seu nome completo"
                className="w-[430px] px-5 py-3.5 rounded-[20px] 
                        border-2 border-[var(--color-blue-0077C8)] 
                        bg-[var(--color-white-04)] 
                        placeholder:text-[var(--color-white-075)] text-[18px] font-bold outline-none"
                disabled={loading}
              />
              {errors.nome && (
                <span className="text-red-400 text-sm mt-1">
                  {errors.nome.message}
                </span>
              )}
            </div>

            {/* Campo Email */}
            <div className="flex flex-col gap-5">
              <label className="text-[var(--color-white)] text-4xl font-bold">
                E-mail:
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Digite seu E-mail"
                className="w-[430px] px-5 py-3.5 rounded-[20px] 
                        border-2 border-[var(--color-blue-0077C8)] 
                        bg-[var(--color-white-04)] 
                        placeholder:text-[var(--color-white-075)] text-[18px] font-bold outline-none"
                disabled={loading}
              />
              {errors.email && (
                <span className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Campo Senha */}
            <div className="flex flex-col gap-5">
              <label className="text-[var(--color-white)] text-4xl font-bold">
                Senha:
              </label>
              <input
                type="password"
                {...register("senha")}
                placeholder="Digite sua senha"
                className="w-[430px] px-5 py-3.5 rounded-[20px] 
                        border-2 border-[var(--color-blue-0077C8)] 
                        bg-[var(--color-white-04)] 
                        placeholder:text-[var(--color-white-075)] text-[18px] font-bold outline-none"
                disabled={loading}
              />
              {errors.senha && (
                <span className="text-red-400 text-sm mt-1">
                  {errors.senha.message}
                </span>
              )}
            </div>

            {/* Campo CPF */}
            <div className="flex flex-col gap-5">
              <label className="text-[var(--color-white)] text-4xl font-bold">
                CPF:
              </label>
              <input
                type="text"
                {...register("cpf")}
                placeholder="Digite seu CPF (apenas números)"
                className="w-[430px] px-5 py-3.5 rounded-[20px] 
                        border-2 border-[var(--color-blue-0077C8)] 
                        bg-[var(--color-white-04)] 
                        placeholder:text-[var(--color-white-075)] text-[18px] font-bold outline-none"
                disabled={loading}
              />
              {errors.cpf && (
                <span className="text-red-400 text-sm mt-1">
                  {errors.cpf.message}
                </span>
              )}
            </div>
          </form>
        </div>

        <ul className="flex justify-between">
          <li className="pt-16 pl-3">
            <Link
              to="/entrarConta"
              title="Clique aqui para seguir para a página de login da conta."
              className="text-[var(--color-white)] text-xl"
            >
              Já tem uma conta?{" "}
              <span className="font-bold hover:underline duration-300">
                Clique aqui.
              </span>
            </Link>
          </li>
          <li className="pt-16 pl-3">
            <button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              title="Clique aqui para criar conta."
              disabled={loading}
              className="
                text-[var(--color-white)] text-center px-7 py-3 
                border-2 border-[var(--color-white)] 
                rounded-[30px] text-[24px] 
                hover:bg-[var(--color-white-button-hover)] duration-300
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Criando..." : "Criar Conta"}
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}