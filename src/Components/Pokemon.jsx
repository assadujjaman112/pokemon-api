import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pokemon = ({ url }) => {
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
      });
  }, [url]);
  return (
    <div className="pokemon">
      {pokemonData && (
        <Link to={`/${pokemonData.id}`}>
          <div className="bg-gray-200 px-3 py-5 rounded-lg">
            <img
              src={pokemonData.sprites.front_default}
              alt={pokemonData.name}
            />
            <h2 className="text-center">{pokemonData.name}</h2>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Pokemon;
