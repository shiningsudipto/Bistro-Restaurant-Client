import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserCog, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const rest = await axiosSecure.get('/users')
        return rest.data;
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = user => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is deleted`,
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }
    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold bg-red-300">Total users: {users.length}</h2>
            </div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr key={user._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            {user.name}
                                        </td>
                                        <td className="">{user.email}</td>
                                        <td className="font-semibold">{user.role === 'admin' ? <p className="flex items-center">Admin <FaUserCog className="text-red-600 mx-2 text-xl" /></p> : <FaUserShield onClick={() => handleMakeAdmin(user)} className="text-2xl" />}</td>
                                        <td>
                                            <button onClick={() => handleDelete(user)} className="btn bg-transparent border-0 hover:bg-red-600 text-red-600 hover:text-white"><FaTrashAlt className="text-3xl" /></button>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;