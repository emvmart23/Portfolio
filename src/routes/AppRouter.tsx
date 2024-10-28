import { AppLayout } from "@/components";
import Experience from "@/pages/Experience/page/Experience";

import Projects from "@/pages/Projects/page/Projects";
import Skills from "@/pages/Skills/page/Skills";
import Main from "@/pages/home";

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
      {
        path: "/experience",
        element: <Experience />,
      },
    ],
  },
];
