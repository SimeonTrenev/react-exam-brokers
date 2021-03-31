import React, { Component } from "react";
// import OffersFilters from "./OffersFilters";
// import TableOffers from "./tableComponents/TableOffers";
// import Pagination from './tableComponents/Pagination'
// import qs from "querystring";
import axios from 'axios'
import Pagination from "./tableComponents/Pagination";
import TableOffers from "./tableComponents/TableOffers";
import SearchButton from "./SearchButton";
import Spinner from './sharedComponents/Spinner'
// import db from "./db/db";

class ShowOffers extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      loading: true,
      offers: [],
      searchByNeighborhood: "",
    };

    
  }


  componentDidMount(){

  this.getAll()

  }

  getAll = async function(e) {
   
  await axios.get('/allOffers')
              .then(response => this.setState({offers: response.data}))
              .catch(err => console.log(err))

       this.setState({loading: false})
  }

  componentDidMount(){
    this.getAll()
  }

  onChangeValueSearch = (e) => {
    let currentSearch = e.target.value;
    this.setState({ searchByNeighborhood: currentSearch });
  };

  onSearch = (e) => {
    e.preventDefault();
    
    const currentNeighborhood = this.state.offers.filter(
      (x) =>
        x.neighborhood.toLowerCase() ===
        this.state.searchByNeighborhood.toLowerCase()
    );

    if(!this.state.searchByNeighborhood){
      // this.setState({offers: this.newDb})
      axios.get('/allOffers')
      .then(response => this.setState({offers: response.data}))
      .catch(err => console.log(err))
      return;
    }

    this.setState({ offers: currentNeighborhood });

    this.setState({ searchByNeighborhood: "" });
    // console.log("click search !!!");
    // console.log(this.state.searchByNeighborhood);
  };

  render() {
    if(this.state.loading){
      return(
        <Spinner />
      )
    }else{
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
}

export default ShowOffers;
