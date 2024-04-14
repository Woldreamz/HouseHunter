import styles from "@/components/footer.module.css";
import Link from "next/link";

// footer container
export default function Footer() {
    return (
        <footer class={styles.siteFooter}>
        <div class={styles.footerContainer}>
          <div class={styles.footerDiv}>
              <h5>Quick links</h5>
              <ul>
                  <li><a href="">find a property</a></li>
                  <li><a href="">Add property</a></li>
                  <li><a href="">Locations</a></li>
                  <li><a href="">About us</a></li>
              </ul>
          </div>
          <div class={styles.footerDiv}>
              <ul>
                  <li><a href="">Refer us</a></li>
                  <li><a href="">Register</a></li>
                  <li><a href="">Share</a></li>
                  <li><a href="">Privacy policy</a></li>
              </ul>
          </div>
          <div class={styles.footerDiv}>
              <ul>
                  <li><a href="">Book an appointment</a></li>
                  <li><a href="">Home page</a></li>
                  <li><a href="">Email</a></li>
              </ul>
          </div>
          <div class={styles.footerDiv}>
              <ul>
                  <li><a href="">Terms and condition</a></li>
                  <li><a href="">Community</a></li>
                  <li><a href="">Services</a></li>
                  <li><a href="">For you</a></li>
              </ul>
          </div>
          <div class={styles.footerDiv}>
              <Link href="search"><button type="button" class="btn btn-md  btn-light search">search</button></Link>
              <h5>Follow us</h5>
              <i class="fab fa-facebook fa-1x"></i>
              <i class="fab fa-google fa-1x"></i>
              <i class="fab fa-instagram fa-1x"></i>
          </div>
        </div>
          
      </footer>
    );
}