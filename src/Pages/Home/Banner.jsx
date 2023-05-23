import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../assets/home/Banner/01.jpg'
import img2 from '../../assets/home/Banner/02.jpg'
import img3 from '../../assets/home/Banner/03.png'
import img4 from '../../assets/home/Banner/04.jpg'
import img5 from '../../assets/home/Banner/05.png'
import img6 from '../../assets/home/Banner/06.png'

const Banner = () => {
    return (
        <div>
            <Carousel centerSlidePercentage={true} centerMode={true}>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img5} />
                </div>
                <div>
                    <img src={img6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;