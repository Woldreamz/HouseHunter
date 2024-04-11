import styles from "@/app/home-page/homepage.module.css";
import Image from 'next/image';

export default function FourthContainer() {
    return (
        <>
            <div className={styles.flexDiv3}>

                <div className={styles.flex3Item2}>
                    <h3 style={{fontSize: "1.7rem"}}>Why Work With Us as House Owner?</h3>
                    <p style={{fontSize: "15px"}}>Choosing House hunter for your home search journey means opting for a distinctive and unparalleled experience. We stand out as your preferred house hunting partner for several reasons. Our commitment to transparency, a user-friendly interface, and eliminating agent fees sets us apart. With cutting-edge technology, personalized assistance, and a dedicated team, we ensure that your home search is not just a process but a seamless and enjoyable venture. </p>
                </div>

                <div className={styles.flex3Item1}><Image src="/images/unsplash2.png" alt="" width={316} height={281} className={styles.imgDiv} /></div>
            </div>

            <div className={styles.carousel}>
               <div id="carouselIndicators" className="carousel carousel-dark slide">
                   <h4 style={{color: "#4983C2", fontWeight: "bold"}}>Testimonials</h4>
                   <h2 style={{paddingTop: "13px", paddingBottom: "30px"}}>Reviews From Our Happy Clients</h2>

                  <div class="carousel-indicators">
                     <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                     <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                     <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>

                  <div class="carousel-inner">
                     {/* First Slide */}
                     <div class="carousel-item active">
                          <div className={styles.carouselItem}>
                          <div class="card" style={{width: "14rem"}}>
                              <div class="card-body">
                                 <Image src="/images/Ellipse 1.png" alt="" height= {59} width={56}/>
                                 <h5 class="card-title title">Caleb Brown</h5><br />
                                 <h6 class="card-subtitle title mb-2 text-body-secondary">Photographer</h6><br />
                                 <span class="card-text">I am so glad that I stumbled across  Househunter websute. I can’t say enough about how professional and stressful it was looking for an apartment through them. </span>
                              </div>
                          </div>

                          <div class="card" style={{width: "14rem"}}>
                                <div class="card-body">
                                <Image src="/images/Ellipse 2.png" alt="" height={59} width={56}/>
                                  <h5 class="card-title title">Dr. Michell</h5><br />
                                  <h6 class="card-subtitle title mb-2 text-body-secondary">Doctor</h6><br />
                                  <span class="card-text">Getting my new apartment was really easy. My kids and wife really love the area and it is closer to my place of work.</span>
                                </div>
                               
                          </div>

                          <div class="card card3" style={{width: "14rem"}}>
                              <div class="card-body">
                                 <Image src="/images/Ellipse 3.png" alt="" height={59} width={56}/>
                                 <h5 class="card-title title">Esther</h5><br />
                                 <h6 class="card-subtitle title mb-2 text-body-secondary">Influencer</h6><br />
                                 <span class="card-text">As a remote worker, my goal has always been to get an apartment with a stable light and serene environment. All thanks to househunter i was able to get what i want.</span>
                              </div>
                          </div>
                          </div>
                          
                     </div>

                     {/* Second Slide */}
                     <div class="carousel-item">
                           <div className={styles.carouselItem}>
                              <div class="card" style={{width: "14rem"}}>
                                  <div class="card-body">
                                     <h5 class="card-title">Card title</h5>
                                     <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                     <span class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</span>
                                  </div>
                              </div>
                           </div>

                     </div>

                      {/* Third Slide */}
                      <div class="carousel-item">
                            <div className={styles.carouselItem}>
                                <div class="card" style={{width: "14rem"}}>
                                   <div class="card-body">
                                       <h5 class="card-title">Card title</h5>
                                       <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                       <span class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</span>
                                   </div>
                               </div>

                            </div>

                     </div>

                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>

                    <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>

                </div>

            </div>
        </>
    );
}