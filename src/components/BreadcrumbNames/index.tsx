import { useMemo } from "react";
import { useLocation } from "react-router-dom";

function BreadcrumbNames() {
  const { pathname } = useLocation();

  const routeNames = useMemo(
    () => [
      {
        label: "Sobre mí",
        href: "/",
        active: pathname !== "/skills" && pathname !== "/projects"  && pathname !== "/experience",
      },
      {
        label: "Hablidades",
        href: "/Skills",
        active: pathname !== "/" && pathname !== "/projects" && pathname !== "/experience",
      },
      {
        label: "Experiencia",
        href: "/experience",
        active: pathname !== "/projects"  && pathname !== "/skills" && pathname !== "/",
      },
      {
        label: "Proyectos",
        href: "/projects",
        active: pathname == "/projects",
      },
    ],
    [pathname]
  );

  const activeLinks = routeNames.filter((link) => link.active);

  return (
    <>
      {activeLinks.map((item, index) => (
        <span key={index} className="text-[1.3rem] font-medium">
          [ {item.label} ]
        </span>
      ))}
    </>
  );
}

export default BreadcrumbNames
