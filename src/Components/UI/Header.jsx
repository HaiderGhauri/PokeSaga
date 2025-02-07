import { useEffect, useState } from "react";
import { FaBars, } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinkClass = ({ isActive }) =>
        isActive
            ? "text-rose-50 bg-amber-950 px-3 py-2 rounded-md"
            : "text-amber-950 hover:bg-amber-900 hover:text-white px-3 py-2 rounded-md";

    const handleNavbar = () => {
        return setIsOpen(!isOpen)
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className="mx-auto w-full h-20 px-2 sm:px-6 lg:px-10 flex justify-between items-center bg-stone-400 text-amber-950 font-semibold fixed z-10 top-0">
            <div className="lg:ml-15">
                <NavLink to={"/"}>
                    <p className="text-xl">
                        <span className="text-amber-300 pl-1 pb-1 sm:pb-1 font-bold border-dashed border-rose-50 border-1 border-r-0">Poké</span>
                        <span className="text-rose-50 pl-0.5 pr-1 pb-1 sm:pb-1 border-dashed border-amber-300 border-1 border-l-0">saga</span>
                    </p>
                </NavLink>
            </div>
            <nav className={`transform transition-transform ease duration-700 sm:block ${isOpen ? "translate-x-[-1.5%]  w-screen bg-red-50 absolute top-0 text-center mt-20 py-3" : "translate-x-[150%] hidden sm:translate-x-0 sm:block sm:relative"}`}>
                {/* <nav className={`basis-[65%] transform transition-transform ease-in-out duration-700 sm:block ${isOpen ? "translate-y-0 opacity-100 w-screen bg-red-50 absolute top-0 text-center mt-20 py-3" : "translate-y-[-150%] opacity-0 sm:opacity-100 sm:translate-y-0 sm:relative sm:block"}`}> */}
                <ul className={`flex justify-end gap-8 lg:pr-15 mt-1 ${isOpen ? "flex-col" : ""}`}>
                    <li><NavLink to={'/'} className={navLinkClass}>Home</NavLink></li>
                    <li><NavLink to={'explore'} className={navLinkClass}>Explore</NavLink></li>
                    <li><NavLink to={'about'} className={navLinkClass}>About</NavLink></li>
                    <li><NavLink to={'contact'} className={navLinkClass}>Contact</NavLink></li>
                </ul>
            </nav>
            <div className="mt-1.5 block sm:hidden max-w-[750px] text-2xl basis-[] text-start">
                <button onClick={handleNavbar}>{isOpen ? <FaTimes /> : <FaBars />}</button>
            </div>
        </header>
    )
}