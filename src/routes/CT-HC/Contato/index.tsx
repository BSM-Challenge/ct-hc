import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contato() {
  const [mensagem, setMensagem] = useState<boolean>(false);
  const [dadosUsuario, setDadosUsuario] = useState<MensagemInput | null>(null);
  const [carregando, setCarregando] = useState<boolean>(false);

  const mensagemSchema = z.object({
    nome: z.string().min(2, "Nome deve conter no mínimo 2 caracteres."),
    email: z.email({
      message: "E-mail deve conter '@' e '.', insira um e-mail válido.",
    }),
    mensagem: z
      .string()
      .min(10, "Mensagem deve conter no mínimo 10 caracteres."),
  });

  type MensagemInput = z.infer<typeof mensagemSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MensagemInput>({
    resolver: zodResolver(mensagemSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: MensagemInput) => {
    setDadosUsuario(data);
    setCarregando(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    const currentDate = new Date().toLocaleString("pt-BR", {
      dateStyle: "short",
      timeStyle: "short",
    });

    try {
      const response = await emailjs.send(
        "service_b4gaw42",
        "template_f8vj1va",
        {
          nome: data.nome,
          email: data.email,
          mensagem: data.mensagem,
          subject: "Página de contato",
          data: currentDate,
        },
        "Lq8PxBEF42WbgxFg4"
      );

      console.log("Resposta do EmailJS:", response);

      if (response.status === 200) {
        setMensagem(true);
        setCarregando(false);
        reset();
      } else {
        alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
        setCarregando(false);
      }
    } catch (error) {
      alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  };

  const fazerOutraPergunta = () => {
    if (dadosUsuario) {
      reset({
        nome: dadosUsuario.nome,
        email: dadosUsuario.email,
        mensagem: "",
      });
    }
    setMensagem(false);
  };

  return (
    <section
      className="
    pt-30 pb-5 bg-[var(--light-blue)] flex-grow max-w-screen px-[40px]
    sm:pt-30 sm:px-15 lg:pt-40 2xl:px-40"
    >
      <h1 className="text-5xl text-center text-[var(--dark-blue-title)] font-bold">
        Contate-nos!
      </h1>
      <p className="text-2xl text-center text-[var(--dark-blue-title)] font-semibold mt-2 sm:text-2xl sm:w-[100%]">
        Ficou com alguma dúvida ou precisa de ajuda?
      </p>

      <div
        className="flex flex-col justify-center my-10
      sm:flex-col lg:flex-row 2xl:h-[100%] 2xl:w-[100%]
      "
      >
        <section
          className="bg-[var(--light-blue-2)] rounded-3xl p-3 flex-1 w-[100%] shadow-xl/20 mb-10
        sm:w-[80%] sm:rounded-3xl sm:self-center sm:mb-10
        lg:rounded-br-none lg:rounded-tr-none lg:mb-0 lg:w-[100%]"
        >
          <div className="flex flex-col sm:ml-4 md:items-center lg:px-1 lg:py-6 lg:items-start">
            {/* card endereço */}
            <div
              className="flex flex-row items-start gap-3 mb-5
            sm:gap-5 md:mb-6 md:ml-16 lg:ml-0 xl:mb-8"
            >
              <img
                className="w-17 sm:w-13 xl:w-18"
                src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761432366/icon-local_rcdozb.png"
                alt="Ícone de localização"
              />
              <div className="flex flex-col items-start gap-0.5">
                <h2
                  className="font-bold text-2xl text-[var(--dark-blue-title)]
              xl:text-3xl"
                >
                  Endereço - HC
                </h2>
                <p className="font-bold text-2sm text-[var(--dark-blue-title)] xl:text-lg">
                  Av. Dr. Enéas de Carvalho Aguiar, <br /> Nº 255 <br />{" "}
                  Cerqueira César <br /> 05403-000 <br /> São Paulo Brasil
                </p>
              </div>
            </div>

            {/* card telefone */}
            <div
              className="flex flex-row items-center gap-3 mb-5 
            sm:gap-5 md:mb-6 xl:mb-8"
            >
              <div>
                <img
                  className="w-17 sm:w-13 xl:w-18"
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761432369/icon-telefone_tm6anc.png"
                  alt="Ícone de telefone"
                />
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <h2 className="font-bold text-2xl text-[var(--dark-blue-title)] xl:text-3xl">
                  Telefone - HC
                </h2>
                <p className="font-bold text-2sm text-[var(--dark-blue-title)] xl:text-lg">
                  Telefone: (11) 2661-0000
                </p>
              </div>
            </div>

            {/* card whatsapp */}
            <div
              className="flex flex-row items-center gap-3 mb-5
            md:mb-6 lg:mb-8"
            >
              <div>
                <img
                  className="w-17 sm:w-13 xl:w-18"
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761432385/icon-whatsapp_j0e7nw.png"
                  alt="Ícone de WhatsApp"
                />
              </div>

              <div className="flex flex-col items-start gap-0.5">
                <h2 className="font-bold text-2xl text-[var(--dark-blue-title)] xl:text-3xl">
                  WhatsApp - HC
                </h2>
                <p className="font-bold text-2sm text-[var(--dark-blue-title)] xl:text-lg">
                  WhatsApp: (19) 3521-2121
                </p>
              </div>
            </div>

            {/* redes sociais */}
            <hr className="border-[var(--dark-blue-title)] w-[90%] border-2 mb-2 self-center md:w-[90%] lg:mt-5" />

            <div
              className="flex flex-col items-center gap-1
            sm:self-center sm:mr-4"
            >
              <h2 className="font-bold text-xl text-[var(--dark-blue-title)] xl:text-2xl lg:mt-2">
                Siga o HC nas Redes Sociais:
              </h2>

              <div>
                <ul className="flex flex-row gap-5">
                  <li>
                    <Link
                      to="https://www.instagram.com/hospitalhcfmusp/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761432436/icon-instagram_g6f3so.png"
                        alt="Ícone do Instagram"
                        className="w-13 h-13"
                      />
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="https://www.facebook.com/hospitaldasclinicasdafmusp/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761432474/icon-facebook_kuw6yc.png"
                        alt="Ícone do Facebook"
                        className="w-13 h-13"
                      />
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="https://www.linkedin.com/company/hcfmusp/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761432439/icon-linkedin_lifvzo.png"
                        alt="Ícone do LinkedIn"
                        className="w-13 h-13"
                      />
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="https://www.youtube.com/channel/UC_DUjcI35Hm0ix74KDQ67Jw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761432453/icon-youtube_lql8bu.png"
                        alt="Ícone do Youtube"
                        className="w-13 h-13"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-[var(--color-white)] rounded-3xl shadow-xl/20
        sm:w-[80%] sm:rounded-3xl sm:self-center sm:mb-10
        lg:rounded-l-none lg:mb-0
        lg:w-1/2 lg:h-[550px]
        xl:h-[620px]"
        >
          <div className="flex flex-col justify-center items-center w-[100%] h-[100%] sm:mt-5 xl:py-9">
            {!mensagem ? (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center w-[80%] h-[100%]
              sm:w-[80%] md:w-[70%]
              lg:py-0 lg:px-10 lg:w-[100%]
              xl:w-[75%]"
              >
                <h2
                  className="text-[var(--dark-blue-title)] text-4xl text-center font-bold mb-8
                sm:text-3xl
                md:text-4xl
                lg:text-3xl lg:mb-4"
                >
                  Mande uma mensagem!
                </h2>

                <label
                  htmlFor="nome"
                  className="text-[var(--dark-blue-title)] font-bold text-3xl mb-1"
                >
                  Nome:
                </label>
                <input
                  type="text"
                  placeholder="Digite o seu nome"
                  className="
                  bg-[var(--light-blue)] w-[100%] placeholder:text-[var(--dark-blue-2)]
                  placeholder:font-bold rounded-md py-[5px] pl-3 mb-2 border-b-4
                  border-[var(--dark-blue-title)] lg:mb-5
                  "
                  {...register("nome")}
                />
                {errors.nome && (
                  <p
                    className="text-[var(--color-red)] font-semibold text-sm mb-7
                lg:mb-2"
                  >
                    {errors.nome.message}
                  </p>
                )}

                <label
                  htmlFor="email"
                  className="text-[var(--dark-blue-title)] font-bold text-3xl mb-1"
                >
                  E-mail:
                </label>
                <input
                  type="email"
                  placeholder="Digite o seu e-mail"
                  className="
                  bg-[var(--light-blue)] placeholder:text-[var(--dark-blue-2)]
                  placeholder:font-bold rounded-md py-[5px] pl-3 mb-2 border-b-4
                  border-[var(--dark-blue-title)] lg:mb-5"
                  {...register("email")}
                />
                {errors.email && (
                  <p
                    className="text-[var(--color-red)] font-semibold text-sm mb-7
                lg:mb-2"
                  >
                    {errors.email.message}
                  </p>
                )}

                <label
                  htmlFor="mensagem"
                  className="text-[var(--dark-blue-title)] font-bold text-3xl mb-1"
                >
                  Mensagem:
                </label>
                <textarea
                  placeholder="Digite sua mensagem..."
                  className="bg-[var(--light-blue)] placeholder:text-[var(--dark-blue-2)] placeholder:font-bold
                  rounded-md py-[5px] pl-3 mb-2 w-[100%] h-40 resize-none border-b-4 border-[var(--dark-blue-title)]
                  lg:h-25
                  xl:h-44"
                  {...register("mensagem")}
                />
                {errors.mensagem && (
                  <p
                    className="text-[var(--color-red)] font-semibold text-sm mb-7
                lg:mb-2"
                  >
                    {errors.mensagem.message}
                  </p>
                )}

                <button
                  type="submit"
                  className="text-[var(--dark-blue-title)] text-2xl font-bold border-4 border-[var(--dark-blue-title)]
                rounded-xl p-2 w-[45%] mb-5 self-center hover:bg-[var(--light-blue)] hover:text-[var(--color-blue-2)]
                hover:border-[var(--color-blue-2)] cursor-pointer transition-colors duration-300
                xl:mb-0 xl:text-3xl xl:w-[35%]"
                >
                  {" "}
                  {carregando ? "Enviando..." : "Enviar"}
                </button>
              </form>
            ) : (
              <div
                className="rounded-3xl flex flex-col p-8
              lg:rounded-r-none lg:mb-8 lg:w-[100%]
              xl:p-15
              2xl:p-25"
              >
                <h4
                  className="text-4xl text-center font-semibold text-[var(--dark-blue-title)]
                lg:text-3xl lg:w-full
                xl:text-4xl"
                >
                  Mensagem enviada com sucesso! Obrigado pelo contato.
                </h4>
                <span className="flex justify-center items-center">
                  <img
                    src="https://res.cloudinary.com/dtbgsboo5/image/upload/v1761775582/icon-check_ao22ng.png"
                    alt="Imagem de check com a cor verde"
                    className="w-[70%] sm:[60%] md:w-[50%] xl:w-[40%] my-7 xl:my-12"
                  />
                </span>
                <h5
                  className="text-3xl text-center text-[var(--dark-blue-title)]
                xl:text-4xl"
                >
                  Deseja fazer outra pergunta?
                </h5>
                <ul
                  className="flex flex-col justify-center items-center w-full gap-6 mt-3
                sm:flex-row
                xl:mt-5 xl:gap-15"
                >
                  <li>
                    <button
                      title="Clique aqui para voltar"
                      onClick={() => {
                        setMensagem(false);
                        reset({
                          nome: "",
                          email: "",
                          mensagem: "",
                        });
                      }}
                      className="p-3 border-4 border-[var(--dark-blue-title)] rounded-[10px]
                    text-[var(--dark-blue-title)] text-lg cursor-pointer
                    hover:bg-[var(--hover-button)] hover:text-[var(--color-white)] duration-500"
                    >
                      Não, obrigado
                    </button>
                  </li>
                  <li>
                    <button
                      title="Clique aqui para fazer outra pergunta"
                      onClick={fazerOutraPergunta}
                      className="px-7 py-3 rounded-[10px] border-4 border-[var(--dark-blue-title)]
                      bg-[var(--dark-blue-title)] text-[#FFFFFF] text-lg cursor-pointer
                      hover:bg-[var(--hover-button)] duration-500
                      max-[870px]:w-full"
                    >
                      Sim, quero
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}
