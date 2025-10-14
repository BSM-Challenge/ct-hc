import type { MenuItem } from "../../types/HC/menu";

export const menuItems: MenuItem[] = [
    { to: "/resultados", icon: "/icon-meus-resultados.png", label: "Meus Resultados", title: "Ver Resultados" },
    { to: "/receitas", icon: "/icon-receitas.png", label: "Minhas Receitas", title: "Ver Minhas Receitas"  },
    { to: "/agenda", icon: "/icon-minha-agenda.png", label: "Minhas Agendas", title: "Ver Minha Agenda"  },
    { to: "/teleconsulta", icon: "/icon-teleconsulta.png", label: "Teleconsulta", title: "Ver a Teleconsulta"  },
    { to: "/exames", icon: "/icon-solicitacao-de-exames.png", label: "Solicitação de Exames", title: "Ver a solicitação de exames"  },
    { to: "/documentos", icon: "/icon-documentos.png", label: "Documentos", title: "Ver os Documentos"  },
    { to: "/pesquisa", icon: "/icon-pesquisa-de-satisfacao.png", label: "Pesquisa de Satisfação", title: "Ver a pesquisa de satisfação"  },
    { to: "/termos", icon: "/icon-termos-de-aceite.png", label: "Termos de Aceite", title: "Ver os termos de Aceite"  },
    { to: "/hc", icon: "/icon-acessibilidade.png", label: "Acessibilidade", title: "Ver Acessibilidade"  },
]