import Input from "@/components/Input";
import styles from "@/app/add-property/property.module.css";

export default function Thirdform() {
    return (
        <div className={styles.form1}>
            <div>
              <label htmlFor="meansofid">Means of identification</label>
              <Input type="text" id="meansofid" className="property-input" name="meansofidentification" placeholder="Valid identification card" />
              <input class="form-control" style={{width: "20%"}} type="file" name="id"/>
            </div>

            <div>
              <label htmlFor="CofO">Certificate of ownership</label>
              <Input type="text" id="CofO" className="property-input" name="certificateofownership"  placeholder="C of O" />
              <input class="form-control" style={{width: "20%"}} type="file" name="certificate"/>
            </div>

            <div>
             <label htmlFor="land-use">Land use charge</label>
             <Input type="text" id="land-use" className="property-input" name="land-use"  placeholder="Land use charge" />
             <input class="form-control" style={{width: "20%"}} type="file" name="land-docs" />
            </div>

            <div>
             <label htmlFor="otherdocs">Other utility receipts</label>
             <Input type="text" id="otherdocs" className="property-input" name="otherdocs" />
             <input class="form-control" style={{width: "20%"}} type="file" name="docs"/>
            </div>

        </div>
    );
}