import { Link } from "react-router-dom";

import styles from './Home.module.css'


export default function HeaderHome(){

    return(
        <div className="container-fluid header bg-white p-0">
          <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-6 p-5 mt-lg-5">
              <h1 className="display-5 animated fadeIn mb-4">
                Find A <span className="text-primary">Perfect Home</span> To Live With
                Your Family
              </h1>
              <p className="animated fadeIn mb-4 pb-2">
                Vero elitr justo clita lorem. Ipsum dolor at sed stetsit diam no. Kasd
                rebum ipsum et diam justo clita et kasd rebum sea elitr.
              </p>
              <Link
                to={'/register'}
                className="btn btn-primary py-3 px-5 me-3 animated fadeIn"
              >
                Get Started
              </Link>
            </div>
            <div className="col-md-6 animated fadeIn">
            <img className= "img-fluid" src="src/assets/img/about.jpg"/>
            </div>
          </div>
          <div className={`${styles.assestDiv} container-fluid bg-primary mb-5 wow fadeIn`} data-wow-delay="0.1s" >
                <div className="container">
                    <div className={`col-lg-3 col-sm-6 wow fadeInUp ${styles.ourAssestHeaderDiv}`} data-wow-delay="0.1s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4" style={{padding:'2px'}}>
                                <div className="icon mb-3" >
                                    <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlLv5-pwJD2K69KrC8DggmFMmtwXiPRRu6KTHY2MbOdv1gZiT6jmsklxhOgao&s" style={{width:'45px',height:'45px',}} alt="Icon" />
                                </div>
                                <h6>Garage</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                    </div>
                    <div className={`col-lg-3 col-sm-6 wow fadeInUp ${styles.ourAssestHeaderDiv}`} data-wow-delay="0.3s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4" style={{padding:'2px'}}>
                                <div className="icon mb-3" >
                                    <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJ1Yve6AEFmdp0Q-FVyBQ9BDio4zHvpFYAsIf2P1yf7p07XQpz_2pmoRTkw&s" style={{width:'45px',height:'45px',}} alt="Icon" />
                                </div>
                                <h6>Office</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                    </div>
                    <div className={`col-lg-3 col-sm-6 wow fadeInUp ${styles.ourAssestHeaderDiv}`}  data-wow-delay="0.5s">
                        <a className="cat-item d-block bg-light text-center rounded p-3"  href="">
                            <div className="rounded p-4" style={{padding:'2px'}}>
                                <div className="icon mb-3" >
                                    <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR20vlZZPvhq6nkIEhwnD_6OngJ2qps3mrgeznH7BV0F5vovKTn-U9m2UlZLRQ&s" style={{width:'45px',height:'45px',}} alt="Icon" />
                                </div>
                                <h6>Appartments</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                    </div>
                    

                    <div className={`col-lg-3 col-sm-6 wow fadeInUp ${styles.ourAssestHeaderDiv}`} data-wow-delay="0.7s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4" style={{padding:'2px'}}>
                                <div className="icon mb-3" >
                                    <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFLwsZJj3V8QOTbGCq0sn5r5IIbKrO994JwzSTtG_DYSWsxYVKS4OmrTTDN4&s" style={{width:'45px',height:'45px',}} alt="Icon" />
                                </div>
                                <h6>Villas</h6>
                                <span>123 Properties</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}