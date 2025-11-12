import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContraste } from "../../../context/ContrasteContext";
import CardMaisRecursos from "../../../components/HC/CardMaisRecursos";
import TitleHC from "../../../components/HC/TitleHC";
import { enviarComandoVoz } from "../../../services/api-voz-IA";

export default function MaisRecursos() {
  const navigate = useNavigate();
  const { alternarContraste, contrasteAtivo } = useContraste();

  const [isVoiceActive, setIsVoiceActive] = useState<boolean>(() => {
    return localStorage.getItem("vozAtiva") === "true";
  });
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

    recog.onresult = async (event: any) => {
      const command = event.results[event.resultIndex][0].transcript.toLowerCase().trim();
      console.log("Comando reconhecido:", command);

      const data = await enviarComandoVoz(command); 
      if (data?.acao) navigate(data.acao);
    };

    recog.onerror = (event: any) => console.error("Erro no reconhecimento:", event.error);

    recog.onend = () => {
      if (localStorage.getItem("vozAtiva") === "true") recog.start();
      else setIsVoiceActive(false);
    };

    setRecognition(recog);

    if (localStorage.getItem("vozAtiva") === "true") {
      setIsVoiceActive(true);
      recog.start();
      console.log("Navegação por voz reativada automaticamente.");
    }
  }, [navigate]);

  const ativarNavegacaoPorVoz = () => {
    if (!recognition) return;
    const ativo = !isVoiceActive;

    if (ativo) recognition.start();
    else recognition.stop();

    setIsVoiceActive(ativo);
    localStorage.setItem("vozAtiva", ativo.toString());
    console.log(`Navegação por voz ${ativo ? "ativada" : "desativada"}.`);
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

        <div onClick={alternarContraste}>
          <CardMaisRecursos
            titleMessage="Clique aqui para mudar o contraste"
            img="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761573295/icon-contraste_txxb1t.png"
            title="Mudar contraste"
            text={
              contrasteAtivo
                ? "Clique para voltar ao normal"
                : "Ajusta o contraste da tela para melhorar a visibilidade."
            }
          />
        </div>
      </div>
    </div>
  );
}