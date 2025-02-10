import { NavLink } from "react-router-dom";

export function Home() {

  return (
    <>
      <section className="flex min-h-lvh justify-center items-center gap-4 lg:gap-0 flex-col-reverse lg:flex-row md:flex-col-reverse py-18 px-6 lg:px-36 md:px-15 bg-amber-200">
        <div className="flex flex-col gap-8 basis-[50%]">
          <h1 className="text-2xl sm:text-4xl font-semibold text-amber-950">
            Catch 'Em All In The World of Pokémon!</h1>
          <p className="text-xl sm:text-3xl text-amber-950">
            Join the adventure, discover your favorite Pokémon, and embark on an exciting journey. Start exploring now!</p>
          <NavLink to={'/explore'}>
            <button className="font-bold bg-amber-950 text-red-50 px-4 py-2 cursor-pointer rounded-md">Explore Pokémon</button>
          </ NavLink>
        </div>

        <div className="justify-items-center">
          {/* <img src="src/assets/banner-img.png"
            className="w-full md:w-2/3 sm:w-1/4 drop-shadow-[0px_30px_5px_rgba(0,0,0,0.35)]" /> */}
            <img src="/banner-img.png"
            className="w-full md:w-2/3 sm:w-1/4 drop-shadow-[0px_30px_5px_rgba(0,0,0,0.35)]" />
        </div>
      </section>
    </>
  )
};
