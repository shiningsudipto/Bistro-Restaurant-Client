import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHome, FaCalendarAlt, FaMoneyCheckAlt, FaStarHalfAlt, FaCalendarCheck, FaUtensils, FaBars, FaBook, FaUsers } from "react-icons/fa";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    // TODO: load data from the server to have dynamic isAdmin based on data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    console.log(isAdmin);

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-[#D1A054] font-semibold">
                        {/* <!-- Sidebar content here --> */}
                        {
                            isAdmin ?
                                <>
                                    {/* admin menu */}
                                    <li><NavLink to="/dashboard/userhome"><FaHome /> Admin Home</NavLink></li>
                                    <li><NavLink to="/dashboard/additems"><FaUtensils /> Add Items</NavLink></li>
                                    <li><NavLink to="/dashboard/userhome"><FaBars /> Manage Items</NavLink></li>
                                    <li><NavLink to="/dashboard/userhome"><FaBook /> Manage Bookings</NavLink></li>
                                    <li><NavLink to="/dashboard/allusers"><FaUsers /> All Users</NavLink></li>
                                </>
                                :
                                <>
                                    {/* User menu */}
                                    <li><NavLink to="/dashboard/userhome"><FaHome /> User Home</NavLink></li>
                                    <li><NavLink to="/dashboard/reservation"><FaCalendarAlt /> Reservation</NavLink></li>
                                    <li><NavLink to="/dashboard/history"><FaMoneyCheckAlt /> Payment History</NavLink></li>
                                    <li><NavLink to="/dashboard/mycart"><FaShoppingCart /> My Cart <span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink> </li>
                                    <li><NavLink to="/dashboard/review"><FaStarHalfAlt />Add Review</NavLink></li>
                                    <li><NavLink to="/dashboard/booking"><FaCalendarCheck /> My Booking</NavLink></li>
                                </>
                        }



                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;