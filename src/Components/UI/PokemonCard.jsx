import { NavLink } from "react-router-dom";

export function PokemonCard({ pokemonData }) {

    return (
        <NavLink to={`/${pokemonData.id}`}>
        <li
            className="relative h-[380px] shadow-[0_0_8px_rgba(0,0,0,0.3)] transition delay-150 duration-300 ease-in-out scale-100 hover:scale-103 flex flex-col bg-white z-50 group">
            <div className="absolute top-10 left-0 right-0 h-[40%] bg-[#ebfbf1] rounded-[80%_50%_90%_50%] 
                group-hover:rounded-[0%_0%_90%_50%] transition-all duration-300 group-hover:top-0 z-[-1]"></div>
            <figure className="flex items-center justify-center p-5 mt-4">
                <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name}
                    className="w-35 h-35" />
            </figure>

            <h1 className="text-center capitalize text-2xl mb-4 mt-1">{pokemonData.name}</h1>

            <div className="m-auto my-2 capitalize">
                <p className="px-5 py-1 rounded-4xl bg-green-300">{pokemonData.types.map((curType) => curType.type.name).join(', ')}</p>
            </div>

            <div className="grid grid-cols-3 px-3 gap-2 mx-auto my-4 capitalize">
                <p><span className="font-bold">Height: </span>{pokemonData.height}</p>

                <p><span className="font-bold">Weight: </span>{pokemonData.weight}</p>

                <p><span className="font-bold">Speed: </span>{pokemonData.stats[5].base_stat}</p>
            </div>

            {/* <div className="grid grid-cols-3 gap-4 px-4 mx-auto my-3 mb-6 capitalize text-center">
                <p><span className="font-bold block">Experience: </span>{pokemonData.base_experience}</p>

                <p><span className="font-bold block">Attack: </span>{pokemonData.stats[1].base_stat}</p>

                <p><span className="font-bold block">Abilities: </span>{pokemonData.abilities.map((abilityInfo) => abilityInfo.ability.name).splice(0, 1).join(', ')}</p>
            </div> */}
        </li>
        </NavLink>
    )
}