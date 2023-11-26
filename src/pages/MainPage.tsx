import About from "../components/About/About";
import Intro from "../components/Intro/Intro";
import Projects from "../components/Projects/Projects";
import SectionDivider from "../components/SectionDivider";
const MainPage = () => {
  return (
    <main className="mx-auto w-[80%] max-w-[50rem] text-lg">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
};

export default MainPage;
