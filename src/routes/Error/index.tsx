export default function Error() {
  return (
    <main className=" min-h-screen flex-grow">
      <div className="w-full h-10 bg-[var(--Color-blue-709CFF)]"></div>
      <div className="flex flex-col items-center">
        <h1
          className="
          mt-5 mb-15 text-9xl font-semibold text-[var(--dark-blue-title)]
            sm:mb-14"
        >
          Ops!
        </h1>

        <img src="./error-icon.png" alt="Imagem representando que a página não encontrada."
          className="
          ml-15 mb-11
          sm:w-xs sm:mb-10"
        />

        <p className="
        text-[var(--dark-blue-title)] text-4xl text-center mb-23
        sm:text-3xl sm:p-3 sm:mb-15"
        >
          A página que você procurava não foi encontrada, ou não existe! <br />
          Tente novamente ou clique no botão abaixo para voltar para a página
          inicial.
        </p>
      </div>
      
      <div className=" flex justify-end">
        <button
        className="
        text-[var(--color-blue)] rounded-4xl w-40 h-14 font-semibold text-3xl bottom-12 right-4 cursor-pointer mb-5 mr-5 border-4 border-solid border-[var(--color-blue)] hover:bg-[var(--light-blue-2)] hover:text-[var(--color-white)] hover:border-solid hover:border-[var(--Color-blue-709CFF)]"
        onClick={() => (window.location.href = "/")}
      >
        Voltar
      </button>
      </div>

      <div className="
      w-full h-10 bg-[var(--Color-blue-709CFF)]
      sm:fixed bottom-0"></div>
    </main>
  );
}
