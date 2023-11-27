import { Link } from "react-router-dom";
import { Variants, motion } from "framer-motion";
import { BsArrowRight, BsLinkedin, BsDownload } from "react-icons/bs";
import useActiveSection from "../../lib/hooks/useActiveSection";

const containerAnimations: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.65,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

const Intro = () => {
  const ref = useActiveSection("Home", 0.5);

  return (
    <section className="lg:mt-32 xl:mt-3 2xl:mt-72">
      <div className="flex justify-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://images.unsplash.com/photo-1627796795540-18e2db6d3908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="profile image"
            className="aspect-square w-24 rounded-full border-4 border-solid  border-white object-cover shadow-2xl"
          />
          <motion.span
            className="absolute -right-3  bottom-0 text-3xl drop-shadow-md"
            initial={{ opacity: 0, scaleX: -1, rotate: 0 }}
            animate={{
              opacity: 1,
              rotate: [0, 45, 0],
            }}
            transition={{ delay: 2, duration: 1.2 }}
          >
            👋
          </motion.span>
        </motion.div>
      </div>
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-9 mt-5 text-center sm:text-3xl"
      >
        <span className="font-bold">Hello I'm Alden.</span> I am a new-grad with a passion for
        expanding my knowledge in web technologies. My focus is{" "}
        <span className="underline">React.js</span>
      </motion.h2>

      <motion.div
        variants={containerAnimations}
        initial="hidden"
        animate="show"
        className="flex flex-col justify-center gap-2 text-lg font-medium sm:flex-row"
      >
        <motion.div variants={item}>
          <Link
            to={"#contact"}
            className="group flex items-center justify-center gap-2 rounded-full bg-gray-900 px-7  py-3 text-white transition hover:scale-110 focus:scale-110 active:scale-110"
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-75 transition  group-hover:translate-x-1" />
          </Link>
        </motion.div>
        <motion.div variants={item}>
          <a
            href="/Resume.pdf"
            target="_blank"
            className="group flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 transition hover:scale-110 focus:scale-110 active:scale-110"
            download
          >
            Download CV <BsDownload className="opacity-75 transition group-hover:translate-y-1" />
          </a>
        </motion.div>

        <motion.div variants={item}>
          <a
            href="https://www.linkedin.com/in/alden-ilao-5a15a7234/"
            target="_blank"
            className="group flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 transition hover:scale-110 focus:scale-110 active:scale-110"
          >
            <BsLinkedin className="group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;
