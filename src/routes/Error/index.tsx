export default function Error() {
    return (
        <main className="relative ">
            <div className="w-full h-10 bg-[var(--Color-blue-709CFF)]"></div>
            <div className="flex flex-col items-center">
                <h1 className="mt-5 mb-15 text-9xl font-semibold text-[var(--dark-blue-title)]">Ops!</h1>
                <img src="./error-icon.png" alt="Imagem representando que a página não encontrada." className="ml-20 mb-11 w-lg"/>
                <p className="text-[var(--dark-blue-title)] text-4xl text-center mb-23">A página que você procurava não foi encontrada, ou não existe! <br/>Tente novamente ou clique no botão abaixo para voltar para a página inicial.</p>
            </div>
            
            <button className="text-[var(--color-blue)] rounded-4xl w-40 h-14 font-semibold text-3xl absolute bottom-12 right-4 cursor-pointer mb-5 mr-5 border-4 border-solid border-[var(--color-blue)] " onClick={() => window.location.href = '/'}>Voltar</button>
            <div className="w-full h-10 bg-[var(--Color-blue-709CFF)]"></div>

        </main>
    )
}