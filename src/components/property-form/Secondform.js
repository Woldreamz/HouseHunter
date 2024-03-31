import Input from "@/components/Input";
import styles from "@/app/add-property/property.module.css";

export default function Secondform() {
    return (
        <div className={styles.form1}>
          <div className={styles.fullWidth}>
            <label htmlFor="property-address">Property address</label>
            <Input type="text" id="property-address" className="property-input" name="property-address" />
          </div>
         
          <div>
           <label htmlFor="property-type">Property type</label>
           <Input type="text" id="property-type" className="property-input" name="property-type" />
          </div>
                  
          <div>
           <label htmlFor="property-status">Property status</label>
           <Input type="text" id="property-status" className="property-input" name="property-status" />
          </div>
          
          <div>
            <label htmlFor="property-price">Property price</label>
            <Input type="number" id="property-price" className="property-input" name="property-price" />
          </div>
        
         <div>
            <label htmlFor="property-listing">Property listing</label>
            <Input type="text" id="property-listing" className="property-input" name="property-listing" />
         </div>
 
         <div>
            <label htmlFor="no-rooms">No. of rooms</label>
            <Input type="number" id="no-rooms" className="property-input" name="no-rooms" />
         </div>

         <div>
            <label htmlFor="no-baths">No. of bathrooms</label>
            <Input type="number" id="no-baths" className="property-input" name="no-baths" />
         </div>

        </div>
    );
}