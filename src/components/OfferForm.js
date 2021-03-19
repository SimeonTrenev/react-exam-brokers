import React, { Component } from "react";
import Dropdowns from "./sharedComponents/Dropdowns";
import Input from "./sharedComponents/Input";
import TextArea from "./sharedComponents/TextArea";
import DateSelector from "./sharedComponents/DateSelector";
// import moment from 'moment';

class OfferForm extends Component {
  render() {
    
    return (
      <div>
        <form>
          <div className="row">
            <div className="col-md-12">
              <Dropdowns
                defaultValues={this.props.offer.defaultValues}
                changeHandler={this.props.changeFn}
              />
            </div>
            <div className="col-sm-4">
              <Input
                name="number"
                label="Номер на оферта"
                type="number"
                val={this.props.offer.number}
                changeFn={this.props.changeFn}
              />

              <Input
                name="area"
                label="Квадратура"
                type="number"
                val={this.props.offer.area}
                changeFn={this.props.changeFn}
              />

              <Input
                name="description"
                label="Описание"
                type="text"
                val={this.props.offer.description}
                changeFn={this.props.changeFn}
              />

              <Input
                name="floor"
                label="Етаж"
                type="number"
                val={this.props.offer.floor}
                changeFn={this.props.changeFn}
              />
            </div>

            <div className="col-sm-4">
              <Input
                name="price"
                label="Цена"
                type="number"
                val={this.props.offer.price}
                changeFn={this.props.changeFn}
              />

              <Input
                name="address"
                label="Адрес"
                type="text"
                val={this.props.offer.address}
                changeFn={this.props.changeFn}
              />

              <TextArea
                name="info"
                label="Допълнителна Информация"
                type="text"
                val={this.props.offer.info}
                changeFn={this.props.changeFn}
              />

              <Input
                name="owner"
                label="Име на Собственик"
                type="text"
                val={this.props.offer.owner}
                changeFn={this.props.changeFn}
              />
            </div>

            <div className="col-sm-4">
              <Input
                name="phoneNumber"
                label="Телефон"
                type="number"
                val={this.props.offer.phoneNumber}
                changeFn={this.props.changeFn}
              />

              <Input
                name="phoneNumber2"
                label="Телефон 2"
                type="number"
                val={this.props.offer.phoneNumber2}
                changeFn={this.props.changeFn}
              />

              <Input
                name="phoneNumber3"
                label="Телефон 3"
                type="number"
                val={this.props.offer.phoneNumber3}
                changeFn={this.props.changeFn}
              />
            </div>

            <div className="col-sm-6">
              <DateSelector
                label="Последно обаждане"
                changeFn={this.props.changeFn}
                //  startDate={moment(this.state.lastCall)}
              />
            </div>

            <div className="col-sm-6">
              <DateSelector
                label="Следващо обаждане"
                changeFn={this.props.changeFn}
                //   startDate={moment(this.state.nextCall)}
              />
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <button
              onClick={(e) => {
                e.preventDefault();
                // this.props.submitForm(this.state);
              }}
              className="btn btn-success"
              style={{ marginRight: "50px" }}
            >
              Запази
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default OfferForm;
