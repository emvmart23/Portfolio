import Main from "@/home/Main";
import AppLayout from "@/layout";
import Projects from "@/modules/Projects/page/Projects";
import Skills from "@/modules/Skills/page/Skills";

const appRoutes = [
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

export default appRoutes;
