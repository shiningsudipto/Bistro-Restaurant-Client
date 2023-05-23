
const MenuItems = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (
        <div className="flex space-x-4">
            <img className="w-[120px]" style={{ borderRadius: '0 200px 150px 200px' }} src={image} alt="" />
            <div>
                <h4>{name}------------</h4>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItems;