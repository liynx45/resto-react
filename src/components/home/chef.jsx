import chef from "../../assets/home/chef/chef.png"
import SectionLayout from "../../layouts/sectionlayout";
import SubTittle from "../fragments/tittle/subtTittle";




export default function Chef(){
    return(
        <SectionLayout background="bg-backgroundWhite">
            <div className="container flex gap-8">
                <img src={chef} className="w-1/2"/>
                <div className="flex flex-col pt-12">
                    <SubTittle color="black">
                    Excellent <br/>Cook
                    </SubTittle>
                    <span className="max-w-md text-[14px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aperiam nobis perspiciatis velit earum, quidem dicta ipsa quo molestiae, sapiente similique placeat explicabo optio illum, nihil fuga perferendis?</span>
                </div>
            </div>
        </SectionLayout>
    )
}