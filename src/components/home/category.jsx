import SectionLayout from "../../layouts/sectionlayout";
import SubTittle from "../fragments/tittle/subtTittle";
import image_1 from "../../assets/home/category/image_1.png"
import image_2 from "../../assets/home/category/image_2.png"
import image_3 from "../../assets/home/category/image_3.png"
import CatgeoryCard from "../fragments/cards/categoryCard";

export default function Category() {
    return (
        <SectionLayout>
            <div className="container w-full flex flex-col gap-6 justify-center items-center">
                <SubTittle
                    color="black"
                    textAlign="center"
                >
                    Calories Energy <br />Balance
                </SubTittle>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem!</span>
                <div className="grid grid-cols-3 w-full gap-12 pt-16">
                    <CatgeoryCard />
                    <div className="relative">
                        <div className="absolute w-full h-full ">
                            <div className="flex p-8 justify-between font-semibold text-4xl">
                                <span>Main</span>
                                <span>&#8594;</span>
                            </div>
                        </div>
                        <img src={image_2} alt="" />
                    </div>
                    <div className="relative">
                        <div className="absolute w-full h-full ">
                            <div className="flex p-8 justify-between font-semibold text-4xl">
                                <span>Soups</span>
                                <span>&#8594;</span>
                            </div>
                        </div>
                        <img src={image_3} alt="" />
                    </div>
                </div>
            </div>
        </SectionLayout>
    )
}