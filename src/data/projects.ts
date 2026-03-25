interface IProject {
  id: number;
  title: string;
  category: "Landing Page" | "Sistema" | "Automação";
  description: string;
  techStack: string[];
  githubUrl?: string;
  deployUrl: string;
  image: string;
}

export const projectsData: IProject[] = [
  {
    id: 1,
    title: "Focus. – Ecossistema de Performance",
    category: "Landing Page",
    description: "Landing Page de alta conversão integrada a Dashboard de métricas em tempo real. Foco em tráfego pago.",
    techStack: ["Next.js", "Tailwind", "TypeScript", "Vercel"],
    deployUrl: "https://lp-agencia-marketing.vercel.app/",
    image: "/projects/portfolio.png"
  },
  {
    id: 2,
    title: "Lumina – SaaS de Agendamento Premium",
    category: "Landing Page",
    description: "Sistema de gestão de horários com calendário inteligente, seleção de serviços e fluxo de confirmação Apple Style.",
    techStack: ["Next.js", "Tailwind", "TypeScript", "Framer Motion"],
    deployUrl: "https://lumina-estetica-lake.vercel.app/", 
    image: "/projects/lp-vendas.png"
  }
];