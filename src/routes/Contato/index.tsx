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
        <section className="bg-[var(--light-blue-2)]">
            <div className="flex  flex-col">
              <img className="w-20" src="./icon-local.png" alt="Ícone de localização" />
              <h2>Endereço - HC</h2>
              <p>
                Av. Dr. Enéas de Carvalho Aguiar, <br /> Nº 255 <br /> Cerqueira
                César <br /> 05403-000 <br /> São Paulo Brasil
              </p>

              <img className="w-20" src="./icon-telefone.png" alt="Ícone de telefone" />
              <h2>Telefone - HC</h2>
              <p>Telefone: (11) 2661-0000</p>

              <img className="w-20" src="./icon-whatsapp.png" alt="Ícone de WhatsApp" />
              <h2>WhatsApp - HC</h2>
              <p>WhatsApp: (19) 3521-2121 </p>

            <div className="border-[var(--dark-blue-title)] w-100 border-2 border-dotted"></div>
            <h2>Siga o HC nas Redes Sociais:</h2>
            <div className="flex flex-row">
                <img src="./instagram-icon.png" alt="Ícone do Instagram" />
                <img src="./facebook-icon.png" alt="Ícone do Facebook" />
                <img src="./twitter-icon.png" alt="Ícone do Twitter" />
                <img src="./youtube-icon.png" alt="Ícone do Youtube" />
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
