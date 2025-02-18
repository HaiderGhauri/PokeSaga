import { useEffect, useState } from "react";
import { PokemonCard } from "../UI/PokemonCard";
import { fetchAPI } from "../APICalling/GetInitialData";
import { Loader } from "../UI/Loader";
// import WaveSVG from "../UI/SvgWave";

export function Pokedex() {

  const [pokemon, setPokemon] = useState([]);
  const [prevUrl, setPrevUrl] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  let initialAPI = "https://pokeapi.co/api/v2/pokemon?limit=24";

  useEffect(() => {
    fetchAPI(initialAPI, 1, setPrevUrl, setNextUrl, setPageNumber, setPokemon, setLoading);
  }, []);

  const searchCard = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <Loader />
    )
  };

  const handlePagination = (url, page) => {
    fetchAPI(url, page, setPrevUrl, setNextUrl, setPageNumber, setPokemon, setLoading);
    return window.scrollTo({top: 0, behavior: "smooth"})
  };

  return (

    <section className="mx-auto max-w-[1300px] w-[95%] my-14 mt-28 sm:my-16 sm:mt-32 flex flex-col gap-10 justify-center items-center z-0">

      {/* <WaveSVG /> */}

      <header>
        <h1 className="text-3xl font-semibold">Let's Catch Pokémon</h1>
      </header>

      <div className="bg-neutral-200">
        <input
          className="outline-0 mr-2.5 px-2 py-2 pr-10"
          type="text"
          placeholder="Search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
      </div>


      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-4">
        {searchCard.map((curPokemon) => {
          return <PokemonCard key={curPokemon.id} pokemonData={curPokemon} />
        })}
      </ul>

      <div className="flex gap-3">
        <button
          className="text-xl font-semibold cursor-pointer"
          onClick={() => prevUrl && handlePagination(prevUrl, pageNumber - 1)}
          disabled={!prevUrl}
        >Prev</button>
        <span className="text-lg">{pageNumber}</span>
        <button
          className="text-xl font-semibold cursor-pointer"
          onClick={() => nextUrl && handlePagination(nextUrl, pageNumber + 1)}
          disabled={!nextUrl}>Next</button>
      </div>

    </section>

  );
};
