import React, { Component } from 'react';

import Select from './sharedComponents/Select';

import Dropdowns from './sharedComponents/Dropdowns';
import qs from 'querystring'
import DateSelector from './sharedComponents/DateSelector'
import Input from './sharedComponents/Input';
import moment from 'moment'

class OffersFilters extends Component {
    constructor(props){
        super(props)

        const values = this.props.selectedValues;
        
        if(values){
            const { constructionTypeId, propertyTypeId, neigborhoodId, state } = values;
            this.state = { constructionTypeId, propertyTypeId, neigborhoodId, state }
        }else{
            this.state = {
                constructionTypeId: '',
                propertyTypeId: '',
                state: '',
                neigborhoodId: '',
                countOffers: 10,
                nextCall: moment(),
                phoneNumber: ''
            }
        }

        this.changeHandlerDatePicker = this.changeHandlerDatePicker.bind(this)
        this.changeHandler=this.changeHandler.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
    }

    changeHandler(e){
        this.setState({[e.targer.name] : e.target.values})
    }

    changeHandlerDatePicker(date){
        this.setState({'nextCall': date})
    }

    componentDidMount(){
        // this.props.getOptions()
    }

    clickBtn(e){
        e.preventDefault();

        if(e.target.name === 'search'){
            let { constructionTypeId, propertyTypeId, neigborhoodId, state, countOffers, nextCall, phoneNumber } = this.state
            console.log(this.state)
            nextCall = moment(this.state.nextCall).format('YYYY-MM-DD')
            const search = qs.stringify({constructionTypeId, propertyTypeId, neigborhoodId, state, countOffers, nextCall, phoneNumber})
            this.props.getSearchingParameters(search)
        }else{
            this.props.getSearchingParameters(false)
            this.setState({
                constructionTypeId: '',
                propertyTypeId: '',
                state: '',
                neigborhoodId: '',
                countOffers: 10,
                nextCall: moment()
            })
        }
    }

    render() {
        let btnStyle = {
            borderRadius: '5%',
            width: '100%',
            margin: '3px'
        }


        return(
            <section>
                <div className='row'>
                    <div className='col-md-10'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <Dropdowns 
                                  defaultValues={this.state}
                                  changeHandler={this.changeHandler}
                                />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-2'>
                                <Select 
                                 label='Покажи'
                                 options={[{value: 5, _id:5}, {value: 10, _id:10}]}
                                 defaultValue={5}
                                />
                            </div>

                            <div className='col-md-3'>
                                <DateSelector 
                                 label='Следващо обаждане'
                                 changeFn={this.changeHandlerDatePicker}
                                //  startDate={this.state.nextCall}
                                />
                            </div>

                            <div className='col-md-3'>
                                <Input 
                                 label='Телефон'
                                 changeFn={this.changeHandler}
                                 val={this.state.phoneNumber}
                                 name='phoneNumber'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='col-md-2'>
                        <button
                        name='search'
                        onClick={this.clickBtn}
                        className='border-radius-1 width-100 button btn-background-2'>Търси</button>
                        <button
                        name='clear'
                        onClick={this.clickBtn}
                        className='border-radius-1 width-100 button btn-background-5'>Изчисти</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default OffersFilters