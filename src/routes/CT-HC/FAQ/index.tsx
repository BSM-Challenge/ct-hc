import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from 'react-icons/fa';
import { faqData } from '../../../data/CT-HC/faqData';import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const handleLinkClick = (id: string, elementId: string) => {
    toggleItem(id);
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView();
      }
    }, 100);
  };

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

  const { register, handleSubmit, formState: { errors }, reset} = useForm<MensagemInput>({
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
  };

  const fazerOutraPergunta = () => {
    if (dadosUsuario) {
      reset(dadosUsuario)
    }
    setMensagem(false)
  };

  return (
    <main className="bg-[var(--light-blue)]">
      <section
        className="px-10 pt-30 min-h-screen max-[500px]:px-5
      lg:pt-40 lg:px-0 lg:pr-10
      xl:pt-45 2xl:pr-35"
      >
        <div className="w-full flex flex-col gap-5">
          <div
            className="h-full flex justify-center items-center 
          xl:justify-center"
          >
            <h1
              className="text-4xl text-center text-[var(--dark-blue-title)] font-bold mb-10
            sm:text-4xl 
            xl:text-5xl
            2xl:ml-45"
            >
              Perguntas Frequentes
            </h1>
          </div>
          <div
            className="flex flex-col justify-between gap-20 items-center w-full
            lg:flex-row lg:gap-10
            xl:flex-row"
          >
            <div className="w-full md:w-[70%] lg:w-[50%] xl:w-[25%] 2xl:w-[20%]">
              <nav
                className="bg-[var(--color-blue-2)] rounded-[20px] p-6 text-[var(--color-white)] flex flex-col gap-8 w-full
                lg:rounded-l-[0]"
              >
                <ul className="flex flex-col gap-[.6rem] text-[var(--color-white)]">
                  <li className="border-b-2 border-[var(--color-white)]">
                    <h2 className="text-xl font-bold">Sobre o Projeto</h2>
                  </li>
                  <li className="ml-2">
                    <Link
                      to="#sobre-0"
                      className="text-[1.1rem] hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick("0-0", "sobre-0");
                      }}
                    >
                      CT-HC e Portal HC
                    </Link>
                  </li>
                  <li className="ml-2">
                    <Link
                      to="#sobre-1"
                      className="text-[1.1rem] hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick("0-1", "sobre-1");
                      }}
                    >
                      CT-HC gratuito
                    </Link>
                  </li>
                </ul>
                <ul className="flex flex-col gap-[.6rem] text-[var(--color-white)]">
                  <li className="border-b-2 border-[var(--color-white)]">
                    <h2 className="text-xl font-bold">Dados e Segurança</h2>
                  </li>
                  <li className="ml-2">
                    <Link
                      to="#dados-0"
                      className="text-[1.1rem] hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick("1-0", "dados-0");
                      }}
                    >
                      Dados do paciente
                    </Link>
                  </li>
                  <li className="ml-2">
                    <Link
                      to="#dados-1"
                      className="text-[1.1rem] hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick("1-1", "dados-1");
                      }}
                    >
                      Informações pessoais
                    </Link>
                  </li>
                  <li className="ml-2">
                    <Link
                      to="#dados-2"
                      className="text-[1.1rem] hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick("1-2", "dados-2");
                      }}
                    >
                      Informações no tutorial
                    </Link>
                  </li>
                </ul>
                <ul className="flex flex-col gap-[.6rem] text-[var(--color-white)]">
                  <li className="border-b-2 border-[var(--color-white)]">
                    <h2 className="text-xl font-bold">Uso do tutorial</h2>
                  </li>
                  <li className="ml-2">
                    <Link
                      to="#tutorial-0"
                      className="text-[1.1rem] hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick("2-0", "tutorial-0");
                      }}
                    >
                      Pular tutorial
                    </Link>
                  </li>
                  <li className="ml-2">
                    <Link
                      to="#tutorial-1"
                      className="text-[1.1rem] hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick("2-1", "tutorial-1");
                      }}
                    >
                      Uso no celular
                    </Link>
                  </li>
                  <li className="ml-2">
                    <Link
                      to="#tutorial-2"
                      className="text-[1.1rem] hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick("2-2", "tutorial-2");
                      }}
                    >
                      Repetir tutorial
                    </Link>
                  </li>
                  <li className="ml-2">
                    <Link
                      to="#tutorial-3"
                      className="text-[1.1rem] hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick("2-3", "tutorial-3");
                      }}
                    >
                      Cria conta CT-HC
                    </Link>
                  </li>
                  <li className="ml-2">
                    <Link
                      to="#tutorial-4"
                      className="text-[1.1rem] hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick("2-4", "tutorial-4");
                      }}
                    >
                      Uso em dispositivos móveis
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              className="bg-[var(--color-white)] flex flex-col items-center w-full p-8
            border-[4px] border-[var(--color-blue-2)] rounded-[20px] h-full xl:w-[70%]"
            >
              {!mensagem && (
                <h3
                  className="text-3xl text-center font-bold text-[var(--dark-blue-title)] mb-5
                md:w-[80%] 2xl:text-4xl 2xl:w-[50%]"
                >
                  Tem alguma outra pergunta? Mande para nós!
                </h3>
              )}

              {!mensagem ? (
                <div
                  className="flex justify-center items-center flex-col-reverse
                lg:flex-row lg:w-full"
                >
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    method="POST"
                    className="flex flex-col h-fit mt-10
                  xl:w-[50%]"
                  >
                    <label
                      htmlFor="name"
                      className="text-2xl font-bold text-[var(--dark-blue-title)] mb-2"
                    >
                      Nome:
                    </label>
                    <input
                      type="text"
                      placeholder="Digite seu nome"
                      className="w-full px-4 py-3 rounded-[10px]
                    bg-gradient-to-b from-[var(--color-white)] to-gray-200 border-b-3
                    border-[var(--dark-blue-title)] placeholder-[--color-gray] placeholder:font-semibold outline-none
                    min-[450px]:w-[340px] sm:w-[450px]
                    lg:w-[250px] xl:w-[90%]"
                      {...register("nome")}
                    />
                    {errors.nome && (
                      <p className="text-red-500 font-semibold text-sm">
                        {errors.nome.message}
                      </p>
                    )}

                    <label
                      htmlFor="e-mail"
                      className="text-2xl font-bold text-[var(--dark-blue-title)] mt-10 mb-2"
                    >
                      E-mail:
                    </label>
                    <input
                      type="text"
                      placeholder="Digite seu e-mail"
                      className="w-full px-4 py-3 rounded-[10px]
                    bg-gradient-to-b from-[var(--color-white)] to-gray-200 border-b-3
                    border-[var(--dark-blue-title)] placeholder-[--color-gray] placeholder:font-semibold outline-none
                    lg:w-[250px] xl:w-[90%]"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-red-500 font-semibold text-sm">
                        {errors.email.message}
                      </p>
                    )}

                    <label
                      htmlFor="pergunta"
                      className="text-2xl font-bold text-[var(--dark-blue-title)] mt-10 mb-2"
                    >
                      Qual a sua pergunta?
                    </label>
                    <textarea
                      placeholder="Digite sua mensagem..."
                      className=" resize-none w-full h-[120px] px-4 py-3 rounded-[10px]
                    bg-gradient-to-b from-[var(--color-white)] to-gray-200 border-b-3 border-l-3 border-r-3
                    border-[var(--dark-blue-title)] placeholder-[--color-gray] placeholder:font-semibold outline-none
                    lg:w-[250px] xl:w-[90%]"
                      {...register("mensagem")}
                    />
                    {errors.mensagem && (
                      <p className="text-red-500 font-semibold text-sm">
                        {errors.mensagem.message}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="bg-[var(--color-blue-2)] p-2 w-[50%] self-center text-[var(--color-white)]
                    mt-8 rounded-[10px] font-bold text-2xl cursor-pointer shadow-[4px_4px_15px_var(--color-blue)]
                    hover:bg-[var(--hover-button)] transition-colors duration-300
                    sm:w-[30%]
                    lg:w-[60%]
                    xl:w-[30%] xl:self-start xl:ml-35"
                    >
                      {carregando ? "Enviando..." : "Enviar"}
                    </button>
                  </form>
                  <figcaption>
                    <img
                      src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761434429/img-question_m7yane.png"
                      alt="Pessoa fazendo uma pergunta."
                    />
                  </figcaption>
                </div>
              ) : (
                <div
                  className="flex flex-col items-center text-center text-[var(--dark-blue-title)]">
                  <h4 className="text-3xl font-bold sm:text-4xl xl:w-[80%] 2xl:text-5xl">
                    Pergunta enviada com sucesso! Obrigado pelo contato.
                  </h4>
                  <span>
                    <img
                      src="https://res.cloudinary.com/dtbgsboo5/image/upload/v1761775582/icon-check_ao22ng.png"
                      alt="Imagem de check com a cor verde"
                      className="my-6 lg:my-10"
                    />
                  </span>
                  <h5 className="text-3xl font-semibold 2xl:text-4xl">Deseja fazer outra pergunta?</h5>
                  <ul className="flex items-center
                  sm:flex-row sm:gap-10 lg:gap-20">
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
                        className="border-[var(--color-blue-2)] border-4 p-3 text-[var(--color-blue-2)]
                        my-8 rounded-[10px] font-bold text-xl cursor-pointer shadow-[4px_4px_15px_var(--color-blue)]
                        hover:bg-[var(--color-blue-2)] hover:text-[var(--color-white)] transition-colors duration-300
                        lg:text-2xl"
                      >
                        Não, obrigado
                      </button>
                    </li>
                    <li>
                      <button
                        title="Clique aqui para fazer outra pergunta"
                        onClick={fazerOutraPergunta}
                        className="bg-[var(--color-blue-2)] p-4 text-[var(--color-white)]
                        rounded-[10px] font-bold text-xl cursor-pointer shadow-[4px_4px_15px_var(--color-blue)]
                        hover:bg-[var(--hover-button)] transition-colors duration-300
                        lg:text-2xl"
                      >
                        Sim, gostaria
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen px-10 lg:px-20 xl:px-43">
        <div className="flex flex-col gap-32 py-40">
          {/* Categoria: Sobre o projeto */}
          <ul className="flex flex-col gap-8">
            <li>
              <h3 className="text-4xl text-[var(--dark-blue-title)] font-bold mb-3">
                Sobre o projeto
              </h3>
              <hr className="border-b-4 border-[var(--dark-blue-title)]" />
            </li>

            {faqData[0].itens.map((item, index) => {
              const itemId = `0-${index}`;
              const isOpen = openItem === itemId;

              return (
                <li
                  key={index}
                  id={`sobre-${index}`}
                  className="
                  flex flex-col bg-[var(--color-blue)] rounded-[20px] border-[var(--color-blue-2)] border-b-5 px-3 py-2 
                  cursor-pointer transition-all duration-300 text-[var(--color-white)] hover:bg-[var(--color-blue-2)]"
                  onClick={() => toggleItem(itemId)}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-2xl text-[var(--color-white)]">
                      {item.pergunta}
                    </p>
                    <div
                      className={`
                      mr-4 p-2 bg-[var(--color-blue)] rounded-full 
                      transition-transform duration-300 hover:bg-[var(--color-blue-2)] ${
                        isOpen ? "rotate-180" : ""
                      }
                      `}
                    >
                      <FaAngleDown className="text-[var(--color-white)] text-4xl" />
                    </div>
                  </div>

                  {/* Resposta que aparece quando o item está aberto */}
                  <div
                    className={`
                    overflow-hidden transition-all duration-500 ease-in-out 
                    ${isOpen ? "max-h-96 mt-4" : "max-h-0"}
                    `}
                  >
                    <div className="p-4 bg-[var(--light-blue-2)] rounded-2xl text-[var(--dark-blue-title)]">
                      <p className="text-lg font-bold">{item.resposta}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Categoria: Dados e Segurança */}
          <ul className="flex flex-col gap-8">
            <li>
              <h4 className="text-4xl text-[var(--dark-blue-title)] font-bold mb-3">
                Dados e Segurança
              </h4>
              <hr className="border-b-4 border-[var(--dark-blue-title)]" />
            </li>

            {faqData[1].itens.map((item, index) => {
              const itemId = `1-${index}`;
              const isOpen = openItem === itemId;

              return (
                <li
                  key={index}
                  id={`dados-${index}`}
                  className="
                  flex flex-col bg-[var(--color-blue)] rounded-[20px] border-[var(--color-blue-2)] border-b-5 px-3 py-2 
                  cursor-pointer transition-all duration-300 text-[var(--color-white)] hover:bg-[var(--color-blue-2)]"
                  onClick={() => toggleItem(itemId)}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-2xl text-[var(--color-white)]">
                      {item.pergunta}
                    </p>
                    <div
                      className={`
                      mr-4 p-2 bg-[var(--color-blue)] rounded-full 
                      transition-transform duration-300 hover:bg-[var(--color-blue-2)] ${
                        isOpen ? "rotate-180" : ""
                      }
                      `}
                    >
                      <FaAngleDown className="text-[var(--color-white)] text-4xl" />
                    </div>
                  </div>

                  {/* Resposta que aparece quando o item está aberto */}
                  <div
                    className={`
                    overflow-hidden transition-all duration-500 ease-in-out 
                    ${isOpen ? "max-h-96 mt-4" : "max-h-0"}
                    `}
                  >
                    <div className="p-4 bg-[var(--light-blue-2)] rounded-2xl text-[var(--dark-blue-title)]">
                      <p className="text-lg font-bold">{item.resposta}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Categoria: Uso do Tutorial */}
          <ul className="flex flex-col gap-8">
            <li>
              <h5 className="text-4xl text-[var(--dark-blue-title)] font-bold mb-3">
                Uso do Tutorial
              </h5>
              <hr className="border-b-4 border-[var(--dark-blue-title)]" />
            </li>

            {faqData[2].itens.map((item, index) => {
              const itemId = `2-${index}`;
              const isOpen = openItem === itemId;

              return (
                <li
                  key={index}
                  id={`tutorial-${index}`}
                  className="
                  flex flex-col bg-[var(--color-blue)] rounded-[20px] border-[var(--color-blue-2)] border-b-5 px-3 py-2
                  cursor-pointer transition-all duration-300 text-[var(--color-white)] hover:bg-[var(--color-blue-2)]"
                  onClick={() => toggleItem(itemId)}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-2xl text-[var(--color-white)]">
                      {item.pergunta}
                    </p>
                    <div
                      className={`
                      mr-4 p-2 bg-[var(--color-blue)] rounded-full 
                      transition-transform duration-300 hover:bg-[var(--color-blue-2)] ${
                        isOpen ? "rotate-180" : ""
                      }
                      `}
                    >
                      <FaAngleDown className="text-[var(--color-white)] text-2xl" />
                    </div>
                  </div>

                  {/* Resposta que aparece quando o item está aberto */}
                  <div
                    className={`
                    overflow-hidden transition-all duration-500 ease-in-out 
                    ${isOpen ? "max-h-96 mt-4" : "max-h-0"}
                    `}
                  >
                    <div className="p-4 bg-[var(--light-blue-2)] rounded-2xl text-[var(--dark-blue-title)]">
                      <p className="text-lg font-bold">{item.resposta}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}