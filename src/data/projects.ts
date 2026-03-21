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
    title: "Portfolio Pessoal Pro",
    category: "Landing Page",
    description: "Minha vitrine de alta performance construída com Next.js 14 e Tailwind.",
    techStack: ["Next.js", "Tailwind", "TypeScript", "Vercel"],
    deployUrl: "https://seu-portfolio.vercel.app",
    image: "/projects/portfolio.png"
  },
  {
    id: 2,
    title: "Landing Page Infoproduto",
    category: "Landing Page",
    description: "Página de vendas com foco em conversão e carregamento instantâneo.",
    techStack: ["React", "Tailwind", "Framer Motion"],
    deployUrl: "#", 
    image: "/projects/lp-vendas.png"
  },
  {
    id: 3,
    title: "Dashboard de Gestão Financeira",
    category: "Sistema",
    description: "Interface administrativa com gráficos interativos e controle de fluxo de caixa em tempo real.",
    techStack: ["Next.js", "Recharts", "Prisma", "PostgreSQL"],
    deployUrl: "#", 
    image: "/projects/dashboard.png"
  }
];