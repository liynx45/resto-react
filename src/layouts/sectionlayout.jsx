export default function SectionLayout(props){
    const { children, background } = props
    return(
        <div className={`md:px-28 px-8 py-24 relative ${background}`}>
            {children}
        </div>
    )
}