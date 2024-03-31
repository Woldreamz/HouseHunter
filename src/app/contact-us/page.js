import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/app/global.css";
import styles from "@/app/contact-us/contact.module.css"


export default function ContactUs() {
    return (
        <>
         <Header />

         <div className={styles.firstDiv}>
            <h3>Frequently Asked Questions</h3>
            <ul>
                <li>Do you offer virtual tours for listed properties?</li>
                <li>Do you offer virtual tours for listed properties?</li>
                <li>Do you offer virtual tours for listed properties?</li>
                <li>Do you offer virtual tours for listed properties?</li>
            </ul>
         </div>

         <div className={styles.secondDiv}>
            <h3>Contact Us</h3>
            <p>Any feedback or suggestion? we’ll like to hear from you, <br /> send us a message using the form below</p>
            <form>
            
              <input type="text" className={styles.inputDiv4} placeholder="Name" /><br />
              <input type="email" className={styles.inputDiv4}  placeholder="E-mail" /><br />
              <input type="text" className={styles.inputDiv4}  placeholder="Phone number" /><br />
              <textarea className={styles.inputDiv4} placeholder="Describe your issue"></textarea><br />
              <button type="submit" className={styles.button5}>send</button>
            
            </form>

         </div>

         <div className={styles.thirdDiv}>
           <h1>We are committed to helping <br /> you find your desired <br /> home.</h1>

         </div>

         <Footer />
        </>
    );
}