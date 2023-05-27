// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
const Testimonials = () => {
    const [reviews, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center">
                {/* <SwiperSlide>Slide 1</SwiperSlide> */}

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center my-14">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <p className="text-2xl text-yellow-600">{review.name}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;