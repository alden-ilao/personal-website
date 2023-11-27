import { links as tabItems } from "../../lib/data";
import { useContext } from "react";
import clsx from "clsx";
import { ActiveSectionContext } from "../../context/active-section-context";

const Navbar = () => {
  const ctx = useContext(ActiveSectionContext);
  return (
    <nav className="flex flex-1">
      <menu
        id="tabs"
        className="flex flex-1 flex-row flex-wrap justify-around gap-[0.5rem] p-[1rem] font-medium text-gray-500 sm:flex-nowrap"
      >
        {tabItems.map((tab) => {
          const isActive = ctx.selectedSection === tab.name;
          return (
            <li
              key={tab.name}
              className={clsx(`relative rounded-full px-2 py-1`, { "text-white": isActive })}
            >
              <a
                href={`/${tab.hash}`}
                onClick={() => {
                  ctx.setSelectedSection(tab.name);
                }}
              >
                {tab.name}
              </a>
              {isActive && (
                <span className="absolute inset-0 -z-10 rounded-full bg-gray-500"></span>
              )}
            </li>
          );
        })}
      </menu>
    </nav>
  );
};

export default Navbar;
