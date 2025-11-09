import type { ConteudoDinamicoProps } from "../../../types/HC/conteudoDinamico";

export default function ConteudoDinamico({children}: ConteudoDinamicoProps) {
    return (
     <div className="
     conteudo-dinamico-receita
     conteudo-dinamico-resultados
     conteudo-dinamico-agenda
     conteudo-dinamico-teleconsulta
     conteudo-dinamico-documentos
     w-full flex justify-center flex-grow items-center
     ">
        <p className="text-center">
            {children}
        </p>
      </div>
    )
}