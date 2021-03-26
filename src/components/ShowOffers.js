import React, { Component } from "react";
// import OffersFilters from "./OffersFilters";
// import TableOffers from "./tableComponents/TableOffers";
// import Pagination from './tableComponents/Pagination'
// import qs from "querystring";
import axios from 'axios'
import Pagination from "./tableComponents/Pagination";
import TableOffers from "./tableComponents/TableOffers";
import SearchButton from "./SearchButton";
import db from "./db/db";

class ShowOffers extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      offers: db,
      searchByNeighborhood: "",
    };
  }


  componentDidMount(){
  

    axios.get('/offers')
        .then(response => console.log(response))
  }

  onChangeValueSearch = (e) => {
    let currentSearch = e.target.value;
    this.setState({ searchByNeighborhood: currentSearch });
  };

  onSearch = (e) => {
    e.preventDefault();

    const currentNeighborhood = db.filter(
      (x) =>
        x.neighborhood.toLowerCase() ===
        this.state.searchByNeighborhood.toLowerCase()
    );

    if(!this.state.searchByNeighborhood){
      this.setState({offers: db})
      return;
    }

    this.setState({ offers: currentNeighborhood });

    this.setState({ searchByNeighborhood: "" });
    // console.log("click search !!!");
    // console.log(this.state.searchByNeighborhood);
  };

  render() {
    return (
      <div>
        <SearchButton
          type="text"
          label="Квартал"
          placeholder="Квартал"
          name="neighborhood"
          val={this.state.searchByNeighborhood}
          onChange={this.onChangeValueSearch}
          onSearch={this.onSearch}
        />
        <TableOffers offers={this.state.offers} />
        <Pagination />
      </div>
    );
  }
}

export default ShowOffers;
