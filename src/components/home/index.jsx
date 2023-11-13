import SectionLayout from "../../layouts/sectionlayout";
import HeadTittle from "../fragments/tittle/headTitle";
import SubTittle from "../fragments/tittle/subtTittle";

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
                        <img src="/assets/home/mainpage/background.png" className="w-1/2 z-0" alt="" />
                        <div className="flex gap-2 md:gap-6 absolute bottom-0 -translate-x-1/2">
                            <img src="/assets/home/mainpage/spices1.png" className="w-[70px] h -[70px] md:w-[200px] md:h-[200px]" alt="" />
                            <img src="/assets/home/mainpage/spices2.png" className="w-[70px] h -[70px] md:w-[200px] md:h-[200px]" alt="" />
                            <img src="/assets/home/mainpage/spices3.png" className="w-[70px] h -[70px] md:w-[200px] md:h-[200px]" alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between gap-8 md:gap-0">
                    <div className="flex flex-col gap-8 w-1/2">
                        <img src="/assets/home/product_2.png" className="w-fit" />
                        <SubTittle>
                            Start to plan <br /> your diet today
                        </SubTittle>
                        <span className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque et voluptate voluptas non officiis.</span>
                    </div>
                    <div className="flex flex-col w-1/2 md:w-[25%] gap-28">
                        <span className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque et voluptate voluptas non officiis.</span>
                        <img src="/assets/home/product_1.png" className="w-fit" />
                    </div>
                </div>
            </SectionLayout>
        </div>
    )
}