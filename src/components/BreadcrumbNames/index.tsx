import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export function BreadcrumbNames() {
  const { pathname } = useLocation();

  const routeNames = useMemo(
    () => [
      {
        label: "Sobre mi",
        href: "/",
        active: pathname !== "/skills" && pathname !== "/projects",
      },
      {
        label: "Hablidades",
        href: "/Skills",
        active: pathname !== "/" && pathname !== "/projects",
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
