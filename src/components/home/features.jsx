import SectionLayout from "../../layouts/sectionlayout";
import ThirdTittle from "../fragments/tittle/thirdTittle";

export default function Features() {
    return(
        <SectionLayout>
            <div className="container flex flex-col md:flex-row gap-12 md:gap-0 justify-between items-center">
                <div className="flex flex-col gap-6 justify-center items-center">
                    <img src="/assets/home/features/fish.png" className="w-[150px] p-4 rounded-full bg-backgroundWhite" alt="" />
                    <ThirdTittle color="black">
                        Premium Qualty
                    </ThirdTittle>
                    <span className="max-w-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non autem voluptate rerum fugit fuga consequatur!</span>
                </div>
                <div className="flex flex-col gap-6 justify-center items-center">
                    <img src="/assets/home/features/carrot.png" className="w-[150px] p-4 rounded-full bg-backgroundWhite" alt="" />
                    <ThirdTittle color="black">
                        Premium Qualty
                    </ThirdTittle>
                    <span className="max-w-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non autem voluptate rerum fugit fuga consequatur!</span>
                </div>
                <div className="flex flex-col gap-6 justify-center items-center">
                    <img src="/assets/home/features/lemon.png" className="w-[150px] p-4 rounded-full bg-backgroundWhite" alt="" />
                    <ThirdTittle color="black">
                        Premium Qualty
                    </ThirdTittle>
                    <span className="max-w-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non autem voluptate rerum fugit fuga consequatur!</span>
                </div>
            </div>
        </SectionLayout>
    )
}