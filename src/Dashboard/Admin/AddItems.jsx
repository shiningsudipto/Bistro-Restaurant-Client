import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddItems = () => {
    const [axiosSecure] = useAxiosSecure();
    const imageHostingToken = import.meta.env.VITE_Image_Upload_Token;
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(imageHostingURL, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, category, recipe, price: parseFloat(price), image: imgURL }
                    console.log(newItem);
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('posted to the database', data.data);
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
                console.log(imgResponse);
            })

        console.log(data)
    };
    // console.log(errors);
    return (
        <div className="px-3">
            <SectionTitle
                subHeading={"What's new?"}
                heading={"add an item"}
            ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            {...register("name", { required: true })}
                            placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="grid grid-cols-2 gap-x-6">
                        <div>
                            <label className="label">
                                <span className="label-text">Select Category</span>
                            </label>
                            <select
                                {...register("category", { required: true })}
                                className="select select-bordered w-full">
                                <option >SALADS</option>
                                <option>PIZZA</option>
                                <option>SOUP</option>
                                <option>DESSERTS</option>
                                <option>DRINKS</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number"
                                {...register("price", { required: true })}
                                placeholder="price" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <input type="text"
                            {...register("recipe", { required: true })}
                            placeholder="recipe details" className="input input-bordered h-20" />
                    </div>
                    <input type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full" />
                    <button className="btn ">Add Item <FaUtensils className="ms-2" /></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;