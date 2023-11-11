
import fish from "../../assets/home/features/icon_fish.png"
import carrot from "../../assets/home/features/icon_carrot.png"
import lemon from "../../assets/home/features/icon_lemon.png"
import SectionLayout from "../../layouts/sectionlayout";
import ThirdTittle from "../fragments/tittle/thirdTittle";

export default function Features() {
    return(
        <SectionLayout>
            <div className="container flex justify-between items-center">
                <div className="flex flex-col gap-6 justify-center items-center">
                    <img src={fish} className="w-[150px] p-4 rounded-full bg-backgroundWhite" alt="" />
                    <ThirdTittle color="black">
                        Premium Qualty
                    </ThirdTittle>
                    <span className="max-w-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non autem voluptate rerum fugit fuga consequatur!</span>
                </div>
                <div className="flex flex-col gap-6 justify-center items-center">
                    <img src={carrot} className="w-[150px] p-4 rounded-full bg-backgroundWhite" alt="" />
                    <ThirdTittle color="black">
                        Premium Qualty
                    </ThirdTittle>
                    <span className="max-w-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non autem voluptate rerum fugit fuga consequatur!</span>
                </div>
                <div className="flex flex-col gap-6 justify-center items-center">
                    <img src={lemon} className="w-[150px] p-4 rounded-full bg-backgroundWhite" alt="" />
                    <ThirdTittle color="black">
                        Premium Qualty
                    </ThirdTittle>
                    <span className="max-w-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non autem voluptate rerum fugit fuga consequatur!</span>
                </div>
            </div>
        </SectionLayout>
    )
}