import SectionPitch from "../../components/Section-Pitch";
import SectionSobre from "../../components/Section-Sobre";
import SectionWelcome from "../../components/Section-Welcome";

export default function Home() {
  return (
    <main>
      <section id="home" className="bg-[var(--light-blue)] min-h-screen">
        <SectionWelcome />
      </section>
      <section id="sobre" className="bg-[var(--color-white)] min-h-screen p-4">
        <SectionSobre />
      </section>
      <section id="pitch" className="bg-[var(--color-white)] min-h-screen py-20 pl-9">
        <SectionPitch />
      </section>
    </main>
  );
}
