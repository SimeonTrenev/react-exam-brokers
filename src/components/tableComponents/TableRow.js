import React from "react";
import { Link } from "react-router-dom";


const TableRow = (props) => {
  const {
    address,
    area,
    constructionTypeId,
    floor,
    number,
    price,
    propertyTypeId,
    state,
    neighborhoodId,
    _id,
  } = props.offer;

  return (
    <tr>
      <td>{propertyTypeId.value}</td>
      <td>{state.value}</td>
      <td>{constructionTypeId.value}</td>
      <td>{number}</td>
      <td>{neighborhoodId.value}</td>
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
