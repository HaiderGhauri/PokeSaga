import { Outlet } from "react-router-dom";
import { Header } from "../UI/Header";
import { Footer } from "../UI/Footer";

export function AppLayout() {
    return (
        <>
            <div className="flex flex-col min-h-screen justify-between">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    )
};