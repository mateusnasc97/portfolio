export default function Hero() {
    return (
        <section className="relative pt-16 pb-16 md:pt-6 md:pb-6 flex items-center justify-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"></div>
            </div>
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center px-4">
                <h1 className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-5xl md:text-7xl font-extrabold tracking-tight">Transformo ideias em Landing Pages de alta conversão.</h1>
                <p className="text-lg md:text-xl text-slate-400 mt-6 max-w-2xl">Desenvolvedor Full Stack focado em performance e SEO.</p>
                <button
                    className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                    <a href="https://wa.me/5562981619496?text=Olá,%20vi%20seu%20portfolio%20e%20gostaria%20de%20um%20orçamento!" target="_blank" rel="noopener noreferrer">Solicitar orçamento gratuito!</a>
                </button>
            </div>
        </section>
    )
}