import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home";
import PokemonDetails from "../Components/PokemonDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children : [
        {
            path : "/",
            element : <Home></Home>
        },
        {
            path : "/:id",
            element : <PokemonDetails></PokemonDetails>,
            loader : ({params})=> fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
        }
      ]
    },
  ]);
export default router;