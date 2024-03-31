import Input from "../Input";
import styles from "./register.module.css"

export default function Login() {
    return(
        <div class={styles.loginTop}>
         <h2>Log in to your account</h2>
          <form action="" method="post">
            <label for="email">Email</label><br/>
           <Input 
              type="email" 
              id="email" 
              name="email"
           /> <br/>
           
           <label for="password">Password</label><br/>
           <Input type="password" 
               id="password" 
               name="password" 
               placeholder="Password(min. of 8 characters)"
           /><br/>
           <button className={styles.btn1} type="submit">Log in</button>
           </form>

           <p>forgot your password? Reset it here</p>
           <p>Having problems logging in? Chat with us</p>

        </div>
        
    );
}