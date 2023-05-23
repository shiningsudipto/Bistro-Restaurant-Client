import Banner from "./Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu";
import SubBanner from "./SubBanner";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <SubBanner />
            <PopularMenu />
        </div>
    );
};

export default Home;