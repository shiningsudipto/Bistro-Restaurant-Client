import Banner from "./Banner";
import CallDetails from "./CallDetails";
import Category from "./Category";
import ChefRecommend from "./ChefRecommend";
import FeaturedItem from "./FeaturedItem";
import PopularMenu from "./PopularMenu";
import SubBanner from "./SubBanner";

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
        </div>
    );
};

export default Home;