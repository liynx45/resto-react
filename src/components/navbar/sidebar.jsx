import { Link, NavLink } from "react-router-dom"

const dataNav = [
    {
        id : 1,
        name : "Home",
        path : "/"
    },
    {
        id : 2,
        name : "Menu",
        path : "/menu"
    },
    {
        id : 3,
        name : "About",
        path : "/about"
    },
    {
        id : 4,
        name : "Contact",
        path : "/contact"
    }
]

export default function Sidebar({setToggle}) {
    return (
        <div style={{backgroundImage: `url(/assets/bacground/side.png)`, filter: " hue-rotate(100deg)"}} className="backdrop-opacity-10 bg-primaryColor z-[999] w-full min-h-screen text-white fixed ">
            <button onClick={() => setToggle(false)} className="absolute top-[50px] left-8 md:left-16 text-5xl">&#xD7;</button>
            <div className="flex w-full h-full justify-between px-12 md:px-48 py-36">
                <ul className="text-2xl md:text-5xl flex flex-col gap-8 list-disc">
                    {dataNav.map(nav => (
                        <li key={nav.id}>
                            <NavLink onClick={() => setToggle(false)} to={nav.path}>{nav.name}</NavLink>
                        </li>
                    ))}
                </ul>
                <div className="h-full flex pt-64 md:pt-48 ">
                    <div className="flex flex-col  gap-6">
                        <div className="p-2 border-b-2 border-dashed">
                            <span className="text-2xl">Cotact</span>
                        </div>
                        <div className="flex flex-col gap-1  text-[12px]">
                            <span>+61081226948547</span>
                            <span>iqbalbahtiar045@gmail.com</span>
                        </div>
                        <div className="flex flex-col gap-1 text-[12px]">
                            <span>+61081226948547</span>
                            <span>iqbalbahtiar045@gmail.com</span>
                        </div>
                        <div className="flex gap-2">
                            <div className="bg-white w-[25px] rounded-full aspect-square"></div>
                            <div className="bg-white w-[25px] rounded-full aspect-square"></div>
                            <div className="bg-white w-[25px] rounded-full aspect-square"></div>
                            <div className="bg-white w-[25px] rounded-full aspect-square"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}