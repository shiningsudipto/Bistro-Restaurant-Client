import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import MenuItems from "../Shared/MenuItems";
const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category == 'popular');
                setMenu(popularItem);
            })
    }, [])
    console.log(menu);
    return (
        <div>
            <section>
                <SectionTitle
                    subHeading="Check it out"
                    heading="FROM OUR MENU"
                />
            </section>
            <section className="my-14">
                <div className="grid md:grid-cols-2 gap-4">
                    {
                        menu.map(item => <MenuItems
                            key={item._id}
                            item={item}
                        ></MenuItems>)
                    }
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;