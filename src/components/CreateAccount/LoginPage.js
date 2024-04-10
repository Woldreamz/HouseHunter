import styles from "@/components/CreateAccount/user.module.css";
import Input from "../Input";
import Image from 'next/image';

export default function Loginpage() {
    return (
        <div className={styles.createDiv}>
          <div className={styles.loginDiv1}>
            <h1 className={styles.h1}>Find Your Perfect Place <br /> With Househunter</h1>
          </div>

          <div className={styles.formDiv}>
              <Image src="/images/house hunter logo icon.png" alt="house hunter icon" height={50} width={50} className={styles.loginImg}/>
             <h2 className={styles.heading}>Welcome to Househunter</h2>
             <p className={styles.para}>Welcome back! login with your data that you entered during registration.</p>

              <form>
                <label htmlFor="Email" class="form-label">Email</label>
                <input type="email" class="form-control" style={{marginBottom: "9px"}} id="Email" placeholder="Enter your Email.." />

                <label htmlFor="Password" class="form-label">Password</label>
                <input type="password" class="form-control" style={{marginBottom: "9px"}} id="Password" placeholder="" />

                <input className={styles.inputChecked} type="checkbox"/><span>Remember me</span><br />
                <button  type="submit" className={styles.btn8}>Login</button>
              </form>

          </div>

        </div>
    );
    
}