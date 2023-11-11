export default function SectionLayout(props){
    const { children, background } = props
    return(
        <div className={`px-28 py-24 relative ${background}`}>
            {children}
        </div>
    )
}