import { motion } from "framer-motion";
import SectionHeading from "../UI/SectionHeading";
import { variantOpacityShiftUp } from "../../utils/framer-variants";
import useActiveSection from "../../lib/hooks/useActiveSection";

const About = () => {
  const ref = useActiveSection("About");
  return (
    <motion.section
      id={"about"}
      ref={ref}
      className="mb-28 mt-16 max-w-[50rem] scroll-mt-44 text-center leading-8 sm:mb-40 sm:mt-0"
      variants={variantOpacityShiftUp}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.175, duration: 0.5 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-4">
        I'm a passionate individual with a keen interest on emmerging web technologies and turning
        design concepts into responsive and interactive websites. Having graduated in computer
        science, I aspire to dive deeper into the world of web development.
      </p>

      <p>
        <span className="italic">My favorite part of programming</span> is realizing the real world
        impact that software can have on others. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack is{" "}
        <span className="font-medium">React, Next.js, Node.js, PostgreSQL</span>
      </p>
    </motion.section>
  );
};

export default About;
