export default function HeadTittle(props) {
    const { children, color } = props
    return(
        <h1 className="text-[6rem] leading-tight font-semibold" style={{color: color}}>
            {children}
        </h1>
    )
}