import AppLayout from "@/layout";
import { lazy } from "react";
const Main = lazy(() => import("@/home/Main"))
const Projects = lazy(() => import("@/modules/Projects/page/Projects"))
const Skills = lazy(() => import("@/modules/Skills/page/Skills"))

export const appRoutes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/skills",
        element: <Skills/>,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
];
