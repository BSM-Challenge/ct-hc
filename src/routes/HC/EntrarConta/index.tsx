import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react"
import { useAuth } from "../../../hooks/useAuth";

const schema = z.object({
  emailOuCpf: z
    .string()
    .min(3, "Digite seu e-mail ou CPF.")
    .refine(
      (val) =>
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val) || /^\d{11}$/.test(val),
      "Informe um e-mail válido ou CPF com 11 dígitos."
    ),
  senha: z.string().min(6, "Digite a senha que você criou"),
});

type FormData = z.infer<typeof schema>;

export default function EntrarConta() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const { login, loading, error } = useAuth();
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    console.log("Dados validados:", data);
    
    const isEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.emailOuCpf);
    
    if (isEmail) {
      const success = await login(data.emailOuCpf, data.senha);
      if (success) {
        navigate("/hc");
      } else {
        setSubmitError(error || "Email ou senha incorretos");
      }
    } else {

      try {
        const response = await fetch('http://localhost:8080/ct-hc/usuarios');
        const usuarios = await response.json();
        const usuario = usuarios.find((u: any) => u.cpf === data.emailOuCpf);
        
        if (usuario) {
          const success = await login(usuario.email, data.senha);
          if (success) {
            navigate("/hc");
          } else {
            setSubmitError("Senha incorreta");
          }
        } else {
          setSubmitError("CPF não encontrado");
        }
      } catch (error) {
        setSubmitError("Erro ao buscar usuário");
      }
    }
  };

  return (
    <section className="w-full min-h-screen bg-background-linear flex justify-center items-center px-5 ">
      <div className="bg-[var(--color-white-button-hover)] rounded-[20px] border-2 border-[var(--color-white)] px-6 py-6">
        <span className="flex justify-center mb-3 md:mb-5">
          <img 
            src="logo-hc-verde.png"
            alt="Logo do HC"
            className="w-full max-2xl:w-[70%]" 
          />
        </span>
        <span className="flex flex-col items-center gap-3">
          <h1 className="text-[var(--color-white)] text-center text-4xl font-bold md:text-5xl">
            Bem vindo de volta!
          </h1>
          <p className="text-[var(--color-white)] text-center text-2xl mb-7 md:text-3xl md:mb-10">
            Insira seus dados para continuar.
          </p>
        </span>
        
        {/* Mensagem de erro */}
        {submitError && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-center">
            {submitError}
          </div>
        )}

        <div className="flex flex-col items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
            <div className="flex flex-col px-10 md:w-[100%]">
              <label className="text-[var(--color-white)] text-3xl font-bold mb-3">
                E-mail ou CPF:
              </label>
              <input
                type="text"
                {...register("emailOuCpf")}
                placeholder="Digite seu E-mail ou CPF"
                className="mb-10 rounded-[20px]
                  border-2 border-[var(--color-blue-0077C8)] p-3
                  bg-[var(--color-white-04)] 
                  placeholder:text-[var(--color-white-075)] text-[18px] font-bold outline-none
                  md:px-4"
                disabled={loading}
              />
              {errors.emailOuCpf && (
                <span className="text-[var(--color-red)] text-sm -mt-8 mb-5 ml-2">
                  {errors.emailOuCpf.message}
                </span>
              )}
              
              <label className="text-[var(--color-white)] text-3xl font-bold mb-3">
                Senha:
              </label>
              <input
                type="password"
                {...register("senha")}
                placeholder="Digite sua senha"
                className="mb-10 rounded-[20px]
                  border-2 border-[var(--color-blue-0077C8)] p-3
                  bg-[var(--color-white-04)] 
                  placeholder:text-[var(--color-white-075)] text-[18px] font-bold outline-none
                  md:px-4"
                disabled={loading}
              />
              {errors.senha && (
                <span className="text-[var(--color-red)] text-sm -mt-8 mb-5 ml-2">
                  {errors.senha.message}
                </span>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                title="Clique aqui para entrar."
                disabled={loading}
                className="
                  text-[var(--color-white)] px-12 py-2 flex justify-center
                  border-2 border-[var(--color-white)] 
                  rounded-[30px] text-[24px] cursor-pointer
                  disabled:opacity-50 disabled:cursor-not-allowed
                  md:hover:bg-[var(--color-white-button-hover)] md:duration-300"
              >
                {loading ? "Entrando..." : "Entrar"}
              </button>
            </div>
          </form>
        </div>
        
        <Link
          to="/criarConta"
          title="Clique aqui para seguir para a página de criar conta."
          className="text-[var(--color-white)] text-2xl"
        >
          Não tem uma conta?{" "}
          <span className="font-bold md:hover:underline">Clique aqui.</span>
        </Link>
      </div>
    </section>
  );
}