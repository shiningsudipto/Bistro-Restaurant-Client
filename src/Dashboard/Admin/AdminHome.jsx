import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaPeopleCarry, FaUsers, FaWallet, FaTruck } from "react-icons/fa";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminHome = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: status = {} } = useQuery({
        queryKey: ['admin-status'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-status');
            return res.data
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['chart-data'],
        queryFn: async () => {
            const res = await axiosSecure('/order-stats');
            return res.data;
        }
    })
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div className="w-full m-4">
            <div>
                <h3 className="text-3xl font-semibold ">HI, WELCOME BACK! <span className="text-[#D1A054]">{user.displayName}</span></h3>
            </div>
            <div className="grid grid-cols-4 gap-4 my-10">
                <div>
                    <div className="flex justify-between items-center py-3 px-8 bg-gradient-to-r from-purple-700 to-slate-300 rounded-xl text-white w-52">
                        <FaWallet className="text-4xl" />
                        <div className="text-center">
                            <h2 className="text-5xl font-bold">{status.revenue}</h2>
                            <p className="text-xl">Revenue</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-center py-3 px-8 bg-gradient-to-r from-[#D3A256] to-slate-300 rounded-xl text-white w-52">
                        <FaUsers className="text-4xl" />
                        <div className="text-center">
                            <h2 className="text-5xl font-bold">{status.users}</h2>
                            <p className="text-xl">Customers</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-center py-3 px-8 bg-gradient-to-r from-[#FE4880] to-slate-300 rounded-xl text-white w-52">
                        <FaPeopleCarry className="text-4xl" />
                        <div className="text-center">
                            <h2 className="text-5xl font-bold">{status.products}</h2>
                            <p className="text-xl">Products</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-center py-3 px-8 bg-gradient-to-r from-sky-400 to-slate-300 rounded-xl text-white w-52">
                        <FaTruck className="text-4xl" />
                        <div className="text-center">
                            <h2 className="text-5xl font-bold">{status.orders}</h2>
                            <p className="text-xl">Orders</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="total" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Legend></Legend>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="count"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell name={entry.category} key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    );
};

export default AdminHome;