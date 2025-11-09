import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IMaskInput } from "react-imask";

const schema = z.object({
  nome: z
    .string()
    .min(3, "O nome deve ter pelo menos 3 caracteres.")
    .max(100, "O nome deve ter no máximo 100 caracteres."),
  email: z
    .string()
    .min(1, "O e-mail é obrigatório.")
    .email("Formato de e-mail inválido."),
  senha: z
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres.")
    .max(20, "A senha deve ter no máximo 20 caracteres."),
  cpf: z
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "O CPF deve estar no formato 000.000.000-00."),
});

type CriarContaFormData = z.infer<typeof schema>;

export default function CriarConta() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CriarContaFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: CriarContaFormData) => {
    console.log("Dados válidos:", data);
    // Jogar a api aqui
  };

  return (
    <section className="w-full min-h-screen bg-background-linear flex justify-center items-center px-70">
      <div className="
      w-full bg-[var(--color-white-button-hover)] rounded-[20px]
      border-2 border-[var(--color-white)] pr-7.5 pl-5 pt-7.5 pb-9"
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
            <img src="logo-hc-verde.png" alt="Logo do HC" className="2xl:w-[90%]" />
          </span>
        </div>

        <div className="flex flex-col gap-[70px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-wrap justify-around gap-10"
          >
            {/* Nome */}
            <div className="flex flex-col">
              <label className="text-[var(--color-white)] text-4xl font-bold mb-5">
                Nome:
              </label>
              <input
                type="text"
                placeholder="Digite seu nome completo"
                {...register("nome")}
                className={`w-[430px] px-5 py-3.5 rounded-[20px] border-2 ${
                  errors.nome
                    ? "border-[var(--color-red)]"
                    : "border-[var(--color-blue-0077C8)]"
                } 
                bg-[var(--color-white-04)] 
                placeholder:text-[var(--color-white-075)] text-[18px] font-bold outline-none`}
              />
              {errors.nome && (
                <span className="text-[var(--color-red)] text-lg font-semibold ml-2">
                  {errors.nome.message}
                </span>
              )}
            </div>

            {/* CPF */}
            <div className="flex flex-col">
              <label className="text-[var(--color-white)] text-4xl font-bold mb-5">
                CPF:
              </label>
              <Controller
                name="cpf"
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    {...field}
                    mask="000.000.000-00"
                    placeholder="Digite seu CPF"
                    className={`w-[430px] px-5 py-3.5 rounded-[20px] border-2 ${
                      errors.cpf
                        ? "border-[var(--color-red)]"
                        : "border-[var(--color-blue-0077C8)]"
                    } 
                    bg-[var(--color-white-04)] 
                    placeholder:text-[var(--color-white-075)] text-[18px] font-bold outline-none`}
                  />
                )}
              />
              {errors.cpf && (
                <span className="text-[var(--color-red)] text-lg font-semibold ml-2">
                  {errors.cpf.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-[var(--color-white)] text-4xl font-bold mb-5">
                E-mail:
              </label>
              <input
                type="text"
                placeholder="Digite seu e-mail"
                {...register("email")}
                className={`w-[430px] px-5 py-3.5 rounded-[20px] border-2 ${
                  errors.email
                    ? "border-[var(--color-red)]"
                    : "border-[var(--color-blue-0077C8)]"
                } 
                bg-[var(--color-white-04)] 
                placeholder:text-[var(--color-white-075)] text-[18px] font-bold outline-none`}
              />
              {errors.email && (
                <span className="text-[var(--color-red)] text-lg font-semibold ml-2">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Senha */}
            <div className="flex flex-col">
              <label className="text-[var(--color-white)] text-4xl font-bold mb-5">
                Senha:
              </label>
              <input
                type="password"
                placeholder="Digite sua senha"
                {...register("senha")}
                className={`w-[430px] px-5 py-3.5 rounded-[20px] border-2 ${
                  errors.senha
                    ? "border-[var(--color-red)]"
                    : "border-[var(--color-blue-0077C8)]"
                } 
                bg-[var(--color-white-04)] 
                placeholder:text-[var(--color-white-075)] text-[18px] font-bold outline-none`}
              />
              {errors.senha && (
                <span className="text-[var(--color-red)] text-lg font-semibold ml-2">
                  {errors.senha.message}
                </span>
              )}
            </div>

            {/* Link e o Botão */}
            <ul className="flex justify-between items-center w-full ">
              <li className="pl-3">
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
              <li className="pl-3">
                <button
                  type="submit"
                  title="Clique aqui para criar sua conta."
                  className="
                  text-[var(--color-white)] text-center px-12 py-2 
                  border-2 border-[var(--color-white)] rounded-[30px]
                  text-[24px] cursor-pointer hover:bg-[var(--color-white-button-hover)]
                  duration-300"
                >
                  Criar Conta
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
}