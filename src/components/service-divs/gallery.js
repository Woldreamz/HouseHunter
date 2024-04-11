import styles from "@/components/service-divs/service.module.css";
import Image from 'next/image';

export default function Gallery() {
    return(
        <div className={styles.gallery}>
            <h2>Our Gallery</h2>
            <p>View some of our favourite houses</p>

            <div className={styles.flexContainer}>
              <div>
                <Image src="/images/unsplash8.png" width={383} height={222} alt="living room picture"/>
                <button type="button" className="btn btn-sm btn-5">FOR RENT</button>
              </div>

              <div>
                <Image src="/images/unsplash7.png" width={383} height={222} alt="picture of a living room"/>
                <button type="button" className="btn btn-sm btn-5">FOR SALE</button>
              </div>

              <div>
                <Image src="/images/unsplash6.png" width={383} height={222} alt="picture of a house and pool"/>
                <button type="button" className="btn btn-sm btn-5">FOR RENT</button>
              </div>
            
            </div>
        </div>
    );
}