import UnderLineBtn from "./UnderLineBtn";

const FoodCard = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (
        <div>
            <div className="card bg-base-100 h-full shadow-xl">
                <figure><img src={image} className="max-h-80" alt="Food" /></figure>
                <p className="absolute px-3 rounded-2xl right-0 mt-4 mr-6 bg-slate-900 text-white font-semibold">{price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <UnderLineBtn btnText={"add to cart"}></UnderLineBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;