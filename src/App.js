import React from "react";
import AddOptions from "./components/addOptions";
import HomePage from "./components/homePage";
import AddOffer from "./components/addOffer";
// import OffersFilter from './components/OffersFilters'
import Header from "./components/Header";
import ShowOffers from "./components/ShowOffers";
import ErrorPage from "./components/ErrorPage";
import AboutUs from "./components/AboutUs";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import EditOffer from "./components/EditOffer";

class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      hasSession: false,
    };
  }

  updateSessionStatus = (hasSession) => {
    this.setState({ hasSession });
  };

  render() {
    const token = window.sessionStorage.getItem("token");
    
    return (
      <div
        style={{ padding: "10px", backgroundColor: "#eaeae1", height: "100vh" }}
      >
        <Header
          updateSessinStatus={this.updateSessionStatus}
          hasSession={this.state.hasSession}
        />

        <Switch>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
          <Route path="/aboutUs" component={AboutUs}></Route>
          { token && (
            <React.Fragment>
          <Route path="/add-offer" component={AddOffer} />
          <Route path="/add-options" component={AddOptions} />
          <Route path="/show-offers/:page" component={ShowOffers} />
          <Route path="/offer-details/:_id" component={EditOffer} />
          </React.Fragment>
          )}
          <Route path="/register" component={RegisterForm} />
          <Route
            path="/login"
            component={() => {
              return (
                <LoginForm
                  {...this.props}
                  updateSessinStatus={this.updateSessionStatus}
                />
              );
            }}
          />
          <Route component={ErrorPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
