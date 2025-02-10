import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { fetchPokemonById } from "../APICalling/GetDetailData";

export function PokemonDetail() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPokemon = async () => {
            const data = await fetchPokemonById(id);
            setPokemon(data);
            setLoading(false);
        };

        getPokemon();
    }, [id]);

    if (loading) return <h2 className="text-3xl text-center mt-24">Loading...</h2>
    if (!pokemon) return <h2>Pokémon not found</h2>

    return (
        <div className="my-30">
            <NavLink to={"/explore"}>
                <button className="font-bold bg-amber-950 text-red-50 px-4 py-2 ml-2 sm:ml-6 lg:ml-25 cursor-pointer rounded-md">
                    Go Back</button>
            </NavLink>
            <div className="max-w-[400px] w-[95%] mx-auto mt-15 relative shadow-[0_0_8px_rgba(0,0,0,0.3)] transition delay-150 duration-300 ease-in-out scale-100 hover:scale-103 flex flex-col bg-white group">
                <div className="absolute top-4 left-0 right-0 h-[35%] bg-[#ebfbf1] rounded-[80%_50%_90%_50%] 
                group-hover:rounded-[0%_0%_90%_50%] transition-all duration-300 group-hover:top-0 z-[-1]"></div>
                <figure className="flex items-center justify-center p-5 mt-5">
                    <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}
                        className="w-35 h-35" />
                </figure>

                <h1 className="text-center capitalize text-2xl mb-4 mt-4">{pokemon.name}</h1>

                <div className="m-auto my-2 capitalize">
                    <p className="px-5 py-1 rounded-4xl bg-green-300">{pokemon.types.map((curType) => curType.type.name).join(', ')}</p>
                </div>

                <div className="flex flex-col mx-auto">
                    <div className="grid grid-cols-3 px-4 gap-4 my-3 capitalize text-left">
                        <p><span className="font-bold">Height: </span>{pokemon.height}</p>

                        <p><span className="font-bold">Weight: </span>{pokemon.weight}</p>

                        <p><span className="font-bold">Speed: </span>{pokemon.stats[5].base_stat}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 px-4 my-3 mb-6 capitalize text-left">
                        <p><span className="font-bold block">Experience: </span>{pokemon.base_experience}</p>

                        <p><span className="font-bold block">Attack: </span>{pokemon.stats[1].base_stat}</p>

                        <p><span className="font-bold block">Abilities: </span>{pokemon.abilities.map((abilityInfo) => abilityInfo.ability.name).splice(0, 1).join(', ')}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 px-4 my-3 mb-6 capitalize text-left">
                        <p><span className="font-bold block">HP: </span>{pokemon.stats[0].base_stat}</p>

                        <p><span className="font-bold block">Defense: </span>{pokemon.stats[2].base_stat}</p>

                        <p><span className="font-bold block">Special-Attack: </span>{pokemon.stats[3].base_stat}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
