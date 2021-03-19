import { Component } from "react";
import OfferForm from "./OfferForm";
import db from "./db/db";

class EditOffer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      db,
      currentOffer: {},
    };
  }

  componentDidMount() {
    this.searchInDb();
  }

  onChange = (e) => {
    console.log(this.state.currentOffer);
    let { currentOffer } = this.state;
    currentOffer[e.target.name] = e.target.value;

    this.setState((prevState) => {
      return { ...prevState, currentOffer };
    });
  };

  searchInDb() {
    const currentOffer = db.filter(
      (x) => x._id === this.props.match.params._id
    )[0];
    this.setState({ currentOffer });
  }

  render() {
    console.log("EditOffer --> ", this.state.currentOffer);
    return (
      <div>
        <OfferForm
          changeFn={this.onChange}
          offer={this.state.currentOffer || {}}
        />
      </div>
    );
  }
}

export default EditOffer;
