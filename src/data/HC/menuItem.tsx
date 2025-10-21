export interface MenuItem {
    to: string;
    icon: string;
    label: string;
    title: string;
    activeColor: string;
}

export const menuItems: MenuItem[] = [
    { 
        to: "/resultados",
        icon: "/icon-meus-resultados.png",
        label: "Meus Resultados",
        title: "Ver Resultados",  
        activeColor: "text-[var(--color-blue)]"
    },
    { 
        to: "/receitas",
        icon: "/icon-receitas.png",
        label: "Minhas Receitas",
        title: "Ver Minhas Receitas",  
        activeColor: "text-[var(--color-blue)]"
    },
    { 
        to: "/agenda",
        icon: "/icon-minha-agenda.png",
        label: "Minhas Agendas",
        title: "Ver Minha Agenda",  
        activeColor: "text-[var(--color-blue)]"
    },
    { 
        to: "/teleconsulta",
        icon: "/icon-teleconsulta.png",
        label: "Teleconsulta",
        title: "Ver a Teleconsulta",  
        activeColor: "text-[var(--color-blue)]"
    },
    { 
        to: "/exames",
        icon: "/icon-solicitacao-de-exames.png",
        label: "Solicitação de Exames",
        title: "Ver a solicitação de exames",  
        activeColor: "text-[var(--color-blue)]"
    },
    { 
        to: "/documentos",
        icon: "/icon-documentos.png",
        label: "Documentos",
        title: "Ver os Documentos",  
        activeColor: "text-[var(--color-blue)]"
    },
    { 
        to: "/pesquisa",
        icon: "/icon-pesquisa-de-satisfacao.png",
        label: "Pesquisa de Satisfação",
        title: "Ver a pesquisa de satisfação",  
        activeColor: "text-[var(--color-blue)]"
    },
    { 
        to: "/termos",
        icon: "/icon-termos-de-aceite.png",
        label: "Termos de Aceite",
        title: "Ver os termos de Aceite",  
        activeColor: "text-[var(--color-blue)]"
    },
    { 
        to: "/hc",
        icon: "/icon-acessibilidade.png",
        label: "Acessibilidade",
        title: "Ver Acessibilidade",  
        activeColor: "text-[var(--color-blue)]"
    },
]