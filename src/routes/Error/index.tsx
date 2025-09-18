import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full h-10 bg-[var(--Color-blue-709CFF)]"></header>
      <main className="flex-grow">
        <div className="flex flex-col items-center gap-13">
          <h1 className="text-9xl font-semibold text-[var(--dark-blue-title)] mt-4">
            Ops!
          </h1>
        
        <img src="./error-icon.png"
        alt="Imagem representando que a página não encontrada."
        className="ml-9 w-80 sm:w-xs md:w-95 2xl:w-120"/>

        <p className="text-[var(--dark-blue-title)] text-4xl text-center mb-23 w-80
        sm:w-150 lg:w-230 xl:w-300 2xl:w-400 2xl:text-5xl 2xl:mt-">
          A página que você procurava não foi encontrada, ou não existe! <br />
          Tente novamente ou clique no botão abaixo para voltar para a página
          inicial.
        </p>
      </div>
      
      <div className="flex justify-end">
        <Link className="text-[var(--color-blue)] rounded-4xl px-10 py-2 font-semibold text-3xl
        mb-5 right-4 cursor-pointer mr-5 border-4 border-solid border-[var(--color-blue)]
        hover:bg-[var(--light-blue-2)] hover:text-[var(--color-white)] hover:border-solid
        hover:border-[var(--Color-blue-709CFF)] transition-colors duration-200
        " to="/">
          Voltar
        </Link>
      </div>
      </main>
      <footer className="w-full h-10 bg-[var(--Color-blue-709CFF)] bottom-0"></footer>
    </div>
  );
}
