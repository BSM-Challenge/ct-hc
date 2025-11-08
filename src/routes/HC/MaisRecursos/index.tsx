import { useEffect, useState } from "react";
import CardMaisRecursos from "../../../components/HC/CardMaisRecursos";
import TitleHC from "../../../components/HC/TitleHC";
import { useNavigate } from "react-router-dom";

export default function MaisRecursos() {
  const navigate = useNavigate();
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error("SpeechRecognition API não disponível.");
      return;
    }

    const recog = new SpeechRecognition();
    recog.lang = "pt-BR";
    recog.continuous = true;
    recog.interimResults = false;

    recog.onresult = (event: any) => {
      const command = event.results[event.resultIndex][0].transcript
        .toLowerCase()
        .trim();

      console.log("Comando reconhecido:", command);
      interpretarComando(command);
    };

    recog.onerror = (event: any) => {
      console.error("Erro no reconhecimento:", event.error);
    };

    recog.onend = () => {
      setIsVoiceActive(false);
    };

    setRecognition(recog);
  }, []);

  const interpretarComando = async (texto: string) => {
    try {
      const response = await fetch("https://api-comando-voz-ia.onrender.com/voz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comando: texto }),
      });

      if (!response.ok) return;

      const data = await response.json();
      console.log("IA respondeu:", data);

      if (data.acao && typeof data.acao === "string") {
        navigate(data.acao);
      }
    } catch (error) {
      console.error("Erro na navegação por voz:", error);
    }
  };

  const ativarNavegacaoPorVoz = () => {
    if (!recognition) return;

    if (!isVoiceActive) {
      recognition.start();
      setIsVoiceActive(true);
      console.log("Navegação por voz ativada.");
    } else {
      recognition.stop();
      setIsVoiceActive(false);
      console.log("Navegação por voz desativada.");
    }
  };

  return (
    <div className="flex flex-col gap-15">
      <TitleHC
        title="Acessibilidade > Mais recursos"
        subtitle="Saiba o que cada funcionalidade faz, e torne sua experiência mais acessível!"
        line={true}
        icon={true}
        link="/hc"
      />

      <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-1">
        <CardMaisRecursos
          titleMessage="Clique aqui para aumentar a fonte"
          img="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761573149/icon-aumentar-fonte-2_japh83.png"
          title="Aumentar Fonte"
          text="Amplia ou diminui o tamanho do texto para facilitar a leitura."
        />

        <div onClick={ativarNavegacaoPorVoz}>
          <CardMaisRecursos
            titleMessage="Clique aqui para ativar a navegação por voz"
            img="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761573302/icon-navegacao-voz_gpky4m.png"
            title={isVoiceActive ? "Desativar Voz" : "Navegação por Voz"}
            text={
              isVoiceActive
                ? "A navegação por voz está ativada."
                : "Navegue pelo site usando comandos de voz."
            }
          />
        </div>

        <CardMaisRecursos
          titleMessage="Clique aqui para mudar o contraste"
          img="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761573295/icon-contraste_txxb1t.png"
          title="Mudar contraste"
          text="Ajusta o contraste da tela para melhorar a visibilidade."
        />
      </div>

      <div className="hidden lg:flex flex-col gap-3">
        <figure className="flex items-center gap-4">
          <img
            src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761573306/icon-teclado_tjyl7n.png"
            alt="ícone de teclado"
          />
          <figcaption className="text-3xl font-bold">
            Atalhos de teclado:
          </figcaption>
        </figure>
        <ul className="flex flex-col gap-4">
          <li className="text-xl">
            <span className="font-bold">Ctrl + Alt + 1:</span> Aumenta o tamanho
            das letras.
          </li>
          <li className="text-xl">
            <span className="font-bold">Ctrl + Alt + 2:</span> Diminui o tamanho
            das letras.
          </li>
          <li className="text-xl">
            <span className="font-bold">Ctrl + Alt + 3:</span> Ativa a navegação
            por voz.
          </li>
          <li className="text-xl">
            <span className="font-bold">Ctrl + Alt + 4:</span> Abre as
            configurações de contraste.
          </li>
        </ul>
      </div>
    </div>
  );
}