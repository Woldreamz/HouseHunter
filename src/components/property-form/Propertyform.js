import Input from "@/components/Input";
import styles from "@/app/add-property/property.module.css";
import Firstform from "./Firstform";
import Secondform from "./Secondform";
import Thirdform from "./Thirdform";

export default function Form() {
    return (

        <div class={styles.addProperty}>
        <form action="" method="post">
          <p className={styles.header}>Basic information</p>
          <Firstform />

          <p className={styles.header}>Other information</p>
          <Secondform />

          <p className={styles.header}>Credentials</p>
          <Thirdform />

         <Input type="checkbox" name=""/><span class="reg-span">I have read, understood and I agree to househunter Privacy Policy,
           and  Terms and Condition.</span><br/>
         <div style={{textAlign: "center"}}>
           <button style={{marginTop: "8px", marginBottom: "13px"}} type="submit" className={styles.btn9} >Add property</button><br/>
           <button className={styles.btn9}>Return to HomePage</button>
         </div>
         
        </form>
      </div>
    );
}