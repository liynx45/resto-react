import { Route, Router, Routes } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import HomePage from "../pages/homePage";
import Footer from "../components/footer"
import MenuPage from "../pages/menu";
import ContactPage from "../pages/contact";
import AboutPage from "../pages/about";

export default function MainLayout() {
    return(
        <main>
            <Navbar />
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/menu"} element={<MenuPage />} />
                <Route path={"/contact"} element={<ContactPage />} />
                <Route path={"/about"} element={<AboutPage />} />
            </Routes>
            <Footer />
        </main>
    )
}