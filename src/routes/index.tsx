import { useRoutes } from "react-router-dom";
import appRoutes from "./AppRouter";

function AppRoutes() {
  return useRoutes([...appRoutes]);
}

export default AppRoutes;
