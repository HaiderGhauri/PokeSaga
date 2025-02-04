// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// export function PokemonDetail() {
//     const { id } = useParams();
//     const [pokemon, setPokemon] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchPokemonDetail = async () => {
//             try {
//                 const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
//                 const data = await res.json();
//                 setPokemon(data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching Pokémon details:", error);
//                 setLoading(false);
//             }
//         };

//         fetchPokemonDetail();
//     }, [id]); 

//     if (loading) return <h1>Loading...</h1>;
//     if (!pokemon) return <h1>Pokemon Not Found</h1>;

//     return (
//         <div>
//             <h1>{pokemon.name}</h1>
//             <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
//             <p>Height: {pokemon.height}</p>
//             <p>Weight: {pokemon.weight}</p>
//         </div>
//     );
// };
export async function fetchPokemonById(id) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        return await res.json();
    } catch {
        return null;
    }
};

