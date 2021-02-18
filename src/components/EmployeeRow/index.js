import React from "react";
import "./style.css";

function EmployeeRow(props) {
  return (
    <tr>
      <th scope="row">
        { props.SSN }
      </th>
      <td>
        <img alt={ props.name.last } src={ props.picture.medium } />
      </td>
      <td>
        { `${ props.name.title } ${ props.name.first } ${ props.name.last }` }
      </td>
      <td>
        { props.phone }
      </td>
      <td>
        { props.email }
      </td>
      <td>
        { props.dob.age }
      </td>
    </tr>
  );
}

export default EmployeeRow;
