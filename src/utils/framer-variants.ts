import { Variants } from "framer-motion";

export const variantOpacity: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const variantOpacityShiftUp: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};
