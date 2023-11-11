import ThirdTittle from "../tittle/thirdTittle";

export default function MenuCard(props) {
    const {children} = props
    return (
        <div className="w-[45%] flex flex-col gap-6">
            <div className="flex w-full flex-col items-end">
                <span className="text-xl font-semibold">$20</span>
                <div className="border-b-2 w-full border-dashed border-black"></div>
            </div>
            {children}
        </div>
    )
}

function Header(props) {
    const {children} = props
    return (
        <ThirdTittle color="black">
            {children}
        </ThirdTittle>
    )
}

function Descrip(props) {
    const {children} = props
    return (
        <div className="">
            {children}
        </div>
    )
}

MenuCard.Header = Header;
MenuCard.Descrip = Descrip;
