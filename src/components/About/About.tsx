import { motion } from "framer-motion";
import SectionHeading from "../UI/SectionHeading";
import { variantOpacityShiftUp } from "../../utils/framer-variants";

const About = () => {
  return (
    <motion.section
      className="mb-28 mt-28 max-w-[50rem] text-center leading-8 sm:mb-40 sm:mt-0"
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
