import Banner from "./Banner";
import CallDetails from "./CallDetails";
import Category from "./Category";
import ChefRecommend from "./ChefRecommend";
import FeaturedItem from "./FeaturedItem";
import PopularMenu from "./PopularMenu";
import SubBanner from "./SubBanner";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <SubBanner />
            <PopularMenu />
            <CallDetails />
            <ChefRecommend />
            <FeaturedItem />
            <Testimonials />
        </div>
    );
};

export default Home;