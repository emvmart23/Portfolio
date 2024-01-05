import { Main } from "@/home/Main";
import AppLayout from "@/layout";
import Projects from "@/modules/Projects/page/Projects";

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
        element: <></>,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
];
