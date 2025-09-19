export default function Contato() {
  return (
    <main className="pt-40 bg-[var(--light-blue)] flex-grow">
      <h1 className="text-6xl text-center text-[var(--dark-blue-title)] font-bold">
        Contate-nos!
      </h1>
      <p className="text-3xl text-center text-[var(--dark-blue-title)] font-semibold mt-2">
        Ficou com alguma dúvida ou precisa de ajuda?
      </p>

      <div className="flex flex-row justify-center mt-10">
        <section className="bg-[var(--light-blue-2)] rounded-bl-3xl rounded-tl-3xl p-6 flex-1">
          <div className="flex flex-col">
          
            {/* card endereço */}
            <div className="flex flex-row items-center gap-3 mb-5">
              <img className="w-17" src="./icon-local.png" alt="Ícone de localização"/>
            <div className="flex flex-col items-start gap-0.5">
              <h2 className="font-bold text-2xl text-[var(--dark-blue-title)]">
                Endereço - HC
              </h2>
              <p className="font-bold text-2sm text-[var(--dark-blue-title)]">
                Av. Dr. Enéas de Carvalho Aguiar, <br /> Nº 255 <br /> Cerqueira
                César <br /> 05403-000 <br /> São Paulo Brasil
              </p>
            </div>
            </div>

            {/* card telefone */}
            <div className="flex flex-row items-center gap-3 mb-5">
              <div>
                <img className="w-17" src="./icon-telefone.png" alt="Ícone de telefone"/>
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <h2 className="font-bold text-2xl text-[var(--dark-blue-title)]">
                  Telefone - HC
                </h2>
                <p className="font-bold text-2sm text-[var(--dark-blue-title)]">
                  Telefone: (11) 2661-0000
                  </p>
              </div>
            </div>
            

            {/* card whatsapp */}
            <div className="flex flex-row items-center gap-3 mb-5">
              <div>
                <img className="w-17" src="./icon-whatsapp.png" alt="Ícone de WhatsApp"/>
              </div>

              <div className="flex flex-col items-start gap-0.5">
                <h2 className="font-bold text-2xl text-[var(--dark-blue-title)]">
                  WhatsApp - HC
                </h2>
                <p className="font-bold text-2sm text-[var(--dark-blue-title)]">
                  WhatsApp: (19) 3521-2121{" "}
                </p>
              </div>
            </div>

            {/* card redes */}
            <hr className="border-[var(--dark-blue-title)] w-90 border-2 border-dotted mb-2"/>
            <div className="flex flex-col items-center gap-1">
              <h2 className="font-bold text-xl text-[var(--dark-blue-title)]">
                Siga o HC nas Redes Sociais:
              </h2>
              <div className="flex flex-row items-center gap-3">
                <img src="./icon-instagram.png" alt="Ícone do Instagram" className="w-13 h-13" />
                <img src="./icon-facebook.png" alt="Ícone do Facebook" className="w-13 h-13" />
                <img src="./icon-twitter.png" alt="Ícone do Twitter" className="w-13 h-13" />
                <img src="./icon-youtube.png" alt="Ícone do Youtube" className="w-13 h-13" />
              </div>
            </div>
            
          </div>
        </section>

        <section className="bg-[var(--color-white)]">
          <h2>Mande uma mensagem!</h2>
          <form>
            <label htmlFor="nome">Nome:</label>
            <input type="text" placeholder="Digte o seu nome" />
            <label htmlFor="email">E-mail:</label>
            <input type="email" placeholder="Digte o seu e-mail" />
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea placeholder="Digte sua mensagem..." />
            <button>Enviar</button>
          </form>
        </section>
      </div>
    </main>
  );
}
