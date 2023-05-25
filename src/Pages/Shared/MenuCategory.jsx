import MenuItems from "./MenuItems";
import Cover from "../../Components/Cover";
const MenuCategory = ({ items, title, coverImg, subTitle }) => {
    return (
        <div>
            {
                title && <Cover img={coverImg} title={title} subTitle={subTitle}></Cover>
            }
            <div className="grid md:grid-cols-2 gap-4 my-10">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;