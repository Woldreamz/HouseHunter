import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/app/global.css";
import Login from "@/components/register/login";
import Signup from "@/components/register/Signup";

export default function Register() {
  return (
    <>
      <Header />
      <Login />
      <Signup/>
      <Footer />
    </>
   
  );
}