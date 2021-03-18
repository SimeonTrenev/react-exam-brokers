import { Component } from "react";
import OfferForm from "./OfferForm";
import db from "./db/db";

class EditOffer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      db,
      currentOffer: null,
    };
  }

  componentDidMount() {
    this.searchInDb();
  }

  searchInDb() {
    const currentOffer = db.filter(
      (x) => x._id === this.props.match.params._id
    )[0];
    this.setState({ currentOffer });
  }

  render() {
    console.log(this.state.currentOffer);
    return (
      <div>
        <OfferForm offer={this.state.currentOffer} />
      </div>
    );
  }
}

export default EditOffer;
