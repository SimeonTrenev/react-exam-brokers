import { Component } from "react";
import Cookies from "universal-cookie";
// import Cookies from 'js-cookie'
// import axios from "axios";
const cookies = new Cookies();

class Logout extends Component {
  componentDidMount() {
    console.log(Cookies);
    console.log(cookies);
  }

//   logout() {
//     axios
//       .get("/clearCookie")
//       .then((response) => {
//         this.props.updateSessinStatus(false);
//         console.log(response);
//       })
//       .catch((err) => console.log(err));
//     // this.props.history.push('/')
//   }

  render() {
    return (
      <div>
        {/* <a href="/logout" onClick={this.logout()}>
          Logout
        </a> */}
      </div>
    );
  }
}

export default Logout;
