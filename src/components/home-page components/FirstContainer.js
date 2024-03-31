import styles from "@/app/home-page/homepage.module.css";

export default function Firstcontainer() {
    return (
        <>
            <div className={styles.topDiv}>
                <h1 className={styles.heading1}>Find the Perfect Property <br /> For You</h1>
                <p className={styles.para1}>Save yourself the stress and time of hustling for properties available  for rentals and sale in your <br/> preferred location.</p>
                <button style={{borderRadius: "4px"}}>Explore More</button>
            </div>

            <div className={styles.dropdownMenu}>
             <div className="dropdown">
                <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-location-dot fa-1x"></i> Locations
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>

              <div className="dropdown">
               <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                 <i class="fa-regular fa-house fa-1x"></i>Property
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
               </div>

               <div className="dropdown">
               <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                 {/* <i class="fa-solid fa-money-bill fa-1x"></i>   */} Price Range
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </div>

                <button type="button" class="btn btn-secondary btn-lg search1">Search <i class="fa-solid fa-magnifying-glass fa-1x"></i></button> 

            </div>

        </>
    );
}