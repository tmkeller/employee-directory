import React from "react";
import "./style.css";

function TableHead(props) {
  return (
    <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Pic</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  );
}

export default TableHead;
