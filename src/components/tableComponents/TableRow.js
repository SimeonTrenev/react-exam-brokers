import React from "react";
import { Link } from "react-router-dom";

const TableRow = (props) => {
  const {
    address,
    area,
    construction,
    floor,
    number,
    price,
    property,
    state,
    neighborhood,
    _id,
  } = props.offer;

  return (
    <tr>
      <td>{property}</td>
      <td>{state}</td>
      <td>{construction}</td>
      <td>{number}</td>
      <td>{neighborhood}</td>
      <td>{area}</td>
      <td>{price}</td>
      <td>{address}</td>
      <td>{floor}</td>
      <td>
        <Link to={"/offer-details/" + _id}>Виж Детайли</Link>
      </td>
    </tr>
  );
};

export default TableRow;
