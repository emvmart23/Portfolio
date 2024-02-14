import { AnimatePresence, motion } from "framer-motion";
import { Github, Unlink } from "lucide-react";
import { NavLink } from "react-router-dom";

interface DrawerProps {
  isOpenDrawer: boolean;
  project: Projects | null;
  setIsOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

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

function drawerProject({
  isOpenDrawer,
  project,
  setIsOpenDrawer,
}: DrawerProps) {
  return (
    <AnimatePresence>
      {isOpenDrawer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          onClick={() => setIsOpenDrawer(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center cursor-pointer"
        >
          <motion.div
            initial={variants.initial}
            animate={variants.animate}
            exit={variants.exit}
            transition={variants.transition}
            onClick={(e) => e.stopPropagation()}
            className="fixed bottom-0 shadow-2xl top-0 right-0 w-full max-w-sm z-[100] break-all cursor-default"
          >
            <img
              src={project?.image}
              alt={project?.name}
              className="inset-0 backdrop-filter backdrop-blur-lg"
            />

            <div className="p-7">
              <h1 className="mb-3 relative right-[0.3rem] font-semibold text-xl">
                {project?.name}
              </h1>
              <p className="text-start break-normal text-[0.9rem] mr-4 mx-auto mb-12 w-[95%]">
                {project?.description}
              </p>

              <div className="flex flex-wrap justify-center gap-4 mr-5">
                {project?.lenguages.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    alt={item}
                    className="w-[2.6rem] h-[2.5rem]"
                  />
                ))}
              </div>
              <div className="ml-3 flex justify-between w-[75%] fixed top-[52rem] sm:top-[47rem] 2xl:top-[52rem]">
                <NavLink
                  className={`bg-black  w-[8.4rem] justify-between items-center flex rounded-xl  p-2 hover:scale-110 ${project?.deploy == null ? "mx-auto" : ""
                    }`}
                  to={project ? project?.github : ""}
                >
                  <Github className="w-7 h-7" color="white" />
                  <span className="text-white">Repositorio</span>
                </NavLink>

                {project?.deploy != null && (
                  <NavLink
                    className="bg-black w-[8.4rem] justify-between flex items-center rounded-xl p-2 hover:scale-110"
                    to={project ? project?.deploy : ""}
                  >
                    <Unlink className="w-7 h-7" color="white" />
                    <span className="text-white">Despliegue</span>
                  </NavLink>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default drawerProject;
