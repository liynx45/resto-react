import product_2 from "../../assets/home/product_2.png"
import product_1 from "../../assets/home/product_1.png"
import SectionLayout from "../../layouts/sectionlayout";
import HeadTittle from "../fragments/tittle/headTitle";
import SubTittle from "../fragments/tittle/subtTittle";

import spices1 from "../../assets/home/mainpage/spices1.png"
import spices2 from "../../assets/home/mainpage/spices2.png"
import spices3 from "../../assets/home/mainpage/spices3.png"


export default function MainSection() {
    return (
        <div className="w-full bg-primaryColor">
            <SectionLayout>
                <div className="flex flex-col gap-6 pb-24 relative w-full overflow-hidden">
                    <div className="absolute z-[22]">
                        <HeadTittle color="white">
                            Healthy Eating <br />is Important <br /> Parts of LifeStyle
                        </HeadTittle>
                        <span className=" text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptate beatae <br /> molestias ab impedit commodi repellat eum non</span>
                    </div>
                    <div className="relative pt-36 translate-x-[50%]">
                        <img src="" className="w-1/2 z-0" alt="" />
                        <div className="flex gap-6 absolute bottom-0 -translate-x-1/2">
                            <img src={spices1} className="w-[200px] h-[200px]" alt="" />
                            <img src={spices2} className="w-[200px] h-[200px]" alt="" />
                            <img src={spices3} className="w-[200px] h-[200px]" alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between ">
                    <div className="flex flex-col gap-8 w-1/2">
                        <img src={product_2} className="w-fit" />
                        <SubTittle>
                            Start to plan <br /> your diet today
                        </SubTittle>
                        <span className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque et voluptate voluptas non officiis.</span>
                    </div>
                    <div className="flex flex-col w-[25%] gap-28">
                        <span className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque et voluptate voluptas non officiis.</span>
                        <img src={product_1} className="w-fit" />
                    </div>
                </div>
            </SectionLayout>
        </div>
    )
}