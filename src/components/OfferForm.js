import React, { Component } from 'react';
import Dropdowns from './sharedComponents/Dropdowns';
import Input from './sharedComponents/Input';
import TextArea from './sharedComponents/TextArea';
import DateSelector from './sharedComponents/DateSelector';
// import moment from 'moment';

class OfferForm extends Component{
    constructor(props){
        super(props)

        this.state = { ...props }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeLastCall = this.handleChangeLastCall.bind(this)
        this.handleChangeNextCall = this.handleChangeNextCall.bind(this)
    }

    componentWillReceiveProps(props){
        if(props) {
            this.setState({...props})
        }
    }

    handleChange(e){
        this.setState({[e.target.name] : e.target.value})
    }

    handleChangeLastCall(lastCall){
        this.setState({lastCall})
    }

    handleChangeNextCall(nextCall){
        this.setState({nextCall})
    }

    showDeleteBtn() {
        if(!this.props.isDeleted && this.props.deleteOffer){
            return(
                <button onClick={(e) =>{
                    e.preventDefault();
                    this.props.deleteOffer(this.state)
                }}
                className='btn btn-dange' style={{position: 'absolute', right: '0'}}>Изтрий</button>
            )
        }
        return null
    }

    render(){
        return(
            <div>
                <form>
                    <div className='row'>
                        <div className='col-md-12'>
                            <Dropdowns 
                                defaultValues={this.state.dropdownsValues}
                                changeHandler={this.handleChange}
                            />
                        </div>
                        <div className='col-sm-4'>
                            <Input name='number' 
                              label='Номер на оферта'
                              type='number'
                              val={this.state.number}
                              changeFn={this.handleChange}
                            />

                            <Input name='area' 
                              label='Квадратура'
                              type='number'
                              val={this.state.area}
                              changeFn={this.handleChange}
                            />

                            <Input name='description'
                              label='Описание'
                              type='text'
                              val={this.state.description}
                              changeFn={this.handleChange}
                            />

                            <Input name='floor'
                              label='Етаж'
                              type='number'
                              val={this.state.floor}
                              changeFn={this.handleChange}
                            />
                        </div>

                        <div className='col-sm-4'>
                            <Input name='price'
                              label='Цена'
                              type='number'
                              val={this.state.price}
                              changeFn={this.handleChange} 
                            />

                            <Input name='address' 
                              label='Адрес'
                              type='text'
                              val={this.state.address}
                              changeFn={this.handleChange}
                            />

                            <TextArea name='info' 
                             label='Допълнителна Информация'
                             type='text'
                             val={this.state.info}
                             changeFn={this.handleChange}
                            />

                            <Input name='owner'
                              label='Име на Собственик'
                              type='text'
                              val={this.state.owner}
                              changeFn={this.handleChange} 
                            />
                        </div>

                        <div className='col-sm-4'>
                            <Input name='phoneNumber'
                              label='Телефон'
                              type='number'
                              val={this.state.phoneNumber}
                              changeFn={this.handleChange} 
                            />

                            <Input name='phoneNumber2'
                             label='Телефон 2'
                             type='number'
                             val={this.state.phoneNumber2}
                             changeFn={this.handleChange} 
                            />

                            <Input name='phoneNumber3'
                             label='Телефон 3'
                             type='number'
                             val={this.state.phoneNumber3}
                             changeFn={this.handleChange} 
                            />
                        </div>

                        <div className='col-sm-6'>
                            <DateSelector 
                             label='Последно обаждане'
                             changeFn={this.handleChangeLastCall}
                            //  startDate={moment(this.state.lastCall)}
                            />
                        </div>

                        <div className='col-sm-6'>
                         <DateSelector 
                          label='Следващо обаждане'
                          changeFn={this.handleChangeNextCall}
                        //   startDate={moment(this.state.nextCall)}
                         />
                        </div>
                    </div>

                    <div style={{position: 'relative'}}>
                      <button
                      onClick={(e) => {
                          e.preventDefault();
                          this.props.submitForm(this.state)
                      }}
                      className='btn btn-success' style={{marginRight: '50px'}} >Запази</button>

                      {this.showDeleteBtn()}
                    </div>
                </form>
            </div>
        )
    }
}

export default OfferForm;