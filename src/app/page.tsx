import About from "@/components/main-page/about";
import Contact from "@/components/main-page/contact";
import Experience from "@/components/main-page/experience";
import Intro from "@/components/main-page/intro";
import Projects from "@/components/main-page/projects";
import SectionDivider from "@/components/main-page/section-divider";
import Skills from "@/components/main-page/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
