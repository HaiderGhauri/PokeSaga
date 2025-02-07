import { NavLink } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

export function Footer() {
    return (
        <section className="mx-auto w-full px-2 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-6 flex justify-center items-center gap-5 flex-col bg-stone-400 font-semibold">
            <div>
                <ul className="flex justify-end gap-8 md:gap-16 text-amber-950">
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'explore'}>Explore</NavLink></li>
                    <li><NavLink to={'about'}>About</NavLink></li>
                    <li><NavLink to={'contact'}>Contact</NavLink></li>
                </ul>
            </div>

            <div>
                <ul className="flex justify-end gap-6 md:gap-8">
                    <li className="text-blue-800"><NavLink><FaFacebook /></NavLink></li>
                    <li className="text-red-600"><NavLink><FaInstagram /></NavLink></li>
                    <li><NavLink><FaXTwitter /></NavLink></li>
                    <li><NavLink><FaGithub /></NavLink></li>
                </ul>
            </div>

            <div>
                <p className="text-amber-950">© 2024 PokeSaga. All rights reserved.</p>
            </div>

        </section>
    )
}