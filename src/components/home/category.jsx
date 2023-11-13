import SectionLayout from "../../layouts/sectionlayout";
import SubTittle from "../fragments/tittle/subtTittle";
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
                <div className="md:grid flex flex-col grid-cols-3 w-full gap-12 pt-16">
                    <CatgeoryCard src={"/assets/home/category/img1.png"}>
                        <CatgeoryCard.Head>
                            Starter
                        </CatgeoryCard.Head>
                        <CatgeoryCard.Info>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores inventore voluptatem laudantium perferendis praesentium eum iure quasi molestias!
                        </CatgeoryCard.Info>
                    </CatgeoryCard>
                    <CatgeoryCard src={"/assets/home/category/img2.png"}>
                        <CatgeoryCard.Head>
                            Mains
                        </CatgeoryCard.Head>
                        <CatgeoryCard.Info>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores inventore voluptatem laudantium perferendis praesentium eum iure quasi molestias!
                        </CatgeoryCard.Info>
                    </CatgeoryCard>
                    <CatgeoryCard src={"/assets/home/category/img3.png"}>
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