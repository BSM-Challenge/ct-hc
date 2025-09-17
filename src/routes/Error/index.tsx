import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full h-10 bg-[var(--Color-blue-709CFF)]"></header>
    <main className="flex-grow">
      <div className="flex flex-col items-center gap-13">
        <h1
          className="
          mt-5 mb-15 text-9xl font-semibold text-[var(--dark-blue-title)]
          sm:mb-14
          md:mb-13
          lg:mt-10"
        >
          Ops!
        </h1>

        <img src="./error-icon.png"
        alt="Imagem representando que a página não encontrada."
        className="
        ml-12 mb-11 w-80
        sm:w-xs sm:mb-10
        md:mb-3 md:w-95
        xl:w-120"
        />

        <p className="
        text-[var(--dark-blue-title)] text-4xl text-center mb-23 p-3
        sm:text-3xl 
        sm:p-8 sm:mb-8
        md:mb-2
        lg:p-15 lg:text-4xl
        xl:text-5xl"
        >
          A página que você procurava não foi encontrada, ou não existe! <br />
          Tente novamente ou clique no botão abaixo para voltar para a página
          inicial.
        </p>
      </div>
      
      <div className="flex justify-end">
        <Link className=" text-[var(--color-blue)] rounded-4xl w-40 h-14 font-semibold text-3xl bottom-12 right-4 cursor-pointer mb-5 mr-5 border-4 border-solid border-[var(--color-blue)] hover:bg-[var(--light-blue-2)] hover:text-[var(--color-white)] hover:border-solid hover:border-[var(--Color-blue-709CFF)]
        md:mr-12
        lg:mb-13" to="/">
          Voltar
        </Link>
      </div>
    </main>
    <footer className="w-full h-10 bg-[var(--Color-blue-709CFF)] bottom-0"></footer>
    </div>
  );
}
