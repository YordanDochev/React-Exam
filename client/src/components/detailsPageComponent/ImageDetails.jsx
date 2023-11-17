
import Carousel from 'react-bootstrap/Carousel';

import styles from './Details.module.css'
export default function ImageDetails() {
    return (
        <Carousel >
            <Carousel.Item>
                <img className={styles.imgCarousel} src="src/assets/img/carousel-1.jpg" alt="" />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className={styles.imgCarousel} src="src/assets/img/property-2.jpg" alt="" />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className={styles.imgCarousel} src="src/assets/img/property-3.jpg" alt="" />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}