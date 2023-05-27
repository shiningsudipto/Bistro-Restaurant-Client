// import React, { useState, useEffect } from 'react';

// const PaginationPage = () => {
//     const [data, setData] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 5;
//     const [totalPages, setTotalPages] = useState(1);

//     // Fetch data from the API
//     const fetchData = async (page) => {
//         try {
//             const response = await fetch(`http://localhost:5000/menu?page=${page}&limit=${itemsPerPage}`);
//             const jsonData = await response.json();
//             setData(jsonData.data);
//             setTotalPages(jsonData.totalPages);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     // Fetch data for the initial page
//     useEffect(() => {
//         fetchData(currentPage);
//     }, []);

//     // Event handlers for previous and next buttons
//     const goToPreviousPage = () => {
//         setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)); // Handle edge case for first page
//     };

//     const goToNextPage = () => {
//         setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages)); // Handle edge case for last page
//     };

//     // Fetch data for the current page whenever the currentPage changes
//     useEffect(() => {
//         fetchData(currentPage);
//     }, [currentPage]);
//     console.log(data);

//     return (
//         <div>
//             <ul>
//                 {data.map((item) => (
//                     <li key={item._id}>{item.name} <br /> <img src={item.image} className='h-10' alt="" /></li>
//                 ))}
//             </ul>

//             <button onClick={goToPreviousPage} disabled={currentPage === 1}>
//                 Previous
//             </button>
//             <button onClick={goToNextPage} disabled={currentPage === totalPages}>
//                 Next
//             </button>
//         </div>
//     );
// };

// export default PaginationPage;
