import SectionLayout from "../../layouts/sectionlayout";
import SubTittle from "../fragments/tittle/subtTittle";
import CatgeoryCard from "../fragments/cards/categoryCard";
import image_1 from "../../assets/home/category/image_1.png"
import image_2 from "../../assets/home/category/image_2.png"
import image_3 from "../../assets/home/category/image_3.png"

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
                    <CatgeoryCard src={image_1}>
                        <CatgeoryCard.Head>
                            Starter
                        </CatgeoryCard.Head>
                        <CatgeoryCard.Info>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores inventore voluptatem laudantium perferendis praesentium eum iure quasi molestias!
                        </CatgeoryCard.Info>
                    </CatgeoryCard>
                    <CatgeoryCard src={image_2}>
                        <CatgeoryCard.Head>
                            Mains
                        </CatgeoryCard.Head>
                        <CatgeoryCard.Info>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores inventore voluptatem laudantium perferendis praesentium eum iure quasi molestias!
                        </CatgeoryCard.Info>
                    </CatgeoryCard>
                    <CatgeoryCard src={image_3}>
                        <CatgeoryCard.Head>
                            Soups
                        </CatgeoryCard.Head>
                        <CatgeoryCard.Info>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores inventore voluptatem laudantium perferendis praesentium eum iure quasi molestias!
                        </CatgeoryCard.Info>
                    </CatgeoryCard>
                </div>
            </div>
        </SectionLayout>
    )
}