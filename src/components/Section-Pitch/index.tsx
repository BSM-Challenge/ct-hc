export default function SectionPitch() {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-7xl font-bold text-[var(--dark-blue-title)]">
        Vídeo Pitch
      </h4>
      <p className="text-4xl w-[40ch]">
        Saiba o que é e como funciona o 
        <span className="font-bold text-[var(--dark-blue-title)]"> CT-HC </span>
        e veja como nós o ajudamos a utilizar o Portal do Paciente HC de forma mais 
        <span className="font-bold text-[var(--dark-blue-title)]"> simples, segura </span>
        e <span className="font-bold text-[var(--dark-blue-title)]"> acessível.</span>
      </p>

      <div className="flex justify-center">
        <div className="w-[660px] max-w-full aspect-video rounded-2xl shadow-lg overflow-hidden">
            <video
            className="w-full h-full object-cover"
            src="/video-pitch.mp4"
            controls
            ></video>
        </div>
      </div>

      <aside className="flex flex-col gap-4 w-[30%]">
          <p className="text-2xl mt-4 text-[var(--dark-blue-title)]">
            Problemas para visualizar? <br />
            Assista no <span className="font-bold">YouTube</span>.
          </p>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            className="
            w-[32%]
            bg-[var(--dark-blue-title)] text-[var(--color-white)]
            py-2 text-center rounded-full font-bold
            shadow-[6px_6px_11px_var(--dark-blue-title)]
            "
          >
            Clique aqui
          </a>
      </aside>
    </div>
  );
}