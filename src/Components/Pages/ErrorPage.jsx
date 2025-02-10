import { NavLink, useRouteError } from "react-router-dom"

export function ErrorPage () {
    const error = useRouteError();
   
    return(
        <div className="flex flex-col gap-3 mx-8 mt-4">
            <h1 className="text-2xl">Oops! error occured</h1>
            <p className="text-xl">{error.status == "404" ? "404 Page Not Found" : ""}</p>
            <NavLink to={"/"}>
                <button className="font-bold bg-amber-950 text-red-50 px-4 py-2 cursor-pointer rounded-md">Go to Home</button>
            </NavLink>
        </div>
    )
}