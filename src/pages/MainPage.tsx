import About from "../components/About/About";
import Intro from "../components/Intro/Intro";
import Projects from "../components/Projects/Projects";
import SectionDivider from "../components/SectionDivider";
import Skills from "../components/Skills/Skills";

const MainPage = () => {
  return (
    <main id="home" className="mx-auto w-[80%] max-w-[50rem] scroll-mt-44 text-lg">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
    </main>
  );
};

export default MainPage;
