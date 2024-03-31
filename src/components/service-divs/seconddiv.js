import styles from "@/components/service-divs/service.module.css";


export default function Seconddiv(params) {
    return(
        <div className={styles.middleDiv}>
            <h2>Other Services</h2>
            <p>Need some changes in your house?<br/> get in touch with the best Tradesman, Interior decorators, and Home cleaners</p>

            <div className={styles.flexContainer2}>
                <div>
                    <img src="images/Blue Bird.png" alt="picture of two tradesmen"/>
                    <p>Connect to the most experienced <br /> tradesman in your area</p>
                    <button className={styles.btn4}>Read more</button>
                </div>

                <div>
                    <img src="images/RF-studio.png" alt="picture of and interior decorator"/>
                    <p>Connect to the best interior <br /> decorator in your area</p>
                    <button className={styles.btn4}>Read more</button>
                </div>

                <div className={styles.thirdDiv}>
                    <img src="images/Tima-Miroshnichenko.png" alt="picture of a cleaner"/>
                    <p>Connect to the best home <br /> cleaners in your area</p>
                    <button className={styles.btn4}>Read more</button>
                </div>

            </div>

        </div>
    );
}