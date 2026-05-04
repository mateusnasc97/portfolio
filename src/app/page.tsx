import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a]">
      <main className="pt-16 flex flex-col w-full">
        <Hero />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
