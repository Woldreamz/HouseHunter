import "@/app/global.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Firstcontainer from "@/components/home-page components/FirstContainer";
import FourthContainer from "@/components/home-page components/FourthContainer";
import SecondContainer from "@/components/home-page components/SecondContainer";
import ThirdContainer from "@/components/home-page components/ThirdContainer";

export default function Homepage() {
    return (
        <>
            <Header />

            <Firstcontainer />

            <SecondContainer />

            <ThirdContainer />

            <FourthContainer />
            
            <Footer />
        </>
    );
}