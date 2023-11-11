export default function Footer() {
    return (
        <section className="flex flex-col">
            <div className="flex justify-between items-center bg-primaryColor px-28 py-12">
                <h1 className="text-5xl font-semibold text-white">Zero <br /> Food</h1>
                <div className="flex flex-col text-white gap-6">
                    <div className="p-2">
                        <span className="text-2xl">Cotact</span>
                    </div>
                    <div className="flex flex-col gap-1  text-[12px]">
                        <span>+61081226948547</span>
                        <span>iqbalbahtiar045@gmail.com</span>
                    </div>
                    <div className="flex flex-col gap-1 text-[12px]">
                        <span>+61081226948547</span>
                        <span>iqbalbahtiar045@gmail.com</span>
                    </div>
                </div>
                <div className="flex flex-col w-[40%] text-white">
                    <span className="text-xl pb-12">Never Miss a Recipe</span>
                    <div style={{
                        display : "grid",
                        gridTemplateColumns: "60% 40%",
                        gap: "30px"
                    }}>
                        <input type="text" placeholder="Email Address" className="bg-transparent border-2 px-4 py-2 border-white" />
                        <button className="bg-secondaryColor text-md font-semibold text-white">Submit</button>
                    </div>
                    <span className="text-[9px] pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint earum necessitatibus</span>
                </div>
            </div>
            <div className="border-t-2 border-dashed w-full px-28 py-8 bg-primaryColor text-white">
                <span className="text-center">2020 Zero Inc Reservesed</span>
            </div>
        </section>
    )
}