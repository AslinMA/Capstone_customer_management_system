import React, { useState, useEffect } from "react";
import dummyData from "./dummyData"; // Ensure this is correctly imported

const TABLE_HEAD = ["Date", "Liters", "Ammonia Addition", "TMTD Addition"];

const Tapping = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [filteredRows, setFilteredRows] = useState(dummyData);
  const itemsPerPage = 10;

  useEffect(() => {
    filterByDateRange();
  }, [dateRange]);

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

  const filterByDateRange = () => {
    const startDate = new Date(dateRange.start);
    const endDate = new Date(dateRange.end);
    const filtered = dummyData.filter((item) => {
      const itemDate = new Date(item.date);
      return (
        (!isNaN(startDate) ? itemDate >= startDate : true) &&
        (!isNaN(endDate) ? itemDate <= endDate : true)
      );
    });
    setFilteredRows(filtered);
  };

  const calculateTotalLiters = () => {
    return filteredRows.reduce((total, row) => total + row.liters, 0);
  };

  const totalLiters = calculateTotalLiters();

  const renderTableData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedData = filteredRows.slice(startIndex, startIndex + itemsPerPage);
    return selectedData.map((item, index) => (
      <tr key={index} className="hover:bg-gray-100 bg-white">
        <td className="p-4 text-blue-gray-600 text-sm font-normal">{item.date}</td>
        <td className="p-4 text-blue-gray-600 text-sm font-normal">{item.liters} liter</td>
        <td className="p-4 text-blue-gray-600 text-sm font-normal">{item.ammonia} liter</td>
        <td className="p-4 text-blue-gray-600 text-sm font-normal">{item.tmtd} liter</td>
      </tr>
    ));
  };

  return (
    <div className="m-4 md:m-10 relative">
      <div className="">
        <h1 className="text-2xl md:text-4xl text-primary font-bold mb-4 px-4 md:px-10">
          Tapping Details
        </h1>
      </div>
      <div className="flex justify-center md:justify-end md:flex-row mb-4 px-4 md:px-10">
  <div className="flex flex-wrap items-center justify-center md:justify-start w-full md:w-auto">
    <input
      type="date"
      value={dateRange.start}
      onChange={(e) => handleDateChange(e, "start")}
      className="border px-3 py-2 mb-2 md:mb-0 mr-2 w-full md:w-auto"
    />
    <p className="font-primary mr-2 font-bold">To</p>
    <input
      type="date"
      value={dateRange.end}
      onChange={(e) => handleDateChange(e, "end")}
      className="border px-3 py-2 mb-2 md:mb-0 w-full md:w-auto"
    />
    <button
      onClick={filterByDateRange}
      className="bg-primary text-white px-4 py-2 rounded ml-2 w-full md:w-auto hover:shadow-3xl"
    >
      Search
    </button>
  </div>
</div>

      <div className="h-full w-full rounded-lg bg-white px-4 md:px-20">
        <div className="overflow-auto p-4">
          <table className="w-full min-w-max table-auto text-center">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 cursor-pointer"
                  >
                    <div className="text-blue-gray-600 text-sm font-normal leading-none opacity-70">
                      {head}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{renderTableData()}</tbody>
            <tr>
              <td className="p-4 font-bold text-blue-gray-600 text-sm">Total Liters</td>
              <td className="p-4 font-bold text-white bg-primary text-sm text-center" colSpan={1}>
                {totalLiters} liters
              </td>
            </tr>
          </table>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-blue-gray-50 p-4">
          <button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-green text-white font-bold py-3 px-8 rounded mb-2 md:mb-0 hover:bg-dark_green transition-all duration-300 shadow-3xl disabled:opacity-50"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredRows.length / itemsPerPage)}
            className="bg-green text-white font-bold py-3 px-8 rounded hover:bg-dark_green transition-all duration-300 shadow-3xl disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tapping;
