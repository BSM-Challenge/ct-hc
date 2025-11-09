import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

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
  const navigate = useNavigate();
  const [mensagemErro, setMensagemErro] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const usuarioSalvo = localStorage.getItem("usuarioHC");

    if (!usuarioSalvo) {
      setMensagemErro("Nenhuma conta encontrada. Crie uma conta primeiro!");
      return;
    }

    const usuario = JSON.parse(usuarioSalvo);

    const loginCorreto =
      (usuario.email === data.emailOuCpf ||
        usuario.cpf.replace(/\D/g, "") === data.emailOuCpf.replace(/\D/g, "")) &&
      usuario.senha === data.senha;

    if (loginCorreto) {
      setMensagemErro("");
      navigate("/hc");
    } else {
      setMensagemErro("E-mail/CPF ou senha incorreto.");
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

        <div className="flex flex-col items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full"
          >
            <div className="flex flex-col px-10 md:w-[100%]">
              {/* E-mail ou CPF */}
              <label className="text-[var(--color-white)] text-3xl font-bold mb-3">
                E-mail ou CPF:
              </label>
              <input
                type="text"
                {...register("emailOuCpf")}
                placeholder="Digite seu E-mail ou CPF"
                className={`mb-10 rounded-[20px] p-3 border-2 ${
                  errors.emailOuCpf
                    ? "border-[var(--color-red)]"
                    : "border-[var(--color-blue-0077C8)]"
                } 
                bg-[var(--color-white-04)] 
                placeholder:text-[var(--color-white-075)] text-[18px] font-bold outline-none md:px-4`}
              />
              {errors.emailOuCpf && (
                <span className="text-[var(--color-red)] text-sm -mt-8 mb-5 ml-2">
                  {errors.emailOuCpf.message}
                </span>
              )}

              {/* Senha */}
              <label className="text-[var(--color-white)] text-3xl font-bold mb-3">
                Senha:
              </label>
              <input
                type="password"
                {...register("senha")}
                placeholder="Digite sua senha"
                className={`mb-10 rounded-[20px] p-3 border-2 ${
                  errors.senha
                    ? "border-[var(--color-red)]"
                    : "border-[var(--color-blue-0077C8)]"
                } 
                bg-[var(--color-white-04)] 
                placeholder:text-[var(--color-white-075)] text-[18px] font-bold outline-none md:px-4`}
              />
              {errors.senha && (
                <span className="text-[var(--color-red)] text-sm -mt-8 ml-2">
                  {errors.senha.message}
                </span>
              )}
            </div>
            {mensagemErro && (
              <p className="text-[var(--color-red)] text-center text-lg font-semibold -mt-5 mb-2">
                {mensagemErro}
              </p>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                title="Clique aqui para entrar."
                className="
                text-[var(--color-white)] px-12 py-2 
                flex justify-center border-2 border-[var(--color-white)] 
                rounded-[30px] text-[24px] cursor-pointer 
                md:hover:bg-[var(--color-white-button-hover)] md:duration-300"
              >
                Entrar
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
