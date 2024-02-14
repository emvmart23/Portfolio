import { AppLayout } from "@/components";
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
    ],
  },
];
