import styles from "@/app/home-page/homepage.module.css";
import Image from 'next/image';

export default function ThirdContainer() {
    return (
        <>
            <div className={styles.container10}>
                <h3>Best Properties Available</h3>
                <span>Each property is different and we are ready to help you get a <br /> apartment according to your taste</span>
            </div>

            <div className={styles.flexDiv4}>
             <div class="card" className={styles.cardDiv} style={{width: "18rem"}}>
                 <Image src="/images/image 5.png" className="card-img-top" width={286} height={313} alt=""/>
                 <div class="card-body">
                 <h6 class="card-title" style={{fontWeight: "bold"}}>Sky apartment</h6>
                 <span class="card-text">A room self-con</span><br />
                 <span class="card-text" style={{paddingBottom: "30px"}}>Lagos, Nigeria</span><br />
                 <span class="card-text" style={{fontSize: "medium", fontWeight: "bold", marginRight: "18px"}}>200,000 / year</span>
                 <button href="#" class="btn btn-sm">See More</button>
                </div>
              </div>

              <div class="card" className={styles.cardDiv} style={{width: "18rem"}}>
                 <Image src="/images/image 4.png" className="card-img-top" width={286} height={313} alt=""/>
                 <div class="card-body">
                 <h6 class="card-title" style={{fontWeight: "bold"}}>Sky apartment</h6>
                 <span class="card-text">2 bedroom flat</span><br />
                 <span class="card-text" style={{paddingBottom: "30px"}}>Lagos, Nigeria</span><br />
                 <span class="card-text" style={{fontSize: "medium", fontWeight: "bold", marginRight: "18px"}}>700,000 / year</span>
                 <button href="#" class="btn btn-sm">See More</button>
                </div>
              </div>

              <div class="card" className={styles.cardDiv} style={{width: "18rem"}}>
                 <Image src="/images/image 6.png" className="card-img-top" width={286} height={313} alt=""/>
                 <div class="card-body">
                 <h6 class="card-title" style={{fontWeight: "bold"}}>Ocean bay Estate</h6>
                 <span class="card-text">Duplex</span><br />
                 <span class="card-text" style={{paddingBottom: "30px"}}>Lagos, Nigeria</span><br />
                 <span class="card-text" style={{fontSize: "medium", fontWeight: "bold", marginRight: "18px"}}>3.5M / year</span>
                 <button href="#" class="btn btn-sm">See More</button>
                </div>

              </div>

            </div>

            <div className={styles.flexDiv5}>
                <div>
                    <h3 className={styles.h3color}>98+</h3>
                    <h3>Ready For Sale</h3>
                </div>

                <div>
                    <h3 className={styles.h3color}>100+</h3>
                    <h3>Ready For Rent</h3>
                </div>

                <div>
                    <h3 className={styles.h3color}>80+</h3>
                    <h3>Happy Customers</h3>
                </div>

                <div>
                    <h3 className={styles.h3color}>75+</h3>
                    <h3>House Owners</h3>
                </div>
            </div>
        </>
    );
}