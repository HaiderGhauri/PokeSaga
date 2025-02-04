import { Home } from "./Components/Layout/Home"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PokemonDetail } from "./Components/UI/PokemonDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <PokemonDetail />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
};

export default App
