import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black">
      <ScrollyCanvas />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
