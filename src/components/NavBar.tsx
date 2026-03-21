export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b border-white/5 bg-slate-950/50 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
         Full Stack Dev
        </span>
        <div className="flex gap-6 text-sm font-medium text-slate-400">
          <a href="#projects" className="hover:text-white transition-colors">Projetos</a>
          <a href="#contact" className="hover:text-white transition-colors">Contato</a>
        </div>
      </div>
    </nav>
  )
}