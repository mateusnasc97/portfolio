import { projectsData } from "@/data/projects";   

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meus Projetos
        </h2>
        
        {/* Grid Responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition-colors group"
            >
              <span className="text-sm text-blue-400 font-medium uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-xl font-bold mt-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mt-3 text-sm line-clamp-2">
                {project.description}
              </p>
              
              {/* Lista de Tecnologias (Tags) */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs bg-slate-800 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}