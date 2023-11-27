import React, { useState, PropsWithChildren, FC, createContext } from "react";
import { links as tabItems } from "../lib/data";

type SectionName = (typeof tabItems)[number]["name"];

type ActiveSectionContextType = {
  selectedSection: SectionName;
  setSelectedSection: (section: SectionName) => void;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType>({
  selectedSection: "Home",
  setSelectedSection: () => {},
});

const ActiveSectionContextProvider: FC<PropsWithChildren> = (props) => {
  const [selectedSection, setSelectedSection] = useState<SectionName>(`${tabItems[0].name}`);

  const contextValue: ActiveSectionContextType = {
    selectedSection,
    setSelectedSection,
  };

  return (
    <ActiveSectionContext.Provider value={contextValue}>
      {props.children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;
