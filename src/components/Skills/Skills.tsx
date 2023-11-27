import { skillsData } from "../../lib/data";
import SectionHeading from "../UI/SectionHeading";
import useActiveSection from "../../lib/hooks/useActiveSection";

const Skills = () => {
  const ref = useActiveSection("Skills");

  return (
    <section id="skills" ref={ref} className="mb-28">
      <SectionHeading>skills</SectionHeading>
      <ul className="flex w-[50rem] flex-wrap justify-center gap-3 text-gray-800">
        {skillsData.map((skill, index) => (
          <li key={index} className="rounded-xl border border-black/[0.15] px-5 py-3">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
