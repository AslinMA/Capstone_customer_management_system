import React, { useState } from "react";
import dummyData from "./dummyData"; // Import dummy data from a separate file or define it here

const Tapping = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderTableData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = dummyData.slice(startIndex, startIndex + itemsPerPage);
    return selectedData.map((item, index) => (
      <tr key={index} className="hover:bg-icon_background bg-white shadow-1xl">
        <td className="px-5 py-2 font-semibold text-primary">{item.date}</td>
        <td className="px-5 py-2 font-bold text-primary">{item.liters} liter</td>
        <td className="px-7 py-2 font-bold text-primary">{item.ammonia} liter</td>
        <td className="px-7 py-2 font-bold text-primary">{item.tmtd} liter</td>
      </tr>
    ));
  };

  return (

    
    //------------------------------------ need to add filter option and total calculation part-----------------------------------------------------------


    <div className="md:px-14 px-4 max-w-screen-2xl mx-auto my-24">
      <h2 className="text-5xl text-primary font-bold mb-10 text-center">Tapping Data</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left table-fixed">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2 text-tartiary text-sm font-bold">Date</th>
              <th className="px-4 py-2 text-tartiary text-sm font-bold">Liters</th>
              <th className="px-4 py-2 text-tartiary text-sm font-bold">Ammonia Addition</th>
              <th className="px-4 py-2 text-tartiary text-sm font-bold">TMTD Addition</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
      <div className="mt-6 flex justify-center items-center">
        {Array.from({ length: Math.ceil(dummyData.length / itemsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === index + 1 ? "bg-green text-white" : "bg-gray-300 text-tartiary"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tapping;
