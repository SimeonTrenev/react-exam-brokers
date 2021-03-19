import { Component } from "react";
// import Select from './sharedComponents/Select';
// import Input from './sharedComponents/Input'
// import DateSelector from './sharedComponents/DateSelector'
// import Dropdowns from './sharedComponents/Dropdowns'
import OfferForm from "./OfferForm";

class AddOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return <OfferForm changeFn={this.onChange} offer={this.state} />;
  }
}

export default AddOffer;
