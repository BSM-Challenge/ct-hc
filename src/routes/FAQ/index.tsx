import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from 'react-icons/fa';
import { faqData } from '../../data/faqData';

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

  return (
    <main className="bg-[var(--light-blue)]">
      <section className="
      pt-30 px-10 min-h-screen
      max-[500px]:px-5
      lg:pt-35 
      xl:px-20 xl:pt-40"
      >
        <div className="w-full flex flex-col gap-5">
          <div className="
          h-full flex justify-center items-center 
          xl:justify-center"
          >
            <h1 className="
            text-3xl text-[var(--dark-blue-title)] font-bold 
            sm:text-4xl 
            xl:text-5xl"
            >
              Perguntas Frequentes
            </h1>
          </div>
          <div className="
          flex flex-col justify-around gap-20 
          lg:flex-row
          xl:flex-row"
          >
            <nav className="
            w-[100%] flex flex-col gap-4 pl-7 pr-10 py-7
            bg-[var(--Color-blue-709CFF)] rounded-[40px]
            lg:w-[50%]
            xl:w-[35%]"
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
                      handleLinkClick('0-0', 'sobre-0');
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
                      handleLinkClick('0-1', 'sobre-1');
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
                      handleLinkClick('1-0', 'dados-0');
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
                      handleLinkClick('1-1', 'dados-1');
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
                      handleLinkClick('1-2', 'dados-2');
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
                      handleLinkClick('2-0', 'tutorial-0');
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
                      handleLinkClick('2-1', 'tutorial-1');
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
                      handleLinkClick('2-2', 'tutorial-2');
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
                      handleLinkClick('2-3', 'tutorial-3');
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
                      handleLinkClick('2-4', 'tutorial-4');
                    }}
                  >
                    Uso em dispositivos móveis
                  </Link>
                </li>
              </ul>
            </nav>
            
            {/* Resto do código permanece igual */}
            <div className="bg-[var(--light-blue-2)] w-full rounded-[60px] h-[10%] mt-7">
              <div className=" flex flex-col items-center gap-5 h-full py-5">
                <figcaption>
                  <img src="./public/icon-pergunta.png" alt="Ícone de pergunta" />
                </figcaption>
                <form 
                method="POST"
                className="flex flex-col justify-center items-center gap-10">
                  <h3 className="text-3xl w-[75%] text-center font-bold">Tem alguma outra pergunta? Mande para nós!</h3>
                  <input 
                  type="text" placeholder="Escreva aqui a sua pergunta..."
                  className="
                  w-[80%] p-4 rounded-2xl
                  bg-[var(--light-blue)] border-2 border-[var(--border-black)] 
                  placeholder-[--color-gray] placeholder:font-bold
                  outline-none
                  "
                  />
                  <button className="
                  bg-[var(--color-blue)] p-2 w-[30%] text-[var(--color-white)]
                  rounded-full font-bold text-2xl cursor-pointer
                  shadow-[4px_4px_15px_var(--color-blue)]
                  hover:bg-[var(--hover-button)] transition-colors duration-300
                  "
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen px-10 pt-30 lg:px-20 xl:px-43">
        <div className="flex flex-col gap-32 py-40">
          {/* Categoria: Sobre o projeto */}
          <ul className="flex flex-col gap-8">
            <li>
              <h3 className="text-4xl font-bold border-b-4 border-[var(--dark-blue-title)]">Sobre o projeto</h3>
            </li>
            
            {faqData[0].itens.map((item, index) => {
              const itemId = `0-${index}`;
              const isOpen = openItem === itemId;
              
              return (
                <li 
                  key={index}
                  id={`sobre-${index}`}
                  className="
                  flex flex-col bg-[var(--Color-blue-709CFF)] rounded-3xl p-5 
                  cursor-pointer transition-all duration-300 
                  hover:bg-[var(--hover-light-blue)]
                  "
                  onClick={() => toggleItem(itemId)}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-2xl text-[var(--dark-blue-title)]">
                      {item.pergunta}
                    </p>
                    <div className={`
                      mr-4 p-2 bg-[var(--color-blue)] rounded-full 
                      transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}
                      `}>
                      <FaAngleDown className="text-[var(--color-white)] text-2xl"/>
                    </div>
                  </div>
                  
                  {/* Resposta que aparece quando o item está aberto */}
                  <div className={`
                    overflow-hidden transition-all duration-500 ease-in-out 
                    ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}
                    `}>
                    <div className="p-4 bg-[var(--color-blue)] rounded-2xl text-white">
                      <p className="text-lg">{item.resposta}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Categoria: Dados e Segurança */}
          <ul className="flex flex-col gap-8">
            <li>
              <h4 className="text-4xl font-bold border-b-4 border-[var(--dark-blue-title)]">Dados e Segurança</h4>
            </li>
            
            {faqData[1].itens.map((item, index) => {
              const itemId = `1-${index}`;
              const isOpen = openItem === itemId;
              
              return (
                <li 
                  key={index}
                  id={`dados-${index}`}
                  className="
                  flex flex-col bg-[var(--Color-blue-709CFF)] rounded-3xl p-5 
                  cursor-pointer transition-all duration-300 
                  hover:bg-[var(--hover-light-blue)]
                  "
                  onClick={() => toggleItem(itemId)}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-2xl text-[var(--dark-blue-title)]">
                      {item.pergunta}
                    </p>
                    <div className={`
                      mr-4 p-2 bg-[var(--color-blue)] rounded-full 
                      transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}
                      `}>
                      <FaAngleDown className="text-[var(--color-white)] text-2xl"/>
                    </div>
                  </div>
                  
                  {/* Resposta que aparece quando o item está aberto */}
                  <div className={`
                    overflow-hidden transition-all duration-500 ease-in-out 
                    ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}
                    `}>
                    <div className="p-4 bg-[var(--color-blue)] rounded-2xl text-white">
                      <p className="text-lg">{item.resposta}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Categoria: Uso do Tutorial */}
          <ul className="flex flex-col gap-8">
            <li>
              <h5 className="text-4xl font-bold border-b-4 border-[var(--dark-blue-title)]">Uso do Tutorial</h5>
            </li>
            
            {faqData[2].itens.map((item, index) => {
              const itemId = `2-${index}`;
              const isOpen = openItem === itemId;
              
              return (
                <li 
                  key={index}
                  id={`tutorial-${index}`}
                  className="
                  flex flex-col bg-[var(--Color-blue-709CFF)] rounded-3xl p-5 
                  cursor-pointer transition-all duration-300 
                  hover:bg-[var(--hover-light-blue)]
                  "
                  onClick={() => toggleItem(itemId)}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-2xl text-[var(--dark-blue-title)]">
                      {item.pergunta}
                    </p>
                    <div className={`
                      mr-4 p-2 bg-[var(--color-blue)] rounded-full 
                      transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}
                      `}>
                      <FaAngleDown className="text-[var(--color-white)] text-2xl"/>
                    </div>
                  </div>
                  
                  {/* Resposta que aparece quando o item está aberto */}
                  <div className={`
                    overflow-hidden transition-all duration-500 ease-in-out 
                    ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}
                    `}>
                    <div className="p-4 bg-[var(--color-blue)] rounded-2xl text-white">
                      <p className="text-lg">{item.resposta}</p>
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