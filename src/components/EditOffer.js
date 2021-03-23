import { Component } from "react";
import OfferForm from "./OfferForm";
import db from "./db/db";
import axios from "axios";

class EditOffer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOffer: {},
    };
  }

  componentDidMount() {
    this.searchInDb();
  }

  onChange = (e) => {
    // console.log(this.state.currentOffer);
    let { currentOffer } = this.state;
    currentOffer[e.target.name] = e.target.value;

    this.setState((prevState) => {
      return { ...prevState, currentOffer };
    });
  };

  searchInDb = () => {
    const currentOffer = db.filter(
      (x) => x._id === this.props.match.params._id
    )[0];
    this.setState({ currentOffer });
  };

  // deleteOffer(offer){
  //   this.props.deleteOffer(offer._id)
  // }

  dltButton = (_id) => {
    const neededOffer = db.filter((x) => x._id === _id)[0];
    let index = db.indexOf(neededOffer);
    db.splice(index, 1);
    // console.log(this.props);
    this.props.history.push("/");
  };

  editButton = (_id) => {
    const neededOffer = db.filter((x) => x._id === _id)[0];

    delete neededOffer._id;

    axios
      .post("http://localhost:9000/add-offer", neededOffer, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => console.log(response.data));

    // let index = db.indexOf(neededOffer);

    // this.setState({ currentOffer: neededOffer });

    // db.splice(index, 1, this.state.currentOffer);
    // this.props.history.push("/show-offers/1");
    // console.log(db);
  };

  render() {
    return (
      <div>
        <OfferForm
          changeFn={this.onChange}
          offer={this.state.currentOffer || {}}
          deleteOffer={this.dltButton}
          // deleteOffer={this.dltButton.bind(this)}
          editOffer={this.editButton}
        />
      </div>
    );
  }
}

export default EditOffer;
