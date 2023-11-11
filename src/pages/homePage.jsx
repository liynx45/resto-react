import ResevacitionForm from "../components/fragments/form/reservaction";
import MainSection from "../components/home";
import Category from "../components/home/category";
import Chef from "../components/home/chef";
import Features from "../components/home/features";
import OurMenu from "../components/home/ourMenu";
import Testimonials from "../components/home/testimonials";


export default function HomePage() {
    return (
        <>
        <MainSection />
        <OurMenu />
        <Chef/>
        <Features/>
        <Category />
        <Testimonials />
        <ResevacitionForm />
        </>
    )
}