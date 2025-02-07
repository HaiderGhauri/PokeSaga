import { NavLink } from "react-router-dom";

export function About() {
    return (
        <section className="mx-auto max-w-[1300px] w-[95%] my-14 mt-28 sm:my-16 sm:mt-32 z-0 flex flex-col gap-8 text-amber-950">
            <div>
                <h1 className="text-3xl mb-1.5 font-bold">About PokéSaga</h1>
                <p className="text-lg font-semibold tracking-wide">PokéSaga is your ultimate Pokémon companion, providing quick and detailed Pokémon stats, evolutions, and battle insights.</p>
            </div>

            <div>
                <h2 className="text-2xl mb-1.5 font-bold">Why We Built PokéSaga?</h2>
                <p className="text-lg font-semibold tracking-wide">We created PokéSaga for Pokémon trainers who want a fast, simple, and engaging way to explore Pokémon details. Whether you're a casual fan or a battle strategist, our platform helps you discover Pokémon abilities, evolutions, and strengths effortlessly.</p>
            </div>

            <div>
                <h2 className="text-2xl mb-1.5 font-bold">What You Can Do on PokéSaga</h2>
                <ul className="text-lg font-semibold tracking-wide list-disc pl-10">
                    <li>Search Pokémon by Name – Instantly find any Pokémon.</li>
                    <li>View Pokémon Evolutions – See how your favorite Pokémon evolve.</li>
                    <li>Battle Strategy Insights – Learn strengths & weaknesses.</li>
                    <li>Smooth & Fast UI – Optimized for a seamless experience.</li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl mb-1.5 font-bold">Ready to Explore Pokémon?</h2>
                <p className="text-lg font-semibold tracking-wide">Discover detailed stats, evolutions, and battle insights now.</p>
                <NavLink to={'/explore'}>
                    <button className="font-bold bg-amber-950 text-red-50 px-4 py-2 cursor-pointer rounded-md mt-2">Explore Pokémon</button>
                </ NavLink>
            </div>
        </section>
    )
};