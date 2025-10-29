export interface MenuItem {
    to: string;
    icon: string;
    label: string;
    title: string;
    activeColor: string;
    subItems?: { label: string; to?: string }[];
}

export const menuItems: MenuItem[] = [
    { 
        to: "/hc/resultados",
        icon: "https://res.cloudinary.com/dt26mfzpw/image/upload/v1761568377/icon-meus-resultados_osa4aa.png",
        label: "Meus Resultados",
        title: "Ver Resultados",  
        activeColor: "text-[var(--color-blue)]"
    },
    { 
        to: "/hc/receitas",
        icon: "https://res.cloudinary.com/dt26mfzpw/image/upload/v1761568449/icon-receitas_utxlte.png",
        label: "Minhas Receitas",
        title: "Ver Minhas Receitas",  
        activeColor: "text-[var(--color-blue)]"
    },
    { 
        to: "/hc/agenda",
        icon: "https://res.cloudinary.com/dt26mfzpw/image/upload/v1761568597/icon-minha-agenda_nblxif.png",
        label: "Minhas Agendas",
        title: "Ver Minha Agenda",  
        activeColor: "text-[var(--color-blue)]"
    },
    { 
        to: "/hc/teleconsulta",
        icon: "https://res.cloudinary.com/dt26mfzpw/image/upload/v1761568490/icon-teleconsulta_oplqkz.png",
        label: "Teleconsulta",
        title: "Ver a Teleconsulta",  
        activeColor: "text-[var(--color-blue)]"
    },
    { 
        to: "/hc/exames",
        icon: "https://res.cloudinary.com/dt26mfzpw/image/upload/v1761568476/icon-solicitacao-de-exames_kprxt0.png",
        label: "Solicitação de Exames",
        title: "Ver a solicitação de exames",  
        activeColor: "text-[var(--color-blue)]"
    },
    { 
        to: "/hc/documentos",
        icon: "https://res.cloudinary.com/dt26mfzpw/image/upload/v1761568340/icon-documentos_xabk3n.png",
        label: "Documentos",
        title: "Ver os Documentos",  
        activeColor: "text-[var(--color-blue)]"
    },
    { 
        to: "/hc/pesquisa",
        icon: "https://res.cloudinary.com/dt26mfzpw/image/upload/v1761568417/icon-pesquisa-de-satisfacao_cblpth.png",
        label: "Pesquisa de Satisfação",
        title: "Ver a pesquisa de satisfação",  
        activeColor: "text-[var(--color-blue)]",
        subItems: [
            { label: "Ambulatorial", to: "/hc/pesquisa/ambulatorial" },
            { label: "Internação", to: "/hc/pesquisa/internacao" },
            { label: "Pronto Socorro", to: "/hc/pesquisa/pronto-socorro" },
            { label: "Teleconsulta", to: "/hc/pesquisa/teleconsulta" },
            { label: "Farmácia Ambulatorial", to: "/hc/pesquisa/farmacia" },
        ],
    },
    { 
        to: "/hc/termos",
        icon: "https://res.cloudinary.com/dt26mfzpw/image/upload/v1761568501/icon-termos-de-aceite_swh47k.png",
        label: "Termos de Aceite",
        title: "Ver os termos de Aceite",  
        activeColor: "text-[var(--color-blue)]"
    },
    { 
        to: "/hc",
        icon: "https://res.cloudinary.com/dt26mfzpw/image/upload/v1761568332/icon-acessibilidade_skmzjj.png",
        label: "Acessibilidade",
        title: "Ver Acessibilidade",  
        activeColor: "text-[var(--color-blue)]"
    },
]