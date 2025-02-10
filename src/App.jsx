import { Home } from "./Components/Pages/Home"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PokemonDetail } from "./Components/UI/PokemonDetail";
import { Pokedex } from "./Components/Pages/Explore";
import { AppLayout } from "./Components/Pages/AppLayout";
import { Contact } from "./Components/Pages/Contact";
import { About } from "./Components/Pages/About";
import { ErrorPage } from "./Components/Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Pokedex />,
      },
      {
        path: "/explore/:id",
        element: <PokemonDetail />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
};

export default App
