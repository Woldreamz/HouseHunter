import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Form from "@/components/property-form/Propertyform";
import styles from "@/app/add-property/property.module.css";
import "@/app/global.css";


export default function Addproperty() {
    return (
        <>
          <Header />
          
          <Form />

          <div className={styles.container2}>
            <h1>Landlords grow rich in their <br /> sleep without working, risking <br /> or economising.</h1>
          </div>
         
          <Footer />
        </>
    );
}