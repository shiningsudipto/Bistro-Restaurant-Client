// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
const Testimonials = () => {
    const [reviews, setReview] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center">
                {/* <SwiperSlide>Slide 1</SwiperSlide> */}

                {
                    reviews.map(review => <SwiperSlide key={review._id}>

                        <p>{review.details}</p>
                        <p className="text-2xl text-yellow-600">{review.name}</p>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;