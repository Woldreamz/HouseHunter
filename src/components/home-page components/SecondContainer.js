import styles from "@/app/home-page/homepage.module.css";

export default function SecondContainer() {
    return (
        <>
            <div className={styles.flexDiv2}>
                <div className={styles.firstImage}>
                    <img src="images/bro.png" alt="" /><br />
                    <span style={{fontWeight: "bold"}}>By Pass Agent fees</span><br />
                    <span>No agent fee</span>
                </div>

                <div className={styles.secondImg}>
                    <img src="images/bro 2.png" alt="" /><br />
                    <span style={{fontWeight: "bold"}}>Book Inspection</span><br />
                    <span>Book insection time at your convenience for <br/> any apartment of your choice </span>
                </div>

                <div className={styles.thirdImg}>
                    <img src="images/bro 3.png" alt="" /><br />
                    <span style={{fontWeight: "bold"}}>Contact Property Owner/Landlord</span><br />
                    <span>Chat/call landlord with ease</span>
                </div>

            </div>

            <div className={styles.flexDiv3}>
                <div className={styles.flex3Item1}><img src="images/house4.png" alt="" className={styles.imgDiv} /></div>

                <div className={styles.flex3Item2}>
                    <h3 style={{fontSize: "1.7rem"}}>Find your dream home within your budget</h3>
                    <p style={{fontSize: "15px"}}>Our platform is tailored to seamlessly guide you through the process of discovering and securing your dream home, ensuring that every aspiration meets a budget-friendly reality. We believe that the perfect home should not be a distant dream, but an achievable reality for everyone. </p>
                    <button style={{borderRadius: "4px"}}>See More</button>
                </div>
            </div>
        </>
    );
}