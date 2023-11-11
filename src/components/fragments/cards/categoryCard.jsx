export default function CatgeoryCard() {
    return (
        <div className="relative group overflow-hidden">
            <div className="absolute w-full h-full">
                <div className="flex p-8 justify-between font-semibold text-4xl">
                    <span>Starter</span>
                    <span className="group-hover:translate-x-6 transition-all duration-300">&#8594;</span>
                </div>
            </div>
            <div className="absolute translate-y-full w-full h-full bg-black/30 group-hover:translate-y-[30%] transition-all duration-300">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur itaque, qui veritatis nemo beatae, deserunt in, dicta temporibus quas soluta atque. Mollitia, dolorem consectetur!</span>
            </div>
            <img src="" alt="" />
        </div>
    )
}