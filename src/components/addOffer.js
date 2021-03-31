import { Component } from "react";
// import Select from './sharedComponents/Select';
// import Input from './sharedComponents/Input'
// import DateSelector from './sharedComponents/DateSelector'
import OfferForm from "./OfferForm";
import axios from 'axios'

class AddOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    // console.log('123')
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  btnSuccess = (offer) => {
    axios.post('/add-offer', offer)
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
    this.props.history.push('/show-offers/1')
  }
 
  render() {
    return <OfferForm changeFn={this.onChange} offer={this.state} btn={this.btnSuccess}/>;
  }
}

export default AddOffer;
