import { Component } from "react";
import OfferForm from "./OfferForm";
// import db from "./db/db";
import axios from "axios";

class EditOffer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOffer: {}
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



  searchInDb = async function() {
    let db = []; 
    await axios.get('/allOffers')
     .then(response => db.push(response.data))
     .catch(err => console.log(err))
    //  console.log(db)

    const currentOffer = await db[0].filter(
      (x) => x._id === this.props.match.params._id
    )[0];
    this.setState({ currentOffer });

    // console.log(this.state.currentOffer)
    
  };

  // deleteOffer(offer){
  //   this.props.deleteOffer(offer._id)
  // }

  dltButton = async function (_id){
    const db = [];
    await axios.get('/allOffers')
     .then(response => db.push(response.data))
     .catch(err => console.log(err))


    const neededOffer = await db[0].filter((x) => x._id === _id)[0];
    
    
   await axios.post('/delete', neededOffer)
          .then(response => this.props.history.push('/show-offers/1'))
          .catch(err => console.log(err))
          // this.props.history.push('/show-offers/1')

    // console.log(this.props);
    // this.props.history.push("/");
  };

  editButton = async function (_id) {
    const db = [];
    await axios.get('/allOffers')
     .then(response => db.push(response.data))
     .catch(err => console.log(err))
     


    // const neededOffer = await db[0].filter((x) => x._id === _id)[0];
    
    
    // delete neededOffer._id;
   
   await axios
      .post("/edit-offer", this.state.currentOffer, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => this.props.history.push('/show-offers/1'))
      .catch(err => console.log(err))

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
          deleteOffer={this.dltButton.bind(this)}
          // deleteOffer={this.dltButton.bind(this)}
          editOffer={this.editButton.bind(this)}
        />
      </div>
    );
  }
}

export default EditOffer;
