import { AnimatePresence, motion } from "framer-motion";

interface DrawerProps {
  isOpenDrawer: boolean;
  project: Projects | null;
}

function DrawerItem({ isOpenDrawer, project }: DrawerProps) {
  const variants = {
    initial: {
      x: "100%",
    },
    animate: {
      x: 20,
    },
    exit: {
      x: "100%",
    },
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.4,
    },
  };

  return (
    <AnimatePresence>
      {isOpenDrawer && (
        <motion.div
          initial={variants.initial}
          animate={variants.animate}
          exit={variants.exit}
          transition={variants.transition}
          className="fixed bottom-0 bg-muted shadow-lg top-0 right-0 w-full max-w-sm h-screen z-50 "
        >
          <img src={project?.image} alt={project?.name} className="" />
          <div className="p-5">
            <h1 className="mb-3 relative right-[0.3rem] font-semibold text-xl">
              {project?.name}
            </h1>
            <p className="font-medium mr-2 w-[98%] mx-auto mb-12">
              {project?.description}
            </p>

            <div className="flex flex-wrap gap-3 ml-5">
              {project?.lenguages.map((item, index) => (
                <img key={index} src={item} alt={item} className="w-[5.5rem] shadow-black" />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DrawerItem;
