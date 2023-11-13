export default function HeadTittle(props) {
    const { children, color } = props
    return(
        <h1 className="md:text-[6rem] text-[2rem] leading-tight font-semibold" style={{color: color}}>
            {children}
        </h1>
    )
}