import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import { FaAngleDown } from "react-icons/fa6";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
      });
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    const searchedList = pokemonList.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setPokemonList(searchedList);
  };
  const handleGrass = () => {
    const filteredList = pokemonList.filter(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return data.types.some((pokeType) => pokeType.type.name === "grass");
    });
    setPokemonList(filteredList)
    console.log(filteredList);
  };

  return (
    <div className="mt-5 md:mt-8 lg:mt-10">
      <div className="flex justify-center gap-5">
        <div className="absolute left-[5%] md:left-[15%] lg:left-[30%]">
          <h1
            onClick={() => setFilter(!filter)}
            className="mr-3 px-3 py-2 rounded-l-lg flex items-center gap-3"
          >
            Filter <FaAngleDown />
          </h1>
          <ul
            className={`px-3 py-4 ${
              filter ? "block" : "hidden"
            } relative z-10 bg-slate-300 rounded-lg`}
          >
            <li
              onClick={handleGrass}
              className="hover:cursor-pointer hover:bg-slate-500 px-3 py-1 rounded-lg hover:text-white"
            >
              Grass
            </li>
            <li className="hover:cursor-pointer hover:bg-slate-500 px-3 py-1 rounded-lg hover:text-white">
              Fire
            </li>
            <li className="hover:cursor-pointer hover:bg-slate-500 px-3 py-1 rounded-lg hover:text-white">
              Water
            </li>
            <li className="hover:cursor-pointer hover:bg-slate-500 px-3 py-1 rounded-lg hover:text-white">
              Bug
            </li>
          </ul>
        </div>
        <form action="" onSubmit={handleSearch}>
          <input
            type="search"
            name="search"
            className="bg-red-200 w-40 md:w-72 px-3 ml-5 md:ml-0 py-2 rounded-l-lg"
            placeholder="Search here..."
            id=""
          />
          <input
            type="submit"
            value="Search"
            className="bg-zinc-600 rounded-r-lg py-2 px-5 text-white hover:cursor-pointer"
          />
        </form>
      </div>
      <div className="w-[95%] mx-auto mt-5 md:mt-10 lg:mt-16 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-5">
        {pokemonList?.map((pokemon, index) => (
          <Pokemon key={index} url={pokemon.url} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
