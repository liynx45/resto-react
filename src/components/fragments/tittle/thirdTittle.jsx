export default function ThirdTittle(props) {
    const { children, color } = props
    return(
        <h1 className="text-3xl text-white leading-tight font-semibold"
        style={{
            color : color
        }}
        >
            {children}
        </h1>
    )
}