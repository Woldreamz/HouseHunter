import Input from "../Input";
import styles from "./register.module.css"

export default function Signup() {
    return(
        <div class={styles.signupBottom}>
           <h2 style={{textAlign: "center", paddingBottom: "15px"}}>Let's get started</h2>
        
           <form action="" method="post">
              <label class="form-label" htmlFor="fname">First name</label>
              <Input type="text" id="fname" name="fname" placeholder="Your first name" />

              <label class="form-label" htmlFor="lname">Last name</label>
              <Input type="text" id="lname" name="lname" placeholder="Your Last name" /><br/>

              <label class="form-label" htmlFor="country">Country</label><br/>
              <Input type="text" id="country" name="country" /><br/>

              <label class="form-label" htmlFor="email">Email</label><br/>
              <Input type="email" id="email" name="email" placeholder="Your email address" /><br/>

               <label class="form-label" htmlFor="phoneno">Phone number</label><br/>
               <Input type="number" id="phoneno" name="phoneno" /><br/>

               <label class="form-label" htmlFor="password">Password</label><br/>
               <Input type="password" id="password" name="password" placeholder="Password(min. of 8 characters)" /><br/>

               <label class="form-label" htmlFor="confirmpassword">Confirm password</label><br/>
               <Input type="password" id="confirmpassword" name="confirmpassword" placeholder="Password(min. of 8 characters)" /><br/>

               <Input type="checkbox" name=""/><span class="reg-span">I have read, understood and I agree to househunter Privacy Policy,
               and  Terms and Condition.</span><br/>
              <Input type="checkbox" name=""/><span>Join our business community for exclusive access.</span><br/><br/>

              <div style={{textAlign: "center"}}><button className={styles.btn1} type="submit">Sign up</button></div>
            
            </form>

        </div>
        
    );
}