import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";


export default function Contato() {

  const [mensagem, setMensagem] = useState<boolean>(false);
  const [dadosUsuario, setDadosUsuario] = useState<MensagemInput | null>(null);
  const [carregando, setCarregando] = useState<boolean>(false);

  const mensagemSchema = z.object({
    nome: z.string().min(2, "Nome deve conter no mínimo 2 caracteres."),
    email: z.email({ message: "E-mail deve conter '@' e '.', insira um e-mail válido." }),
    mensagem: z
      .string()
      .min(10, "Mensagem deve conter no mínimo 10 caracteres."),
  });

  type MensagemInput = z.infer<typeof mensagemSchema>;

  const { register, handleSubmit, formState: { errors }, reset } = useForm<MensagemInput>({
    resolver: zodResolver(mensagemSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: MensagemInput) => {
    setDadosUsuario(data)
    setCarregando(true)

    await new Promise((resolve) => setTimeout(resolve, 800))

    setCarregando(false)
    setMensagem(true)
    reset()
  }

  const fazerOutraPergunta = () => {
    if (dadosUsuario) {
      reset(dadosUsuario)
    }
    setMensagem(false)
  };


  return (
    <main className="pt-30 pb-5 bg-[var(--light-blue)] flex-grow max-w-screen px-[40px]
    sm:pt-30 sm:px-15 lg:pt-40 2xl:px-40">
      <h1 className="text-5xl text-center text-[var(--dark-blue-title)] font-bold">
        Contate-nos!
      </h1>
      <p className="text-2xl text-center text-[var(--dark-blue-title)] font-semibold mt-2 sm:text-2xl sm:w-[100%]">
        Ficou com alguma dúvida ou precisa de ajuda?
      </p>

      <div className="flex flex-col justify-center my-10
      sm:flex-col lg:flex-row 2xl:h-[100%] 2xl:w-[100%]">
        <section className="bg-[var(--light-blue-2)] rounded-3xl p-6 flex-1 w-[100%] shadow-xl/20 mb-10
        sm:w-[80%] sm:rounded-3xl sm:self-center sm:mb-10
        lg:rounded-br-none lg:rounded-tr-none lg:mb-0 lg:w-[100%]">
          <div className="flex flex-col sm:ml-4 md:items-center lg:px-1 lg:py-6 lg:items-start">

            {/* card endereço */}
            <div className="flex flex-row items-start gap-3 mb-5
            sm:gap-5 md:mb-6 md:ml-16 lg:ml-0 xl:mb-8">
              <img className="w-17 sm:w-13 xl:w-18" src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761432366/icon-local_rcdozb.png" alt="Ícone de localização" />
              <div className="flex flex-col items-start gap-0.5">
                <h2 className="font-bold text-2xl text-[var(--dark-blue-title)]
              xl:text-3xl">
                  Endereço - HC
                </h2>
                <p className="font-bold text-2sm text-[var(--dark-blue-title)] xl:text-lg">
                  Av. Dr. Enéas de Carvalho Aguiar, <br /> Nº 255 <br /> Cerqueira
                  César <br /> 05403-000 <br /> São Paulo Brasil
                </p>
              </div>
            </div>

            {/* card telefone */}
            <div className="flex flex-row items-center gap-3 mb-5 
            sm:gap-5 md:mb-6 xl:mb-8">
              <div>
                <img className="w-17 sm:w-13 xl:w-18" src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761432369/icon-telefone_tm6anc.png" alt="Ícone de telefone" />
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
            <div className="flex flex-row items-center gap-3 mb-5
            md:mb-6 lg:mb-8">
              <div>
                <img className="w-17 sm:w-13 xl:w-18" src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761432385/icon-whatsapp_j0e7nw.png" alt="Ícone de WhatsApp" />
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
            <hr className="border-[var(--dark-blue-title)] w-70 border-2 mb-2 self-center md:w-[90%] lg:mt-5" />

            <div className="flex flex-col items-center gap-1
            sm:self-center sm:mr-4">
              <h2 className="font-bold text-xl text-[var(--dark-blue-title)] xl:text-2xl lg:mt-2">
                Siga o HC nas Redes Sociais:
              </h2>

              <div>
                <ul className="flex flex-row gap-5">
                  <li>
                    <Link to="https://www.instagram.com/hospitalhcfmusp/" target="_blank" rel="noopener noreferrer">
                      <img src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761432436/icon-instagram_g6f3so.png" alt="Ícone do Instagram" className="w-13 h-13" />
                    </Link>
                  </li>

                  <li>
                    <Link to="https://www.facebook.com/hospitaldasclinicasdafmusp/" target="_blank" rel="noopener noreferrer">
                      <img src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761432474/icon-facebook_kuw6yc.png" alt="Ícone do Facebook" className="w-13 h-13" />
                    </Link>
                  </li>

                  <li>
                    <Link to="https://www.linkedin.com/company/hcfmusp/" target="_blank" rel="noopener noreferrer">
                      <img src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761432439/icon-linkedin_lifvzo.png" alt="Ícone do LinkedIn" className="w-13 h-13" />
                    </Link>
                  </li>

                  <li>
                    <Link to="https://www.youtube.com/channel/UC_DUjcI35Hm0ix74KDQ67Jw" target="_blank" rel="noopener noreferrer">
                      <img src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761432453/icon-youtube_lql8bu.png" alt="Ícone do Youtube" className="w-13 h-13" />
                    </Link>
                  </li>
                </ul>

              </div>
            </div>

          </div>
        </section>

        <section className="bg-[var(--color-white)] rounded-3xl w-[100%] shadow-xl/20
        sm:w-[80%] sm:rounded-3xl sm:self-center sm:mb-10
        lg:rounded-bl-none lg:rounded-tl-none lg:mb-0 lg:w-1/2">

          <div className="flex flex-col items-center w-[100%] h-[100%] pt-6 sm:items-center xl:py-13">
            <h2 className="text-[var(--dark-blue-title)] text-4xl text-center font-bold mb-8
            sm:text-center sm:text-3xl md:text-4xl lg:self-center lg:mb-5">Mande uma mensagem!</h2>


            {!mensagem ? (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[80%] h-[100%]
              sm:w-[80%] md:w-[70%]
              lg:py-0 lg:px-10 lg:w-[100%]
              xl:w-[90%]">
                <label htmlFor="nome" className="text-[var(--dark-blue-title)] font-bold text-3xl mb-1">Nome:</label>
                <input type="text" placeholder="Digite o seu nome" className="bg-[var(--light-blue)] w-[100%] placeholder:text-[var(--dark-blue-2)] placeholder:font-bold rounded-md py-[5px] pl-3 mb-5 border-b-4 border-[var(--dark-blue-title)]" {...register("nome")} />
                {errors.nome && (<p>{errors.nome.message}</p>)}

                <label htmlFor="email" className="text-[var(--dark-blue-title)] font-bold text-3xl mb-1">E-mail:</label>
                <input type="email" placeholder="Digite o seu e-mail" className="bg-[var(--light-blue)] placeholder:text-[var(--dark-blue-2)] placeholder:font-bold rounded-md py-[5px] pl-3 mb-5 border-b-4 border-[var(--dark-blue-title)]" {...register("email")} />
                {errors.email && (<p>{errors.email.message}</p>)}

                <label htmlFor="mensagem" className="text-[var(--dark-blue-title)] font-bold text-3xl mb-1">Mensagem:</label>
                <textarea placeholder="Digite sua mensagem..."
                  className="bg-[var(--light-blue)] placeholder:text-[var(--dark-blue-2)] placeholder:font-bold rounded-md py-[5px] pl-3 mb-8 w-[100%] h-40 resize-none border-b-4 border-[var(--dark-blue-title)] lg:h-40 lg:mb-5 xl:mb-8" {...register("mensagem")} />
                {errors.mensagem && (<p>{errors.mensagem.message}</p>)}

                <button type="submit" className="text-[var(--dark-blue-title)] text-2xl font-bold border-4 border-[var(--dark-blue-title)] rounded-xl p-2 w-[45%] mb-5 self-center hover:bg-[var(--light-blue)] hover:text-[var(--color-blue-2)] hover:border-[var(--color-blue-2)] cursor-pointer transition-colors duration-300 xl:mb-0 xl:text-3xl"> {carregando ? "Enviando..." : "Enviar"}</button>
              </form>
            ) : (
              <div>
                <h4 className="text-4xl text-center">
                  Mensagem enviada com sucesso! Obrigado pelo contato.
                </h4>
                <span>
                  <img src="https://res.cloudinary.com/dtbgsboo5/image/upload/v1761775582/icon-check_ao22ng.png" alt="Imagem de check com a cor verde" />
                </span>
                <h5 className="text-3xl text-center">Deseja fazer outra pergunta?</h5>
                <ul className="flex justify-around w-full">
                  <li>
                    <button
                      title="Clique aqui para voltar"
                      onClick={() => {
                        setMensagem(false)
                        reset({
                          nome: "",
                          email: "",
                          mensagem: "",
                        })
                      }}
                      >
                      Não, obrigado
                    </button>
                  </li>
                  <li>
                    <button
                      title="Clique aqui para fazer outra pergunta"
                      onClick={fazerOutraPergunta}
                      >
                      Sim, gostaria
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
