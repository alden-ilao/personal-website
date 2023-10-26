import { FC } from "react";
import { motion } from "framer-motion";
import { variantOpacity } from "../utils/framer-variants";

const SectionDivider: FC = () => {
  return (
    <section className="flex justify-center">
      <motion.div
        variants={variantOpacity}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.125 }}
        className="my-[5rem] hidden h-16 w-1 rounded-full bg-black/10 sm:block"
      ></motion.div>
    </section>
  );
};

export default SectionDivider;
