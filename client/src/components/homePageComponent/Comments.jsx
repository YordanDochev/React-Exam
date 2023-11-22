import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Home.module.css';
import ComentItem from './ComentItem';

const CommentsCarousel = () => {
    const testimonials = [
        {
            id: 1,
            firstName: 'Yordan',
            lastName: 'Dochev',
            text:
                'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos',
            clientName: 'Client Name 1',
            profession: 'Profession 1',
            imageUrl: 'src/assets/img/testimonial-1.jpg',
        },
        {
            id: 2,
            firstName: 'Yordan',
            lastName: 'Dochev',
            text:
                'Tempor stet labore dolor ',
            clientName: 'Client Name 2',
            profession: 'Profession 2',
            imageUrl: 'src/assets/img/testimonial-2.jpg',
        },
        {
            id: 3,
            firstName: 'Yordan',
            lastName: 'Dochev',
            text:
                'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos',
            clientName: 'Client Name 3',
            profession: 'Profession 3',
            imageUrl: 'src/assets/img/testimonial-3.jpg',
        },
        // Add more testimonials as needed
    ];

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div
                    className={`text-center mx-auto mb-5 wow fadeInUp ${styles.divComment}`}
                    data-wow-delay="0.1s"
                    
                >
                    <h1 className="mb-3">Our Clients Say!</h1>
                    <p>
                        Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
                        lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
                        dolor duo.
                    </p>
                </div>
                <div className={`testimonial-carousel wow fadeInUp ${styles.userComentDiv}`} data-wow-delay="0.1s">
                    <Slider {...carouselSettings}>
                        {testimonials.map((testimonial) => (
                            <ComentItem key={testimonial.id} {...testimonial}/>
                        ))}
                    </Slider>
                </div>

            </div>
        </div>



    );
};

export default CommentsCarousel;
