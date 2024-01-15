import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import {
  EllipseConceptIcon,
  EllipseDesignIcon,
  EllipseCodeIcon,
  EllipseLaunchIcon,
} from "@/components/icons";

const button = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 },
};

export const iconProcess = [
  {
    icon: <EllipseConceptIcon className=" w-[40%] lg:w-[70%]" />,
    chevronIcon: <ChevronRight className="lg:mt-20 lg:w-12  lg:h-12 lg:rotate-[12deg]" />,
  },
  {
    icon: <EllipseDesignIcon className="w-[50%]" />,
    chevronIcon: <ChevronRight className="w-10 lg:h-10" />,
  },
  {
    icon: <EllipseCodeIcon className="w-[40%]" />,
    chevronIcon: <ChevronRight className=" lg:mb-9 w-8 lg:h-8 lg:rotate-[335deg]" />,
  },
  {
    icon: <EllipseLaunchIcon className="w-[45%] relative bottom-[1rem]" />,
  },
];

function DevelopmentCycle() {
  return (
    <ul className="flex gap-[1rem] md:w-[65%] mx-auto">
      {iconProcess.map((circle, index) => (
        <motion.li
          variants={button}
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover="hover"
          whileTap="pressed"
          key={index}
          className={`flex flex-col lg:flex-row justify-center items-center lg:gap-[1.5em] ${
            index == 1 || index == 2 ? "lg:top-[4rem] relative" : null
          }`}
        >
          {circle.icon}
          {circle.chevronIcon}
        </motion.li>
      ))}
    </ul>
  );
}

export default DevelopmentCycle;
