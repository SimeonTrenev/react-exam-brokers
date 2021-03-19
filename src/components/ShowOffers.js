import React, { Component } from "react";
// import OffersFilters from "./OffersFilters";
// import TableOffers from "./tableComponents/TableOffers";
// import Pagination from './tableComponents/Pagination'
// import qs from "querystring";

import Pagination from "./tableComponents/Pagination";
import TableOffers from "./tableComponents/TableOffers";
import OffersFilters from "./OffersFilters";
import db from "./db/db";

class ShowOffers extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      offers: [
        {
          address: db[0].address,
          area: db[0].area,
          constructionTypeId: { value: "2" },
          floor: db[0].floor,
          number: db[0].number,
          price: db[0].price,
          propertyTypeId: { value: db[0].defaultValues.propertyTypeId },
          state: { value: db[0].defaultValues.state },
          neighborhoodId: { value: "3" },
          _id: "10",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <OffersFilters />
        <TableOffers offers={db} />
        <Pagination />
      </div>
    );
  }
}

export default ShowOffers;
