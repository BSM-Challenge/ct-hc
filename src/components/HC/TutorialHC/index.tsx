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

  // Aguarda o DOM renderizar completamente
  useEffect(() => {
    const timeout = setTimeout(() => setReady(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  // Faz scroll até o elemento atual
  useEffect(() => {
    if (!show || !ready) return;
    const step = steps[currentStep];
    const targetEl = document.querySelector(step.target) as HTMLElement | null;
    if (!targetEl) return;
    targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [currentStep, show, ready, steps]);

  // só checa se o DOM está pronto
  if (!ready) return null;

  // Mostra o modal de "Treinamento Finalizado"
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

  // Mostra o modal de "Avaliação"
  if (showModalAvaliacao)
    return <ModalAvaliacao onClose={() => setShowModalAvaliacao(false)} />;

  // Tutorial normal (balão e destaque)
  if (!show) return null;

  const step = steps[currentStep];
  const targetEl = document.querySelector(step.target) as HTMLElement | null;
  const rect = targetEl?.getBoundingClientRect();

  const tooltipStyle: React.CSSProperties = rect
    ? {
        position: "absolute",
        background: "white",
        color: "black",
        padding: "12px 16px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        zIndex: 10001,
        maxWidth: "300px",
        transition: "all 0.3s ease",

        // posição padrão
        top: rect.bottom + 10 + window.scrollY,
        left: rect.left + window.scrollX,

      ...(step.target === ".filtro-agenda" && {
        top: rect.bottom + 40 + window.scrollY, // move o balão mais pra baixo
        left: rect.left + window.scrollX - 100, // move um pouco pra esquerda
      }),

      ...(step.target === ".conteudo-dinamico" && {
        top: rect.bottom - 650 + window.scrollY, // move o balão mais pra baixo
        left: rect.left + window.scrollX - 300, // move um pouco pra esquerda
      }),

      ...(step.target === ".conteudo-dinamico-resultados" && {
        top: rect.bottom - 650 + window.scrollY, // move o balão mais pra baixo
        left: rect.left + window.scrollX - 500, // move um pouco pra esquerda
      }),
      
      ...(step.target === ".conteudo-dinamico-receita" && {
        top: rect.bottom - 650 + window.scrollY, // move o balão mais pra baixo
        left: rect.left + window.scrollX - 500, // move um pouco pra esquerda
      }),

      }
    : { display: "none" };

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
      ></div>

      {/* Destaque do elemento */}
      {rect && (
        <div
          style={{
            position: "absolute",
            zIndex: 10002,
            pointerEvents: "none",
            borderRadius: "10px",
            width: rect.width + 10,
            height: rect.height + 10,
            border: "3px solid var(--color-blue)",
            boxShadow: "0 0 20px rgba(255,255,255,0.9)",
            background: "rgba(255,255,255,0.1)",
            top: rect.top + window.scrollY - 40,
            left: rect.left + window.scrollX - 350,
          
            // ajustes específicos por elemento:
            ...(step.target === ".filtro-agenda" && {
              top: rect.top + window.scrollY + 20, // controla posição vertical
              left: rect.left + window.scrollX + 150, // controla posição horizontal
              width: rect.width - 300,
              height: rect.height + 5,
            }),

            ...(step.target === ".conteudo-dinamico" && {
              top: rect.top + window.scrollY + 20, // controla posição vertical
              left: rect.left + window.scrollX + 20, // controla posição horizontal
              width: rect.width - 50,
              height: rect.height + 5,
            }),
            
            ...(step.target === ".conteudo-dinamico-resultados" && {
              top: rect.top + window.scrollY - 40, // controla posição vertical
              left: rect.left + window.scrollX - 300, // controla posição horizontal
              width: rect.width - 50,
              height: rect.height + 5,
            }),
            
            ...(step.target === ".conteudo-dinamico-receita" && {
              top: rect.top + window.scrollY - 40, // controla posição vertical
              left: rect.left + window.scrollX - 300, // controla posição horizontal
              width: rect.width - 50,
              height: rect.height + 5,
            }),

            ...(step.target === ".input" && {
              top: rect.top + window.scrollY - 1, // controla posição vertical
              left: rect.left + window.scrollX + 0, // controla posição horizontal
              width: rect.width - 0,
              height: rect.height + 5,
            }),

            ...(step.target === ".button-buscar" && {
              top: rect.top + window.scrollY - 1, // controla posição vertical
              left: rect.left + window.scrollX + 0, // controla posição horizontal
              width: rect.width - 0,
              height: rect.height + 5,
            }),

            ...(step.target === ".manual-portal" && {
              top: rect.top + window.scrollY - 3, // controla posição vertical
              left: rect.left + window.scrollX + 0, // controla posição horizontal
              width: rect.width - 0,
              height: rect.height + 5,
            }),

            ...(step.target === ".accordion-ajuda" && {
              top: rect.top + window.scrollY - 3, // controla posição vertical
              left: rect.left + window.scrollX + 0, // controla posição horizontal
              width: rect.width - 0,
              height: rect.height + 5,
            }),
            
            ...(step.target === ".abrir-accordion" && {
              top: rect.top + window.scrollY - 3, // controla posição vertical
              left: rect.left + window.scrollX + 0, // controla posição horizontal
              width: rect.width - 0,
              height: rect.height + 5,
            }),
          }}
        ></div>
      )}

      {/* Balão de instrução */}
      <div style={tooltipStyle}>
        <p className="mb-3">{step.content}</p>

        <div className="flex justify-end gap-2">
          {/* Botão Voltar */}
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep((s) => s - 1)}
              className="px-3 py-1 rounded bg-[var(--color-blue)] hover:bg-[var(--color-blue-0077C8)] cursor-pointer text-[var(--color-white)]"
            >
              Voltar
            </button>
          )}

          {/* Botão Próximo ou Concluir */}
          {currentStep < steps.length - 1 ? (
            <button
              onClick={() => setCurrentStep((s) => s + 1)}
              className="px-3 py-1 rounded bg-[var(--color-blue)] hover:bg-[var(--color-blue-0077C8)] text-[var(--color-white)] cursor-pointer"
            >
              Próximo
            </button>
          ) : (
            <button
              onClick={() => {
                setShow(false);
                setShowModalFinalizado(true); // Abre o modal no final
              }}
              className="px-3 py-1 rounded bg-[var(--color-blue)] text-[var(--color-white)] cursor-pointer"
            >
              Concluir
            </button>
          )}
        </div>

        {/* Botão Fechar (X) */}
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