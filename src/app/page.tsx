import Image from "next/image";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#0a0a0a] font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#0a0a0a]">
        <Hero />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
