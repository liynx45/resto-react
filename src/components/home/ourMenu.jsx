import SectionLayout from "../../layouts/sectionlayout";
import MenuSection from "../fragments/cards/menuCard";
import SubTittle from "../fragments/tittle/subtTittle";


export default function OurMenu() {
    return (
        <div className="bg-white">
            <SectionLayout>
                <div className="w-full flex flex-col">
                    <SubTittle color="black">
                        Our Menu
                    </SubTittle>
                    <span className="mb-16">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea enim <br /> debitis iste atque voluptas.</span>
                    <div className="flex flex-col md:grid grid-cols-2 gap-8 justify-between">
                        <MenuSection>
                            <MenuSection.Header>
                                Deep Sea Snow White Cofd Fillet
                            </MenuSection.Header>
                            <MenuSection.Descrip>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem!
                            </MenuSection.Descrip>
                        </MenuSection>
                        <MenuSection>
                            <MenuSection.Header>
                                Deep Sea Snow White Cofd Fillet
                            </MenuSection.Header>
                            <MenuSection.Descrip>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem!
                            </MenuSection.Descrip>
                        </MenuSection>
                        <MenuSection>
                            <MenuSection.Header>
                                Deep Sea Snow White Cofd Fillet
                            </MenuSection.Header>
                            <MenuSection.Descrip>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem!
                            </MenuSection.Descrip>
                        </MenuSection>
                        <MenuSection>
                            <MenuSection.Header>
                                Deep Sea Snow White Cofd Fillet
                            </MenuSection.Header>
                            <MenuSection.Descrip>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem!
                            </MenuSection.Descrip>
                        </MenuSection>
                    </div>
                </div>
            </SectionLayout>
        </div>
    )
}