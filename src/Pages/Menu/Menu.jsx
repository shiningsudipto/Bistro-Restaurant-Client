import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover";
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "../Shared/MenuCategory";
import UnderLineBtn from "../../Components/UnderLineBtn";
import coverImg from '../../assets/menu/banner3.jpg'
import desserts from '../../assets/menu/dessert-bg.jpeg'
import pizza from '../../assets/menu/pizza-bg.jpg'
import salad from '../../assets/menu/salad-bg.jpg'
import soup from '../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu();
    const offeredItem = menu.filter(item => item.category == 'offered');
    const dessertItem = menu.filter(item => item.category == 'dessert');
    const pizzaItem = menu.filter(item => item.category == 'pizza');
    const saladItem = menu.filter(item => item.category == 'salad');
    const soupItem = menu.filter(item => item.category == 'soup');
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
            <div className="my-14">
                <SectionTitle
                    heading={"today's offer"}
                    subHeading={"Don't miss"}
                >
                </SectionTitle>
                <MenuCategory items={offeredItem}></MenuCategory>
            </div>
            <div className="my-14">
                <MenuCategory
                    items={dessertItem}
                    coverImg={desserts}
                    title={"desserts"}
                    subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></MenuCategory>
            </div>
            <div className="my-14">
                <MenuCategory
                    items={pizzaItem}
                    coverImg={pizza}
                    title={"pizza"}
                    subTitle={"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven."}
                ></MenuCategory>
            </div>
            <div className="my-14">
                <MenuCategory
                    items={saladItem}
                    coverImg={salad}
                    title={"salads"}
                    subTitle={"These easy salad recipes are perfect for lunches, summer cookouts, and dinner parties! Healthy and delicious, each one can double as a main or side dish!"}
                ></MenuCategory>

            </div>
            <div className="my-14">
                <MenuCategory
                    items={soupItem}
                    coverImg={soup}
                    title={"soup"}
                    subTitle={"Soup is a primarily liquid food, generally served warm or hot that is made by combining ingredients of meat or vegetables with stock, milk, or water."}
                ></MenuCategory>

            </div>
        </div>
    );
};

export default Menu;