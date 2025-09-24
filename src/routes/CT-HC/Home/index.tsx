import SectionPitch from "../../components/Section-Pitch";
import SectionSobre from "../../components/Section-Sobre";
import SectionWelcome from "../../components/Section-Welcome";

export default function Home() {
  return (
    <main>
      <SectionWelcome />
      <SectionSobre />
      <SectionPitch />
    </main>
  );
}
