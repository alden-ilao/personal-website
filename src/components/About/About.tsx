import { motion } from "framer-motion";
import SectionHeading from "../UI/SectionHeading";
import { variantOpacityShiftUp } from "../../utils/framer-variants";
import useActiveSection from "../../lib/hooks/useActiveSection";

const About = () => {
  const ref = useActiveSection("About", 1);
  return (
    <motion.section
      id={"about"}
      ref={ref}
      className="mb-28 mt-28 max-w-[50rem] scroll-mt-44 text-center leading-8 sm:mb-40 sm:mt-0"
      variants={variantOpacityShiftUp}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.175, duration: 0.5 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem blanditiis maxime dolor,
        suscipit sit, dolores aliquid quasi, iste dolore ratione rerum odio magnam consectetur
        corporis recusandae excepturi possimus enim nostrum!
      </p>
    </motion.section>
  );
};

export default About;
