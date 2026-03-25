import { projectsData } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meus Projetos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            /* 1. O card agora é um link real */
            <a 
              key={project.id} 
              href={project.link} // Certifique-se que o campo 'link' existe no seu @/data/projects
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition-all hover:-translate-y-1 group shadow-lg"
            >
              <span className="text-[10px] text-blue-400 font-bold uppercase tracking-[0.2em]">
                {project.category}
              </span>
              
              <h3 className="text-xl font-bold mt-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 mt-3 text-sm line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-[10px] font-bold bg-slate-800 text-slate-300 px-2 py-1 rounded-md border border-slate-700 group-hover:border-blue-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Detalhe de Sênior: Indicador visual de link externo */}
              <div className="mt-6 flex items-center text-[10px] font-black uppercase tracking-widest text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Ver Projeto Ao Vivo →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}