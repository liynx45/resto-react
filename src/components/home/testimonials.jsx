import SectionLayout from "../../layouts/sectionlayout";
import avatar from "../../assets/home/testimonials/avatar.png"
import { useState } from "react";
import TestimoniCard from "../fragments/cards/testimoniCard";

export default function Testimonials() {
    const user = [
        {
            id: 1,
            name: "Jhon Dea",
            work: "Bloger",
            src: "avatar1.png",
            massage: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab non voluptates sapiente?"
        },
        {
            id: 2,
            name: "Jhon Sith",
            work: "Driver",
            src: "avatar2.png",
            massage: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempore modi illo officia nesciunt assumenda?"
        },
        {
            id: 3,
            name: "Walker",
            work: "Youtuber",
            src: "avatar3.png",
            massage: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestias tempora autem ipsa repellendus."
        }
    ]

    const [slide, setSlide] = useState(0)
    if (slide > user.length - 1) {
        setSlide(0)
    } else if (slide < 0) {
        setSlide(user.length - 1)
    }


    return (
        <SectionLayout>
            <div className="container p-8 px-32 flex flex-col gap-6">
                {
                    user.map((data, index) => {
                        if (index === slide) {
                            return (
                                <TestimoniCard.Header>
                                    {data.massage}
                                </TestimoniCard.Header>
                            )
                        } else {
                            return null
                        }
                    })
                }
                <div className="flex justify-between items-center gap-6">
                    {
                        user.map((data, index) => {
                            if (index === slide) {
                                return <TestimoniCard data={data} />
                            } else {
                                return null
                            }
                        })
                    }
                    <div className="flex gap-4 text-xl">
                        <span
                            className="cursor-pointer"
                            onClick={() => setSlide(cur => cur - 1)}>&larr;</span>
                        <span>{slide + 1 + "/" + user.length}</span>
                        <span
                            className="cursor-pointer"
                            onClick={() => setSlide(cur => cur + 1)}>&rarr;</span>
                    </div>
                </div>
            </div>
        </SectionLayout>
    )
}