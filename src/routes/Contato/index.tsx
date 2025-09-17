export default function Contato() {
    return (
    <main className="bg-[var(--light-blue)]">
        <section>
            <h1>Contate-nos!</h1>
            <h2>Ficou com alguma dúvida ou precisa de ajuda?</h2>
            <div className="bg-[var(--light-blue-2)]">
                <img src="" alt="Ícone de localização" />
                <h2>Endereço - HC</h2>
                <p>Av. Dr. Enéas de Carvalho Aguiar, <br /> Nº 255 <br /> Cerqueira César <br /> 05403-000 <br /> São Paulo - Brasil</p>

                <img src="" alt="Ícone de telefone" />
                <h2>Telefone - HC</h2>
                <p>Telefone: (11) 2661-0000</p>

                <img src="" alt="Ícone de WhatsApp" />
                <h2>WhatsApp - HC</h2>
                <p>E-mail:" </p>

                <div className="border-[var(--dark-blue-title)] w-100 border-2 border-dotted"></div>
                <h1>Siga o HC nas Redes Sociais:</h1>
                <img src="" alt="Ícone do Instagram" />
                <img src="" alt="Ícone do Facebook" />
                <img src="" alt="Ícone do Twitter"/>
                <img src="" alt="Ícone do Youtube"/>
            </div>
        </section>

        <section className="bg-[var(--color-white)]">
            <h1>Mande uma mensagem!</h1>
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
        
        
    </main>
    );
}