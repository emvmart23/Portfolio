import { useState } from "react";
import { useTitle } from "@/hooks/useTitle";
import CardItem from "../components/cardItem";
import DrawerProject from "../components/drawerProject";

function Projects() {
  useTitle("Proyectos");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [project, setProject] = useState<Projects | null>(null);

  return (
    <>
      <CardItem
        isOpenDrawer={isOpenDrawer}
        setIsOpenDrawer={setIsOpenDrawer}
        setProject={setProject}
      />

      <DrawerProject
        isOpenDrawer={isOpenDrawer}
        setIsOpenDrawer={setIsOpenDrawer}
        project={project}
      />
    </>
  );
}

export default Projects;
