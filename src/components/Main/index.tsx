import SectionSobre from "../Section-Sobre";
import SectionWelcome from "../Section-Welcome";

export default function Main() {
  return (
    <main>
      <section id="home" className="bg-[var(--light-blue)] min-h-screen">
        <SectionWelcome />
      </section>
      <section id="sobre" className="bg-[var(--color-white)] min-h-screen p-4">
        <SectionSobre />
      </section>
    </main>
  );
}
