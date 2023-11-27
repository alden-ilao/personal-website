import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="relative z-[999]">
      <motion.div
        className={`fixed left-1/2 top-5 flex min-h-[4.5rem] w-full place-items-center 
        rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 
        shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:min-h-[3.25rem] 
         sm:w-[36rem] sm:rounded-full`}
        initial={{ x: "-50%", y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
      </motion.div>
    </header>
  );
};

export default Header;
