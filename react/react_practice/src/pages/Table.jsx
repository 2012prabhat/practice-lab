import React, { useState } from "react";

const data = [
  { id: 1, name: "Prabhat", age: 25 },
  { id: 2, name: "Aman", age: 30 },
  { id: 3, name: "Rohit", age: 22 },
  { id: 4, name: "Kiran", age: 28 },
  { id: 5, name: "Sneha", age: 23 },
  { id: 6, name: "John", age: 35 },
];

function SimplePaginationTable() {
    // const [page,setPage] = useState(1);
    // const rowPerPage = 4;
    // const totalPages = Math.ceil(data.length/rowPerPage);
    // const startIdx = (page-1) * rowPerPage;
    // const endIdx = startIdx+rowPerPage;
    // const visibleRows = data.slice(startIdx,endIdx);
    const [page, setPage] = useState(1);
    const rowPerPage = 3;
    const totalPages = Math.ceil(data.length/rowPerPage);
    const startIdx = (page-1) * rowPerPage;
    const endIdx = startIdx+rowPerPage;
    const visibleRows = data.slice(startIdx,endIdx);

  return (
    <div style={{ padding: 20 }}>
      <h2>Simple Table with Pagination</h2>

      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {visibleRows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div style={{ marginTop: 20 }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {page} of {totalPages}
        </span>

        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default SimplePaginationTable;


