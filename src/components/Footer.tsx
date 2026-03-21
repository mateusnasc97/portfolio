export default function Footer() {
    const year = new Date().getFullYear(); // Mais direto
    
    return (
        <footer className="border-t border-white/5 bg-slate-950 py-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                <span className="text-sm text-slate-500">
                    © {year} <span className="text-slate-300 font-medium">Mateus Nascimento</span> — Full Stack Developer
                </span>
                
                <div className="flex gap-6">
                    <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">GitHub</a>
                    <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">LinkedIn</a>
                    <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">WhatsApp</a>
                </div>
            </div>
        </footer>
    )
}