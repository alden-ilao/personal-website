import { motion } from "framer-motion";

// type TabProps = {
//   isSelected: boolean;
//   onSelect: (index: number) => void;
//   children?: ReactNode;
// };

const Header = () => {
  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ x: "-50%", y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      {/* <menu id="tabs">
        {tabItems.map((tab, index) => {
          return (
            <Tab
              key={tab.hash}
              isSelected={activeTab === index}
              onSelect={onSelectHandler.bind(index)}
            >
              {tab.name}
            </Tab>
          );
        })}
      </menu> */}
    </header>
  );
};

export default Header;
