import { useState } from "react";
import Sidebar from "./sidebar";

export default function Navbar() {
    const [toggle, setToggle] = useState(false)

    return (
        <nav className={`absolute w-full top-0 z-50`}>
            {toggle ? <Sidebar setToggle={setToggle} /> : (
                <div className="container">
                    <div className="w-ful px-12 flex justify-between items-center py-6 bg-primaryColor">
                        <div className="flex gap-8 items-center text-white">
                            <div className="text-2xl relative">
                                <div className="w-1/2 h-[150%] absolute border border-white left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] "></div>
                                <span className="bg-primaryColor px-2 py-2">FoodZero</span>
                            </div>
                            <button className="w-[30px] flex flex-col gap-2 cursor-pointer" onClick={() => setToggle(true)}>
                                <div className="w-full h-[1px] bg-white"></div>
                                <div className="w-full h-[1px] bg-white"></div>
                                <div className="w-full h-[1px] bg-white"></div>
                            </button>
                        </div>
                        <div className="flex gap-8 items-center text-white">
                            <span>+62 081226948547</span>
                            <div className="border border-white py-2 px-8 ">
                                <span>Resevaciton</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}