import { Component } from "react";
import Input from "./sharedComponents/Input";

class SearchButton extends Component {
  render() {
    

    return (
      <form>
        <Input
          type="text"
          name="searchByNeighborhood"
          label='Квартал'
          placeholder="Квартал"
          val={this.props.val}
          changeFn={this.props.onChange}
          
        />
        <button onClick={this.props.onSearch} className="btn btn-warning">Търси</button>
      </form>
    );
  }
}

export default SearchButton;
