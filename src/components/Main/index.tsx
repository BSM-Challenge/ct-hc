import SectionSobre from "../Section-Sobre";
import SectionWelcome from "../Section-Welcome";

export default function Main() {
    return (
        <main>
            <div id="home" className="bg-[var(--light-blue)] h-screen">
                <SectionWelcome />
            </div>
            <div id="sobre" className="bg-[var(--color-white)] h-screen p-4">
                <SectionSobre />
            </div>
        </main>
    )
}