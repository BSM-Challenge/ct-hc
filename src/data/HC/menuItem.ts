import type { MenuItem } from "../../types/HC/menu";

export const menuItems: MenuItem[] = [
    { to: "/resultados", icon: "/icon-meus-resultados.png", label: "Meus Resultados" },
    { to: "/receitas", icon: "/icon-receitas.png", label: "Minhas Receitas" },
    { to: "/agenda", icon: "/icon-minha-agenda.png", label: "Minhas Agendas" },
    { to: "/teleconsulta", icon: "/icon-teleconsulta.png", label: "Teleconsulta" },
    { to: "/exames", icon: "/icon-solicitacao-de-exames.png", label: "Solicitação de Exames" },
    { to: "/documentos", icon: "/icon-documentos.png", label: "Documentos" },
    { to: "/pesquisa", icon: "/icon-pesquisa-de-satisfacao.png", label: "Pesquisa de Satisfação" },
    { to: "/termos", icon: "/icon-termos-de-aceite.png", label: "Termos de Aceite" },
    { to: "/acessibilidade", icon: "/icon-acessibilidade.png", label: "Acessibilidade" },
]