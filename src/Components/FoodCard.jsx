import { useContext } from "react";
import UnderLineBtn from "./UnderLineBtn";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../Hooks/useCart";

const FoodCard = ({ item }) => {
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const { image, name, price, recipe, _id } = item;
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCart = (item) => {
        console.log(item);
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }
            console.log(cartItem);
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch() // refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Added to the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order food',
                // text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Login now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div>
            <div className="card bg-base-100 h-full shadow-xl">
                <figure><img src={image} className="max-h-80" alt="Food" /></figure>
                <p className="absolute px-3 rounded-2xl right-0 mt-4 mr-6 bg-slate-900 text-white font-semibold">{price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(item)}>
                            <UnderLineBtn btnText={"add to cart"}></UnderLineBtn>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;