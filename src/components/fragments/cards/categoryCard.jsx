
export default function CatgeoryCard(props) {
    const { src, children } = props

    return (
        <div className="relative group overflow-hidden">
            {children}
            <img src={src} alt="" />
        </div>
    )
}

function Header(props) {
    const {children} = props
    return (
        <div className="absolute w-full h-full">
            <div className="flex p-8 justify-between font-semibold text-4xl">
                <span>{children}</span>
                <span className="group-hover:translate-x-6 transition-all duration-300">&#8594;</span>
            </div>
        </div>
    )
}

function Desc(props) {
    const {children} = props
    return (
        <div className="absolute translate-y-full w-full h-full bg-black/30 group-hover:translate-y-[30%] transition-all duration-300 p-6">
                <span className="text-white text-xl">{children}</span>
            </div>
    )
}


CatgeoryCard.Head = Header
CatgeoryCard.Info = Desc