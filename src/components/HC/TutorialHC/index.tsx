import { useEffect, useState } from "react";
import ModalTreinamentoFinalizado from "../ModalTreinamentoFinalizado";
import ModalAvaliacao from "../ModalAvaliacao";
import { IoMdClose } from "react-icons/io";

interface Step {
  target: string;
  content: string;
}

interface TutorialHCProps {
  steps: Step[];
}

export default function TutorialHC({ steps }: TutorialHCProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [show, setShow] = useState(true);
  const [showModalFinalizado, setShowModalFinalizado] = useState(false);
  const [showModalAvaliacao, setShowModalAvaliacao] = useState(false);
  const [ready, setReady] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);

  // Aguarda o DOM renderizar completamente
  useEffect(() => {
    const timeout = setTimeout(() => setReady(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  // Observa o elemento atual e acompanha mudanças em tempo real
  useEffect(() => {
    if (!ready || !show) return;

    const step = steps[currentStep];
    const targetEl = document.querySelector(step.target) as HTMLElement | null;
    if (!targetEl) return;

    const updateRect = () => setRect(targetEl.getBoundingClientRect());
    updateRect();

    // Observa mudanças de tamanho do elemento
    const resizeObserver = new ResizeObserver(updateRect);
    resizeObserver.observe(targetEl);

    // Observa scroll e resize da janela
    window.addEventListener("scroll", updateRect);
    window.addEventListener("resize", updateRect);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", updateRect);
      window.removeEventListener("resize", updateRect);
    };
  }, [currentStep, ready, show, steps]);

  // Faz scroll até o elemento atual
  useEffect(() => {
    if (!show || !ready) return;
    const step = steps[currentStep];
    const targetEl = document.querySelector(step.target) as HTMLElement | null;
    if (!targetEl) return;
    targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [currentStep, show, ready, steps]);

  if (!ready) return null;

  // Modais
  if (showModalFinalizado)
    return (
      <ModalTreinamentoFinalizado
        onClose={() => setShowModalFinalizado(false)}
        onFeedback={() => {
          setShowModalFinalizado(false);
          setShowModalAvaliacao(true);
        }}
      />
    );

  if (showModalAvaliacao)
    return <ModalAvaliacao onClose={() => setShowModalAvaliacao(false)} />;

  if (!show || !rect) return null;

  const step = steps[currentStep];
  const isMobile1280 = window.innerWidth < 1280;
  const isMobile1024 = window.innerWidth < 1024;
  const isMobile768 = window.innerWidth < 768;
  const isMobile640 = window.innerWidth < 640;
  const isMobile510 = window.innerWidth < 510;

  // Estilo do balão (tooltip)
  const tooltipStyle: React.CSSProperties = {
    position: "absolute",
    background: "white",
    color: "black",
    padding: isMobile768 ? "8px 10px" : "12px 16px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    zIndex: 10001,
    maxWidth: "300px",
    transition: "all 0.3s ease",

    top: rect.bottom + 10 + window.scrollY,
    left: Math.min(
      rect.left + window.scrollX,
      window.innerWidth - (isMobile768 ? 240 : 300)
    ),

    // Página de Meus Resultados
    // Botão da imagem
    ...(step.target === ".btn-img" && {
      top: rect.bottom + 50 + window.scrollY,
      left: rect.left + window.scrollX - 300,
    }),

    ...(isMobile768 && step.target === ".btn-img" && {
      top: rect.bottom + 50 + window.scrollY,
      left: rect.left + window.scrollX - 200,
    }),

    // conteudo-dinamico-resultados
    ...(step.target === ".conteudo-dinamico-resultados" && {
      top: rect.bottom - 670 + window.scrollY,
      left: rect.left + window.scrollX - 500,
    }),

    ...(isMobile1024 && step.target === ".conteudo-dinamico-resultados" && {
      top: rect.bottom - 680 + window.scrollY,
      left: rect.left + window.scrollX - 0,
    }),

    ...(isMobile768 && step.target === ".conteudo-dinamico-resultados" && {
      top: rect.bottom - 610 + window.scrollY,
      left: rect.left + window.scrollX - 0,
    }),

    ...(isMobile640 && step.target === ".conteudo-dinamico-resultados" && {
      top: rect.bottom - 610 + window.scrollY,
      left: rect.left + window.scrollX - 0,
    }),
    
    ...(isMobile510 && step.target === ".conteudo-dinamico-resultados" && {
      top: rect.bottom - 580 + window.scrollY,
      left: rect.left + window.scrollX - 0,
    }),

    // Receitas
    // Botão das inativas
    ...(step.target === ".btn-img" && {
      top: rect.bottom + 50 + window.scrollY,
      left: rect.left + window.scrollX - 300,
    }),

        // conteudo-dinamico-resultados
    ...(step.target === ".conteudo-dinamico-receita" && {
      top: rect.bottom - 670 + window.scrollY,
      left: rect.left + window.scrollX - 500,
    }),

    ...(isMobile1024 && step.target === ".conteudo-dinamico-receita" && {
      top: rect.bottom - 680 + window.scrollY,
      left: rect.left + window.scrollX - 0,
    }),

    ...(isMobile768 && step.target === ".conteudo-dinamico-receita" && {
      top: rect.bottom - 610 + window.scrollY,
      left: rect.left + window.scrollX - 0,
    }),

    ...(isMobile640 && step.target === ".conteudo-dinamico-receita" && {
      top: rect.bottom - 610 + window.scrollY,
      left: rect.left + window.scrollX - 0,
    }),
    
    ...(isMobile510 && step.target === ".conteudo-dinamico-receita" && {
      top: rect.bottom - 580 + window.scrollY,
      left: rect.left + window.scrollX - 0,
    }),
    

    // Agenda
    ...(step.target === ".filtro-agenda" && {
      top: rect.bottom + 40 + window.scrollY,
      left: rect.left + window.scrollX - 100,
    }),

    ...(isMobile1280 && step.target === ".filtro-agenda" && {
      top: rect.bottom + 40 + window.scrollY,
      left: rect.left + window.scrollX - 10,
    }),

    // Conteúdo dinâmico Agenda
    ...(step.target === ".conteudo-dinamico-agenda" && {
      top: rect.bottom - 650 + window.scrollY,
      left: rect.left + window.scrollX - 300,
    }),

    ...(isMobile1024 && step.target === ".conteudo-dinamico-agenda" && {
      top: rect.bottom - 680 + window.scrollY,
      left: rect.left + window.scrollX - 0,
    }),

    ...(isMobile768 && step.target === ".conteudo-dinamico-agenda" && {
      top: rect.bottom - 580 + window.scrollY,
      left: rect.left + window.scrollX - 0,
    }),

    ...(isMobile510 && step.target === ".conteudo-dinamico-agenda" && {
      top: rect.bottom - 580 + window.scrollY,
      left: rect.left + window.scrollX - 0,
    }),

    // Teleconsulta
    // Conteúdo dinâmico Teleconsulta
    ...(step.target === ".conteudo-dinamico-teleconsulta" && {
      top: rect.bottom - 650 + window.scrollY,
      left: rect.left + window.scrollX - 300,
    }),

    ...(isMobile1024 && step.target === ".conteudo-dinamico-teleconsulta" && {
      top: rect.bottom - 680 + window.scrollY,
      left: rect.left + window.scrollX - 0,
    }),

    ...(isMobile768 && step.target === ".conteudo-dinamico-teleconsulta" && {
      top: rect.bottom - 580 + window.scrollY,
      left: rect.left + window.scrollX - 0,
    }),

    ...(isMobile510 && step.target === ".conteudo-dinamico-teleconsulta" && {
      top: rect.bottom - 580 + window.scrollY,
      left: rect.left + window.scrollX - 0,
    }),


    // Documentos
    // Conteúdo dinâmico Documentos
    ...(step.target === ".conteudo-dinamico-documentos" && {
      top: rect.bottom - 650 + window.scrollY,
      left: rect.left + window.scrollX - 300,
    }),

    ...(isMobile1024 && step.target === ".conteudo-dinamico-documentos" && {
      top: rect.bottom - 680 + window.scrollY,
      left: rect.left + window.scrollX - 0,
    }),

    ...(isMobile768 && step.target === ".conteudo-dinamico-documentos" && {
      top: rect.bottom - 580 + window.scrollY,
      left: rect.left + window.scrollX - 0,
    }),

    ...(isMobile510 && step.target === ".conteudo-dinamico-documentos" && {
      top: rect.bottom - 580 + window.scrollY,
      left: rect.left + window.scrollX - 0,
    }),
  };

  // Estilo do destaque do elemento
  const highlightStyle: React.CSSProperties = {
    position: "absolute",
    zIndex: 10002,
    pointerEvents: "none",
    borderRadius: "10px",
    border: "3px solid var(--color-blue)",
    boxShadow: "0 0 20px rgba(255,255,255,0.9)",
    background: "rgba(255,255,255,0.1)",
    transition: "all 0.2s ease-out",

    width: rect.width + 10,
    height: rect.height + 10,
    top: rect.top + window.scrollY - 40,
    left: rect.left + window.scrollX - 350,

    ...(isMobile1280 && {
      width: rect.width + 10,
      height: rect.height + 10,
      top: rect.top + window.scrollY - 40,
      left: rect.left + window.scrollX - 400,
    }),

    // seus breakpoints específicos:

    // Página de Meus Resultados
    // btn.lab
    ...(isMobile1024 && step.target === ".btn-lab" && {
      top: rect.top + window.scrollY - 30,
      left: rect.left + window.scrollX - 30,
      width: rect.width - 0,
      height: rect.height + 5,
    }),

    // btn.img
    ...(isMobile1024 && step.target === ".btn-img" && {
      top: rect.top + window.scrollY - 30,
      left: rect.left + window.scrollX - 30,
      width: rect.width - 0,
      height: rect.height + 5,
    }),

    // filtro-meses
    ...(isMobile1024 && step.target === ".filtro-meses" && {
      top: rect.top + window.scrollY - 30,
      left: rect.left + window.scrollX - 30,
      width: rect.width - 0,
      height: rect.height + 5,
    }),

    // Conteúdo Dinâmico Resultados
    ...(step.target === ".conteudo-dinamico-resultados" && {
      top: rect.top + window.scrollY - 40,
      left: rect.left + window.scrollX - 300,
      width: rect.width - 50,
      height: rect.height + 5,
    }),

    
    ...(isMobile1280 && step.target === ".conteudo-dinamico-resultados" && {
      top: rect.top + window.scrollY - 40,
      left: rect.left + window.scrollX - 350,
      width: rect.width - 50,
      height: rect.height + 5,
    }),
    
    ...(isMobile1024 && step.target === ".conteudo-dinamico-resultados" && {
      top: rect.top + window.scrollY - 40,
      left: rect.left + window.scrollX + 30,
      width: rect.width - 150,
      height: rect.height + 5,
    }),

    ...(isMobile640 && step.target === ".conteudo-dinamico-resultados" && {
      top: rect.top + window.scrollY - 40,
      left: rect.left + window.scrollX - 30,
      width: rect.width + 20,
      height: rect.height + 5,
    }),

    ...(isMobile510 && step.target === ".conteudo-dinamico-resultados" && {
      top: rect.top + window.scrollY - 40,
      left: rect.left + window.scrollX - 30,
      width: rect.width + 10,
      height: rect.height + 5,
    }),


    // Página de Minhas Receitas
    // btn.lab
    ...(isMobile1024 && step.target === ".btn-ativas" && {
      top: rect.top + window.scrollY - 30,
      left: rect.left + window.scrollX - 30,
      width: rect.width - 0,
      height: rect.height + 5,
    }),

    // btn.img
    ...(isMobile1024 && step.target === ".btn-inativas" && {
      top: rect.top + window.scrollY - 30,
      left: rect.left + window.scrollX - 30,
      width: rect.width - 0,
      height: rect.height + 5,
    }),

    // filtro-meses
    ...(isMobile1024 && step.target === ".filtro-meses" && {
      top: rect.top + window.scrollY - 30,
      left: rect.left + window.scrollX - 30,
      width: rect.width - 0,
      height: rect.height + 5,
    }),

    // Conteúdo Dinâmico Resultados
    ...(step.target === ".conteudo-dinamico-receita" && {
      top: rect.top + window.scrollY - 40,
      left: rect.left + window.scrollX - 300,
      width: rect.width - 50,
      height: rect.height + 5,
    }),

    
    ...(isMobile1280 && step.target === ".conteudo-dinamico-receita" && {
      top: rect.top + window.scrollY - 40,
      left: rect.left + window.scrollX - 350,
      width: rect.width - 50,
      height: rect.height + 5,
    }),
    
    ...(isMobile1024 && step.target === ".conteudo-dinamico-receita" && {
      top: rect.top + window.scrollY - 40,
      left: rect.left + window.scrollX + 30,
      width: rect.width - 150,
      height: rect.height + 5,
    }),

    ...(isMobile640 && step.target === ".conteudo-dinamico-receita" && {
      top: rect.top + window.scrollY - 40,
      left: rect.left + window.scrollX - 30,
      width: rect.width + 20,
      height: rect.height + 5,
    }),

    ...(isMobile510 && step.target === ".conteudo-dinamico-receita" && {
      top: rect.top + window.scrollY - 40,
      left: rect.left + window.scrollX - 30,
      width: rect.width + 10,
      height: rect.height + 5,
    }),


    // Minhas Agendas
    // Agenda
    ...(step.target === ".filtro-agenda" && {
      top: rect.top + window.scrollY + 20,
      left: rect.left + window.scrollX + 50,
      width: rect.width - 100,
      height: rect.height + 5,
    }),

    ...(isMobile1280 && step.target === ".filtro-agenda" && {
      top: rect.top + window.scrollY + 20,
      left: rect.left + window.scrollX + 0,
      width: rect.width + 0,
      height: rect.height + 5,
    }),

    // Conteúdo Dinâmico Agenda
    ...(step.target === ".conteudo-dinamico-agenda" && {
      top: rect.top + window.scrollY + 10,
      left: rect.left + window.scrollX - 0,
      width: rect.width - 10,
      height: rect.height + 5,
    }),
    
    ...(isMobile1280 && step.target === ".conteudo-dinamico-agenda" && {
      top: rect.top + window.scrollY + 15,
      left: rect.left + window.scrollX + 10,
      width: rect.width - 10,
      height: rect.height - 5,
    }),


    // Teleconsulta
    // Conteúdo Dinâmico Teleconsulta
    ...(step.target === ".conteudo-dinamico-teleconsulta" && {
      top: rect.top + window.scrollY + 10,
      left: rect.left + window.scrollX - 0,
      width: rect.width - 10,
      height: rect.height + 5,
    }),
    
    ...(isMobile1280 && step.target === ".conteudo-dinamico-teleconsulta" && {
      top: rect.top + window.scrollY + 15,
      left: rect.left + window.scrollX + 10,
      width: rect.width - 10,
      height: rect.height - 5,
    }),

    ...(isMobile1024 && step.target === ".conteudo-dinamico-teleconsulta" && {
      top: rect.top + window.scrollY + 85,
      left: rect.left + window.scrollX + 10,
      width: rect.width - 10,
      height: rect.height - 100,
    }),

    ...(isMobile768 && step.target === ".conteudo-dinamico-teleconsulta" && {
      top: rect.top + window.scrollY + 185,
      left: rect.left + window.scrollX + 10,
      width: rect.width - 10,
      height: rect.height - 200,
    }),


    // Página de Solicitação de exames
    ...(step.target === ".input" && {
      top: rect.top + window.scrollY - 1,
      left: rect.left + window.scrollX,
      width: rect.width,
      height: rect.height + 5,
    }),

    ...(step.target === ".button-buscar" && {
      top: rect.top + window.scrollY - 1,
      left: rect.left + window.scrollX,
      width: rect.width,
      height: rect.height + 5,
    }),


    // Página de Documentos
     // Conteúdo Dinâmico Documentos
    ...(step.target === ".conteudo-dinamico-documentos" && {
      top: rect.top + window.scrollY + 10,
      left: rect.left + window.scrollX - 0,
      width: rect.width - 10,
      height: rect.height + 5,
    }),
    
    ...(isMobile1280 && step.target === ".conteudo-dinamico-documentos" && {
      top: rect.top + window.scrollY + 15,
      left: rect.left + window.scrollX + 10,
      width: rect.width - 10,
      height: rect.height - 5,
    }),

    ...(isMobile1024 && step.target === ".conteudo-dinamico-documentos" && {
      top: rect.top + window.scrollY + 85,
      left: rect.left + window.scrollX + 10,
      width: rect.width - 10,
      height: rect.height - 100,
    }),

    ...(isMobile768 && step.target === ".conteudo-dinamico-documentos" && {
      top: rect.top + window.scrollY + 185,
      left: rect.left + window.scrollX + 10,
      width: rect.width - 10,
      height: rect.height - 200,
    }),

    ...(step.target === ".manual-portal" && {
      top: rect.top + window.scrollY - 3,
      left: rect.left + window.scrollX,
      width: rect.width,
      height: rect.height + 5,
    }),

    ...(step.target === ".accordion-ajuda" && {
      top: rect.top + window.scrollY - 3,
      left: rect.left + window.scrollX,
      width: rect.width,
      height: rect.height + 5,
    }),

    ...(step.target === ".abrir-accordion" && {
      top: rect.top + window.scrollY - 3,
      left: rect.left + window.scrollX,
      width: rect.width,
      height: rect.height + 5,
    }),
  };

  return (
    <>
      {/* Fundo escurecido */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.6)",
          zIndex: 10000,
        }}
      />

      {/* Destaque do elemento */}
      <div style={highlightStyle}></div>

      {/* Balão de instrução */}
      <div style={tooltipStyle}>
        <p className="mb-3">{step.content}</p>

        <div className="flex justify-end gap-2">
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep((s) => s - 1)}
              className="px-3 py-1 rounded bg-[var(--color-blue)] hover:bg-[var(--color-blue-0077C8)] text-[var(--color-white)]"
            >
              Voltar
            </button>
          )}

          {currentStep < steps.length - 1 ? (
            <button
              onClick={() => setCurrentStep((s) => s + 1)}
              className="px-3 py-1 rounded bg-[var(--color-blue)] hover:bg-[var(--color-blue-0077C8)] text-[var(--color-white)]"
            >
              Próximo
            </button>
          ) : (
            <button
              onClick={() => {
                setShow(false);
                setShowModalFinalizado(true);
              }}
              className="px-3 py-1 rounded bg-[var(--color-blue)] text-[var(--color-white)]"
            >
              Concluir
            </button>
          )}
        </div>

        {/* Botão fechar */}
        <button
          onClick={() => setShow(false)}
          title="Fechar o treinamento"
          className="absolute top-1 right-1 text-sm text-[var(--color-grey)] cursor-pointer"
        >
          <IoMdClose size={20} />
        </button>
      </div>
    </>
  );
}
