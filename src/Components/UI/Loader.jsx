import HashLoader from "react-spinners/HashLoader";

export function Loader () {
    let color = "#461901";
    return (
        <div className="text-3xl w-full flex items-center justify-center mt-24">
            <h1><HashLoader color={color} /></h1>
        </div>
    )
};