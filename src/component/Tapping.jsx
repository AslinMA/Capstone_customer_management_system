import React, { useState } from "react";
import { FaFilter } from "react-icons/fa"; // Import the FaFilter icon
import dummyData from "./dummyData"; // Ensure this is correctly imported

const Tapping = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const itemsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDateChange = (e, type) => {
    const value = e.target.value;
    setDateRange((prevRange) => ({
      ...prevRange,
      [type]: value,
    }));
  };

  const handleFilterClick = () => {
    setShowFilters(!showFilters);
  };

  const handleTotalClick = () => {
    const filteredData = dummyData.filter((item) => {
      const itemDate = new Date(item.date);
      const startDate = new Date(dateRange.start);
      const endDate = new Date(dateRange.end);
      return itemDate >= startDate && itemDate <= endDate;
    });
    const total = filteredData.reduce((acc, item) => acc + item.liters, 0);
    alert(`Total Liters: ${total}`);
  };

  const renderTableData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = dummyData.slice(startIndex, startIndex + itemsPerPage);
    return selectedData.map((item, index) => (
      <tr key={index} className="hover:bg-icon_background bg-white shadow-1xl">
        <td className="px-5 py-2 font-semibold text-primary">{item.date}</td>
        <td className="px-5 py-2 font-bold text-primary">
          {item.liters} liter
        </td>
        <td className="px-7 py-2 font-bold text-primary">
          {item.ammonia} liter
        </td>
        <td className="px-7 py-2 font-bold text-primary">{item.tmtd} liter</td>
      </tr>
    ));
  };

  return (
    <div className="md:px-14 px-4 max-w-screen-2xl mx-auto my-24">
      <h2 className="text-5xl text-primary font-bold mb-10 text-left">
        Tapping Deatils
      </h2>
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-between w-full items-center ">
          <div>
            <button
              onClick={handleFilterClick}
              className="bg-gray-200 text-black px-4 py-2 rounded-full flex items-center hover:shadow-3xl"
            >
              <FaFilter className="mr-2" />
              Filter
            </button>
          </div>
          <div>
              serch
          </div>
        </div>

        <button
          onClick={handleTotalClick}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-all duration-300"
        >
          Total Tapping
        </button>
      </div>
      {showFilters && (
        <div className="flex justify-center items-center mb-5">
          <input
            type="date"
            value={dateRange.start}
            onChange={(e) => handleDateChange(e, "start")}
            className="border px-3 py-2 mr-2"
          />
          <p className=" font-primary mr-2 font-bold"> To</p>
          <input
            type="date"
            value={dateRange.end}
            onChange={(e) => handleDateChange(e, "end")}
            className="border px-3 py-2"
          />
          <button
            onClick={handleFilterClick}
            className="bg-primary text-white px-4 py-2 rounded ml-2 hover:shadow-3xl"
          >
            Apply
          </button>
          {/* ///---------------------------this butten is total cal------------------------ */}
          <button
            // onClick={handleFilterClick}
            className="bg-primary text-white px-4 py-2 rounded ml-2 hover:shadow-3xl"
          >
            Total Latex
          </button>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-center table-fixed ">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2 text-gray-600 text-sm font-bold">
                Date
              </th>
              <th className="px-4 py-2 text-gray-600 text-sm font-bold">
                Liters
              </th>
              <th className="px-4 py-2 text-gray-600 text-sm font-bold">
                Ammonia Addition
              </th>
              <th className="px-4 py-2 text-gray-600 text-sm font-bold">
                TMTD Addition
              </th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
      <div className="mt-6 flex justify-center items-center">
        {Array.from(
          { length: Math.ceil(dummyData.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1 rounded-full ${
                currentPage === index + 1
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Tapping;
