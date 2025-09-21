export default function Contato() {
  return (
    <main className="pt-40 pb-5 bg-[var(--light-blue)] flex-grow max-w-screen px-[90px]
    sm:pt-30 sm:px-15 lg:pt-40 2xl:px-40">
      <h1 className="text-6xl text-center text-[var(--dark-blue-title)] font-bold">
        Contate-nos!
      </h1>
      <p className="text-3xl text-center text-[var(--dark-blue-title)] font-semibold mt-2 sm:text-2xl sm:w-[100%]">
        Ficou com alguma dúvida ou precisa de ajuda?
      </p>

      <div className="flex flex-row justify-center mt-10 mb-10
      sm:flex-col lg:flex-row 2xl:h-[100%] 2xl:w-[100%]">
        <section className="bg-[var(--light-blue-2)] rounded-bl-3xl rounded-tl-3xl p-6 flex-1 w-1/2 shadow-xl/20 
        sm:w-[80%] sm:rounded-3xl sm:self-center sm:mb-10
        lg:rounded-br-none lg:rounded-tr-none lg:mb-0 lg:w-[100%]">
          <div className="flex flex-col sm:ml-4 md:items-center lg:px-1 lg:py-3 lg:items-start">
          
            {/* card endereço */}
            <div className="flex flex-row items-start gap-3 mb-5
            sm:gap-5 md:mb-6 md:ml-16 lg:ml-0 xl:mb-8">
              <img className="w-17 sm:w-13 xl:w-18" src="./icon-local.png" alt="Ícone de localização"/>
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
                <img className="w-17 sm:w-13 xl:w-18" src="./icon-telefone.png" alt="Ícone de telefone"/>
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
                <img className="w-17 sm:w-13 xl:w-18" src="./icon-whatsapp.png" alt="Ícone de WhatsApp"/>
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

            {/* card redes */}
            <hr className="border-[var(--dark-blue-title)] w-85 border-2 mb-2 self-center md:w-[90%]"/>

            <div className="flex flex-col items-center gap-1
            sm:self-center sm:mr-4">
              <h2 className="font-bold text-xl text-[var(--dark-blue-title)] xl:text-2xl">
                Siga o HC nas Redes Sociais:
              </h2>

              <div className="flex flex-row items-center gap-5 lg:mt-2">
                <img src="./icon-instagram.png" alt="Ícone do Instagram" className="w-13 h-13" />
                <img src="./icon-facebook.png" alt="Ícone do Facebook" className="w-13 h-13" />
                <img src="./icon-twitter.png" alt="Ícone do Twitter" className="w-13 h-13" />
                <img src="./icon-youtube.png" alt="Ícone do Youtube" className="w-13 h-13" />
              </div>
            </div>
            
          </div>
        </section>

        <section className="bg-[var(--color-white)] rounded-br-3xl rounded-tr-3xl w-1/2 shadow-xl/20
        sm:w-[80%] sm:rounded-3xl sm:self-center sm:mb-10
        lg:rounded-bl-none lg:rounded-tl-none lg:mb-0 lg:w-1/2 lg:h-132">
          <div className="flex flex-col items-start w-[100%] h-[100%] pt-6 sm:items-center lg:items-start">
            <h2 className="text-[var(--dark-blue-title)] text-4xl font-bold mb-8
            sm:text-center sm:text-3xl md:text-4xl lg:self-center lg:mb-5">Mande uma mensagem!</h2>

            <form className="flex flex-col w-[50%] h-[100%]
            sm:w-[80%] md:w-[70%] lg:py-0 lg:px-10 lg:w-[100%]">
              <label htmlFor="nome" className="text-[var(--dark-blue-title)] font-bold text-3xl mb-1">Nome:</label>
              <input type="text" placeholder="Digite o seu nome" className="bg-[var(--light-blue)] w-[100%] placeholder:text-[var(--dark-blue-2)] placeholder:font-bold rounded-md py-[5px] pl-3 mb-5 border-b-4 border-[var(--dark-blue-title)] "/>

              <label htmlFor="email" className="text-[var(--dark-blue-title)] font-bold text-3xl mb-1">E-mail:</label>
              <input type="email" placeholder="Digite o seu e-mail" className="bg-[var(--light-blue)] placeholder:text-[var(--dark-blue-2)] placeholder:font-bold rounded-md py-[5px] pl-3 mb-5 border-b-4 border-[var(--dark-blue-title)]" />

              <label htmlFor="mensagem" className="text-[var(--dark-blue-title)] font-bold text-3xl mb-1">Mensagem:</label>
              <textarea placeholder="Digite sua mensagem..."
              className="bg-[var(--light-blue)] placeholder:text-[var(--dark-blue-2)] placeholder:font-bold rounded-md py-[5px] pl-3 mb-8 w-[100%] h-40 resize-none border-b-4 border-[var(--dark-blue-title)] lg:h-30 lg:mb-4" />

              <button className="text-[var(--dark-blue-title)] text-2xl font-bold border-4 border-[var(--dark-blue-title)] rounded-xl p-2 w-[35%] mb-10 self-center hover:bg-[var(--light-blue)] hover:text-[var(--color-blue-2)] hover:border-[var(--color-blue-2)] cursor-pointer transition-colors duration-300">Enviar</button>
            </form>
          </div>
          
        </section>
      </div>
    </main>
  );
}
