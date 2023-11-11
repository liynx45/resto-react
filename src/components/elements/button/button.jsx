export default function Button(props) {
    const { children, width } = props
    return(
        <button 
        className="text-white bg-black py-4 px-16"
        style={{
            width: width
        }}
        >
            {children}
        </button>
    )
}