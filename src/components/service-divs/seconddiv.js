import styles from "@/components/service-divs/service.module.css";
import Image from 'next/image';


export default function Seconddiv(params) {
    return(
        <div className={styles.middleDiv}>
            <h2>Other Services</h2>
            <p>Need some changes in your house?<br/> get in touch with the best Tradesman, Interior decorators, and Home cleaners</p>

            <div className={styles.flexContainer2}>
                <div>
                    <Image src="/images/Blue Bird.png" width={260} height={400} alt="picture of two tradesmen"/>
                    <p>Connect to the most experienced <br /> tradesman in your area</p>
                    <button className={styles.btn4}>Read more</button>
                </div>

                <div>
                    <Image src="/images/RF-studio.png" width={260} height={400} alt="picture of and interior decorator"/>
                    <p>Connect to the best interior <br /> decorator in your area</p>
                    <button className={styles.btn4}>Read more</button>
                </div>

                <div className={styles.thirdDiv}>
                    <Image src="/images/Tima-Miroshnichenko.png" width={260} height={400} alt="picture of a cleaner"/>
                    <p>Connect to the best home <br /> cleaners in your area</p>
                    <button className={styles.btn4}>Read more</button>
                </div>

            </div>

        </div>
    );
}