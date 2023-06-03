import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageItems = () => {
    const [menu, refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();
    const handleDelete = (item) => {
        Swal.fire({
            title: `delete? ${item.name}`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                `${item.name} has been deleted.`,
                                'success'
                            )
                        }
                    })
            }

        })
    }
    return (
        <div>
            <div>
                <SectionTitle
                    subHeading={"Hurry Up"}
                    heading={"manage all items"}
                ></SectionTitle>
            </div>
            <div>
                <div className="overflow-x-auto mx-6">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                menu.map((item, index) =>

                                    <tr key={item._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="" />
                                            </div>
                                        </td>
                                        <td>{item.name}</td>
                                        <td>${item.price}</td>
                                        <td>
                                            <button className="btn">Edit</button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(item)} className="btn bg-transparent border-0 hover:bg-red-600 text-red-600 hover:text-white"><FaTrashAlt className="text-3xl" /></button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;