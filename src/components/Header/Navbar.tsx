import { useState } from "react";
import { links as tabItems } from "../../lib/data";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const Navbar = () => {
  const [selectedSection, setSelectedSection] = useState(`${tabItems[0].name}`);

  return (
    <nav className="flex flex-1">
      <menu
        id="tabs"
        className="flex flex-1 flex-row flex-wrap justify-around gap-[0.5rem] p-[1rem] font-medium text-gray-500 sm:flex-nowrap"
      >
        {tabItems.map((tab) => {
          return (
            <li
              key={tab.name}
              className={`relative rounded-full px-2 py-1`}
              onClick={() => {
                setSelectedSection(tab.name);
              }}
            >
              <a href={`/${tab.hash}`}>{tab.name}</a>
              {selectedSection === tab.name && (
                // <motion.div
                //   layoutId="billid"
                //   className="absolute inset-0 -z-10 rounded-full bg-gray-900"
                //   transition={{
                //     type: "spring",
                //     stiffness: 380,
                //     damping: 30,
                //   }}
                // ></motion.div>
                <motion.div
                  layoutId="red"
                  className="h-10 w-10 rounded-full bg-red-500"
                ></motion.div>
              )}
            </li>
          );
        })}
      </menu>
    </nav>
  );
};

export default Navbar;
