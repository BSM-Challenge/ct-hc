export default function Error() {
    return (
        <main>
            <div className="w-full h-10 bg-[var(--Color-blue-709CFF)]"></div>
            <div className="flex flex-col items-center">
                <h1 className="text-9xl font-semibold text-[var(--dark-blue-title)]">Ops!</h1>
                <img src="./error-icon.png" alt="Imagem representando que a página não encontrada." />
                <p>A página que você procurava não foi encontrada, ou não existe! Tente novamente ou clique no botão abaixo para voltar para a página inicial.</p>
            </div>
            
            <button>Voltar</button>
            <div className="w-full h-10 bg-[var(--Color-blue-709CFF)]"></div>

        </main>
    )
}