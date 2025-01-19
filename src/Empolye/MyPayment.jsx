import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, Typography } from "@material-tailwind/react";
import { format } from "date-fns";
import paid from "/paid.png";
import useSecure from "../Hook/useSecure";
import useAuth from "../Hook/useAuth";

const TABLE_HEAD = [
  "Name",
  "Email",
  "Designation",
  "Month-Year",
  "Amount",
  "Transaction Id",
  "Payment Date",
  "Status",
];

const MyPayment = () => {
  const { user } = useAuth();
  const secureAxios = useSecure();
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // Using query hook to fetch payment data
  const { data: myPayment = [], isLoading, refetch } = useQuery({
    queryKey: ["myPayment", user?.email, itemsPerPage, currentPage],
    queryFn: async () => {
      const result = await secureAxios.get(
        `/my-payments/${user?.email}?page=${currentPage - 1}&size=${itemsPerPage}`
      );
      
      return result.data;
    },
    refetchOnWindowFocus: false,
    keepPreviousData: true, // Keeps previous data while the new data is being fetched
  });

  // Extract total records from API response
  const totalRecords = myPayment?.totalRecords || 0; // Assuming your API returns this
  const numberOfPages = Math.ceil(totalRecords / itemsPerPage) || 1;

  // Create pagination buttons
  const pages = [...Array(numberOfPages).keys()];

  // Handle change in items per page
  const handleItemsPerPageChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setItemsPerPage(value);
    setCurrentPage(1); // Reset to page 1 when items per page is changed
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Loading state (Optional: show loading spinner)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-bold mb-4">
        Payment History {myPayment.length}
      </h2>

      <Card className="w-full border border-primary bg-[#060d22] text-white shadow-lg rounded-lg">
        {/* Table */}
        <table className="w-full table-auto border-collapse text-left">
          <thead className="bg-primary bg-opacity-30 text-white">
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={index}
                  className="border-b border-primary px-4 py-2 text-sm font-semibold uppercase"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {myPayment.map((item, index) => {
              const isLast = index === myPayment.length - 1;
              const rowClass = isLast ? "px-4 py-2" : "px-4 py-2 border-b border-primary";

              return (
                <tr key={item.id || index} className="hover:bg-primary transition duration-300">
                  <td className={rowClass}>
                    <Typography variant="small" className="font-normal">
                      {item?.employee?.employee?.name}
                    </Typography>
                  </td>
                  <td className={rowClass}>
                    <Typography variant="small" className="font-normal">
                      {item?.employee?.employee?.email}
                    </Typography>
                  </td>
                  <td className={rowClass}>
                    <Typography variant="small" className="font-normal">
                      {item?.employee?.employee?.designation}
                    </Typography>
                  </td>
                  <td className={rowClass}>
                    {item?.employee?.month}-{item?.employee?.year}
                  </td>
                  <td className={rowClass}>
                    <Typography variant="small" className="font-normal">
                      {item?.employee?.employee?.salary}
                    </Typography>
                  </td>
                  <td className={rowClass}>
                    <Typography variant="small" className="font-normal">
                      {item?.tan_id}
                    </Typography>
                  </td>
                  <td className={rowClass}>
                    <Typography variant="small" className="font-normal">
                      {format(new Date(item.date), "P")}
                    </Typography>
                  </td>
                  <td className={rowClass}>
                    <Typography variant="small" className="font-normal">
                      <img className="h-9" src={paid} alt="Paid" />
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination flex justify-center gap-12 py-4">
          {/* Pagination Buttons */}
          <div className="flex justify-center items-center gap-3">
            {/* Previous Button */}
            <button
              className="btn btn-square"
              onClick={() => {
                if (currentPage > 1) handlePageChange(currentPage - 1);
              }}
            >
              Prev
            </button>

            {/* Page Number Buttons */}
            {pages.map((page) => (
              <button
                key={page}
                className={`btn ${currentPage === page + 1 ? "bg-primary text-white" : "btn-outline"}`}
                onClick={() => handlePageChange(page + 1)}
              >
                {page + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              className="btn btn-square"
              onClick={() => {
                if (currentPage < numberOfPages)
                  handlePageChange(currentPage + 1);
              }}
            >
              Next
            </button>
          </div>

          {/* Items Per Page Dropdown */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
            }}
            className="text-xl bg-primary"
          >
            <select className="bg-primary bg-opacity-15 border"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              name="itemsPerPage"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              
            </select>
          </div>
        </div>

        {/* Empty State */}
        {myPayment.length === 0 && (
          <div className="p-4 text-center text-gray-300">
            No Payment available.
          </div>
        )}
      </Card>
    </div>
  );
};

export default MyPayment;
