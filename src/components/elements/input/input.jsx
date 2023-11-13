export default function Input(props) {
    const { childern, type } = props
    return (
        <input type={type} placeholder={childern}
            className="px-6 py-2 w-full border-2 md:w-[25%] border-black bg-transparent"
        />
    )
}