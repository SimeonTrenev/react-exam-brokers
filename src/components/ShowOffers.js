import React, { Component } from "react";
// import OffersFilters from "./OffersFilters";
// import TableOffers from "./tableComponents/TableOffers";
// import Pagination from './tableComponents/Pagination'
// import qs from "querystring";

import Pagination from './tableComponents/Pagination';
import TableOffers from './tableComponents/TableOffers';
import OffersFilters from './OffersFilters'



class ShowOffers extends Component {
    constructor(props){
        super(props)

        this.state = {
            offers: [ {address : '6',
               area : '5',
               constructionTypeId: {value : 'dadad'},
               floor : '3',
               number : '2',
               price : '1',
               propertyTypeId: {value: 'dadada'},
               state : {value: 'dadad'},
               neighborhoodId: {value: 'dadada'},
               _id: '10' },]
        }
            
        
    }

  render() {
    return (
      <div>
          <OffersFilters />
        <TableOffers offers={this.state.offers} />
        <Pagination />
      </div>
    );
  }
}

export default ShowOffers;
