import { Route, Router, Routes } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import HomePage from "../pages/homePage";
import Footer from "../components/footer"
import MenuPage from "../pages/menu";

export default function MainLayout() {
    return(
        <main>
            <Navbar />
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/menu"} element={<MenuPage />} />
            </Routes>
            <Footer />
        </main>
    )
}