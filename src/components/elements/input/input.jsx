export default function Input(props) {
    const { childern, type, width } = props
    return (
        <input type={type} placeholder={childern}
            className="px-6 py-2 border-2 border-black bg-transparent"
            style={{
                width: width
            }}
        />
    )
}