import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AnimeDetailsPage from "./pages/AnimeDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "anime/:id/:slug", element: <AnimeDetailsPage /> },
    ],
  },
]);

export default router;
