import { useState } from "react";
import CardItem from "../components/cardItem";
import DrawerItem from "../components/drawerProject";

function Projects() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [project, setProject] = useState(null);
  return (
    <>
      <CardItem
        isOpenDrawer={isOpenDrawer}
        setIsOpenDrawer={setIsOpenDrawer}
        setProject={setProject}
      />
      <DrawerItem 
        isOpenDrawer={isOpenDrawer}
        project={project} />
    </>
  );
}

export default Projects;
