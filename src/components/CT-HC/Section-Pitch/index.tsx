import { Link } from "react-router-dom";

export default function SectionPitch() {
  return (
    <section className="
    bg-[var(--color-white)] min-h-screen py-20 pl-9
     flex flex-col gap-5
     max-lg:pl-4"
     >
      <h4 className="
      text-7xl font-bold text-[var(--dark-blue-title)]
      max-[444px]:text-5xl
      ">
        Vídeo Pitch
      </h4>
      <p className="
      text-2xl w-[95%]
      xl:w-[60%]
      lg:text-4xl
      max-[497px]:text-xl
      ">
        Saiba o que é e como funciona o 
        <span className="font-bold text-[var(--dark-blue-title)]"> CT-HC </span>
        e veja como nós o ajudamos a utilizar o Portal do Paciente HC de forma mais 
        <span className="font-bold text-[var(--dark-blue-title)]"> simples, segura </span>
        e <span className="font-bold text-[var(--dark-blue-title)]"> acessível.</span>
      </p>

      <div className="flex justify-center">
        <div className="
        w-[660px] max-w-full aspect-video rounded-2xl shadow-lg overflow-hidden
        max-md:w-[90%]
        ">
            <video
            className="w-full h-full object-cover"
            src="/video-pitch.mp4"
            controls
            ></video>
        </div>
      </div>

      <aside className="
      flex flex-col gap-4 w-[100%]
      md:w-[40%] max-md:w-[75%]
      ">
          <p className="
          text-2xl mt-4 text-[var(--dark-blue-title)]
          max-[500px]:text-xl
          ">
            Problemas para visualizar? <br />
            Assista no <span className="font-bold">YouTube</span>.
          </p>
          <Link
            to="https://youtu.be/36Rl0yBepwU"
            className="
            w-[50%]
            bg-[var(--dark-blue-title)] text-[var(--color-white)]
            py-2 text-center rounded-full font-bold
            shadow-[6px_6px_11px_var(--dark-blue-title)]
            sm:w-[40%]
            md:w-[40%]
            lg:w-[38%]
            xl:w-[32%]
            "
          >
            Clique aqui
          </Link>
      </aside>
    </section>
  );
}