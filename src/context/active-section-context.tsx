import React, { useState, PropsWithChildren, FC, createContext } from "react";
import { SectionName } from "../lib/types";
import { links as tabItems } from "../lib/data";

type ActiveSectionContextType = {
  selectedSection: SectionName;
  setSelectedSection: (section: SectionName) => void;
  timeOfLastClick: number;
  setTimeOfLastClick: (time: number) => void;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType>({
  selectedSection: "Home",
  setSelectedSection: () => {},
  timeOfLastClick: 0,
  setTimeOfLastClick: () => {},
});

const ActiveSectionContextProvider: FC<PropsWithChildren> = (props) => {
  const [selectedSection, setSelectedSection] = useState<SectionName>(`${tabItems[0].name}`);
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  const contextValue: ActiveSectionContextType = {
    selectedSection,
    setSelectedSection,
    timeOfLastClick,
    setTimeOfLastClick,
  };

  return (
    <ActiveSectionContext.Provider value={contextValue}>
      {props.children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;
