import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "@/app/about/about.module.css";
import "@/app/global.css";
import Image from 'next/image';

export default function AboutPage() {
    return(
        <>
         <Header />
         
         <div class="aboutcontainer"> 
            <img className="img-1" src="images/handshake.png" alt=""/> 
           <div class="flex-div">
              <h2> <span className={styles.dash}>&ndash;</span> About Us <span className={styles.dash}>&ndash;</span></h2>
              <p>Welcome to House hunter, where innovation meets simplicity in the realm of house hunting. Founded with the vision of transforming the traditional approach to apartment search, we believe in putting the power back into the hands of the users. Our platform is designed to liberate you from agent fees and the burdensome complexities of finding a home. At House hunter we are a team of dedicated professionals committed to enhancing your experience, ensuring that your search for the perfect apartment is not just efficient, but a joyous journey. Join us in reshaping the way you discover and secure your ideal living space.</p>
           </div>
            
          </div>

          <div class="aboutcontainer">
            <div class="flex-div">
              <h2> <span className={styles.dash}>&ndash;</span> Our Mission <span className={styles.dash}>&ndash;</span></h2> 
              <p>At House hunter, our mission is to empower individuals in their quest for the perfect home by providing a seamless online platform that eliminates the need for agents, fees, and unnecessary stress. We are dedicated to revolutionizing the house hunting experience, making it not only efficient but also enjoyable. Our commitment is to offer a user-centric solution that simplifies the journey of finding an apartment, ensuring affordability, and providing a stress-free path to your dream home.</p>
            </div>

            <img className="img-1" src="images/handsup.png" alt=""/>
        
          </div>

          <div class={styles.container3}>
            <h2 style={{color: "#054A91"}}>Meet Our Team Members</h2>
            <p>Meet the best team that works uniquely and shares the same goal</p>

            <div className={styles.teamInfo}>
              <div className={styles.info}>
                <Image src="/images/unsplash13.png" alt="picture of Merit" height={200} width={200}/>
                <p className={styles.p1}>Merit</p>
                <p className={styles.p2}>Product Manager</p>
              </div>

              <div className={styles.info}>
                <Image src="/images/unsplash12.png" alt="picture of Rainer" height={200} width={200}/>
                <p className={styles.p1}>Rainer</p>
                <p className={styles.p2}>Web Design</p>
              </div>

              <div className={styles.info}>
                <Image src="/images/unsplash10.png" alt="picture of Omah" height={200} width={200}/>
                <p className={styles.p1}>Omah</p>
                <p className={styles.p2}>Product Manager</p>
              </div>

              <div className={styles.info}>
                <Image src="/images/unsplash11.png" alt="picture of Abiola" height={200} width={200}/>
                <p className={styles.p1}>Abiola</p>
                <p className={styles.p2}>Product Manager</p>
              </div>
            </div>           
          </div>

          <div class={styles.container4}>
            <span>Join our community</span>
            <h3>Subscribe to our Newsletter.</h3>
            <p>Get regular updates on the new trends in the community.</p>
            <input class={styles.input2} type="email" name="email" placeholder="Enter your email"/>
            <button class={styles.btn3} type="submit">Get Started</button>
          </div>

          <Footer/>
        </>
    );
}