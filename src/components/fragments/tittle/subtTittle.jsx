export default function SubTittle(props) {
    const { children, color, textAlign  } = props
    return(
        <h1 className="text-[5rem] text-white leading-tight font-semibold"
        style={{
            color : color,
            textAlign : textAlign
        }}
        >
            {children}
        </h1>
    )
}