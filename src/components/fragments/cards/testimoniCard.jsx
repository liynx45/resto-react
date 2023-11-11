import ThirdTittle from "../tittle/thirdTittle"

export default function TestimoniCard({ data }) {

    return (
        <div className="flex gap-6 justify-center items-center">
            <img src={data.src} className="w-[100px] aspect-square rounded-full" alt="" />
            <div className="flex flex-col">
                <span className="text-xl font-semibold">{data.name}</span>
                <span>{data.work}</span>
            </div>
        </div>
    )
}

function Header(props) {
    const { children } = props
    return (
        <ThirdTittle
            color="black"
        >
            {children}
        </ThirdTittle>
    )
}

TestimoniCard.Header = Header