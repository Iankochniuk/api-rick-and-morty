// routes.js
import { createBrowserRouter } from "react-router-dom";
import Inicio from "./componets/inicio";
import Personaje from "./componets/personaje";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Inicio />,
    },
    {
      path: "/personaje/:id",
      element: <Personaje />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

export default router;
