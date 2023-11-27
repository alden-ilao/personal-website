import { useState } from "react";
import { links as tabItems } from "../../lib/data";
import { motion } from "framer-motion";
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
          const isActive = selectedSection === tab.name;
          return (
            <li
              key={tab.name}
              className={clsx(`relative rounded-full px-2 py-1`, { "text-white": isActive })}
            >
              <a
                href={`/${tab.hash}`}
                onClick={() => {
                  setSelectedSection(tab.name);
                }}
              >
                {tab.name}
              </a>
              {isActive && (
                <span
                  layoutId="billid"
                  className="absolute inset-0 -z-10 rounded-full bg-gray-500"
                ></span>
              )}
            </li>
          );
        })}
      </menu>
    </nav>
  );
};

export default Navbar;
