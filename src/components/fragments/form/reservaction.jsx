import SectionLayout from "../../../layouts/sectionlayout";
import SubTittle from "../tittle/subtTittle";
import Input from "../../elements/input/input"
import Button from "../../elements/button/button";

export default function ResevacitionForm() {
    return (
        <SectionLayout background="bg-backgroundWhite">
            <form action="" className="flex flex-col gap-20 items-center justify-center">
                <SubTittle 
                    color="black"
                    textAlign="center"
                >
                    Make a Reservation
                </SubTittle>
                <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
                    <select name="" id="" className="px-6 py-2 border-2 md:w-[25%] border-black bg-transparent">
                        {[...Array(5)].map((op, i) => (
                            <option value={i + 1}>{i + 1} Person</option>
                        ))}
                    </select>
                    <Input type="time" />
                    <Input type="date" />
                </div>
                <Button width="object-fit">Submit</Button>
            </form>
        </SectionLayout>
    )
}