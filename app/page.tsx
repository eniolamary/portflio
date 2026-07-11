import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Services from "@/components/sections/services";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";
import Technologies from "@/components/sections/technologies";

export default function Home() {
  return (
    <>
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Technologies />
        <Contact />
      </main>
    </>
  );
}