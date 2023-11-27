import React from "react";
import { useInView } from "react-intersection-observer";
import { useContext, useEffect } from "react";
import { ActiveSectionContext } from "../../context/active-section-context";
import { SectionName } from "../types";

const useActiveSection = (sectionName: SectionName, threshold: number = 0.75) => {
  const { ref, inView } = useInView({
    threshold: threshold,
  });

  const { setSelectedSection, timeOfLastClick } = useContext(ActiveSectionContext);

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setSelectedSection(sectionName);
    }
  }, [inView, timeOfLastClick, setSelectedSection, sectionName]);
  return ref;
};

export default useActiveSection;
