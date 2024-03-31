import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Topdiv from "@/components/service-divs/topdiv";
import "@/app/global.css";
import Seconddiv from "@/components/service-divs/seconddiv";
import Gallery from "@/components/service-divs/gallery";


export default function Services() {
    return(
        <>
            <Header />
            <Topdiv />
            <Seconddiv />
            <Gallery />
            <Footer />
        </>
    );
}