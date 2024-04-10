import styles from "@/components/CreateAccount/user.module.css";
import Input from "../Input";
import Link from "next/link";
import Image from 'next/image';

export default function CreateUser() {
    return (
        <div className={styles.createDiv}>
          <div className={styles.createUser1}>
            
          </div>

          <div className={styles.formDiv}>
            <Image src="/images/house hunter logo icon.png" alt="house hunter icon" height={50} width={50} className={styles.loginImg}/>         
            <h2 className={styles.heading}>Create Account</h2>

            <form>
              <label htmlFor="full-name" class="form-label">Full name</label>
              <input type="text" class="form-control" style={{marginBottom: "9px"}} id="full-name" placeholder="Surname first" />

              <label htmlFor="phone-no" class="form-label">Phone no.</label>
              <input type="text" class="form-control" style={{marginBottom: "9px"}} id="phone-no" placeholder="+234" />

              <label htmlFor="Email" class="form-label">Email</label>
              <input type="email" class="form-control" style={{marginBottom: "9px"}} id="Email" placeholder="Enter your Email.." />

              <label htmlFor="Password" class="form-label">Password</label>
              <input type="password" class="form-control" style={{marginBottom: "9px"}} id="Password" placeholder="" />

              <input className={styles.inputChecked} type="checkbox"/><span>Remember me</span><br />
              <button type="submit" className={styles.btn8}>Sign Up</button>
            </form>

            <div style={{textAlign: "center", marginTop: "20px"}}>
              <span>or</span><br />
              <span>Already have an Account <Link  href="/login">Login</Link></span>

            </div>

          </div>
            
        </div>
    );
}