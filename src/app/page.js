import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/app/global.css";
import Loginpage from "@/components/CreateAccount/LoginPage";
import CreateUser from "@/components/CreateAccount/CreateAccount";


export default function Home() {
  return (
    <>
      <Header />
      <CreateUser />
      <Footer />
    </>
   
  );
}
