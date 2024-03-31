import Input from "@/components/Input";
import styles from "@/app/add-property/property.module.css";

export default function Firstform() {
    return (
        <div className={styles.form1}>
          <div>
            <label htmlFor="Fname">First name</label>
            <Input type="text" id="fname" className="property-input" name="Fname" placeholder="Your first name" />
          </div>
         
          <div>
           <label htmlFor="Lname">Last name</label>
           <Input type="text" id="lname" className="property-input" name="Lname" placeholder="Your Last name" />
          </div>
                  
          <div>
           <label htmlFor="email">Email</label>
           <Input type="email" id="email" className="property-input" name="email" placeholder="Your email address" />
          </div>
          
          <div>
            <label htmlFor="phoneno">Phone number</label>
            <Input type="number" id="phoneno" className="property-input" name="phoneno" />
          </div>
        
         <div className={styles.fullWidth}>
            <label htmlFor="home">Home address</label>
            <Input type="text" id="home" className="property-input" name="home" />
         </div>
 
         <div className={styles.fullWidth}>
            <label htmlFor="work">Work address</label>
            <Input type="text" id="work" className="property-input" name="work" />
         </div>

        </div>
    );
    
}