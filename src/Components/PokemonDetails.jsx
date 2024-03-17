import { useLoaderData } from "react-router-dom";

const PokemonDetails = () => {
  const details = useLoaderData();
  console.log(details.stats);
  return (
    <div className="w-11/12 md:w-1/2 lg:w-1/3 mx-auto bg-red-100 rounded-lg flex flex-col items-center mt-6 md:mt-8 lg:mt-16 pb-6">
      <h1 className="mt-3 md:mt-5 lg:mt-8 text-xl font-bold ">
        Details of {details.name}
      </h1>
      <div className="w-36 h-44">
        <img
          className="w-full h-full"
          src={details.sprites.front_default}
          alt=""
        />
      </div>
      <div className="mr-6">
        <h1>
          <span className="font-bold">Abilities :</span>
          {details.abilities?.map((ability, i) => (
            <span key={i} className="text-sm font-semibold">
              {ability.ability.name},
            </span>
          ))}
        </h1>
        <p>
          <span className="font-bold">
            Type :
            {details.types?.map((type, i) => (
              <span key={i} className="text-sm font-semibold">
                {type.type.name}
              </span>
            ))}
          </span>
        </p>
        <div className="">
          <p className="font-bold ">Base Stats : </p>
          {details.stats.map((stat, i) => (
            <p key={i} className="flex">
              <span className="font-medium">{stat.stat.name}</span>
              <span>- {stat.base_stat}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
