import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover";
import coverImg from '../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>BISTRO | Our Menu</title>
            </Helmet>
            <Cover
                img={coverImg}
                title={'OUR MENU'}
                subTitle={'would you like to try a dish'}
            ></Cover>

        </div>
    );
};

export default Menu;