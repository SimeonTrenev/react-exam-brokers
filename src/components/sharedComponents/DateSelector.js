import React, { Component } from 'react';
import DatePicker from 'react-datepicker'
// import moment from 'moment'
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css'

class DateSelector extends Component {

    // constructor(props){
    //     super(props)

    //     this.state= {
    //         startDate: moment()
    //     };
    //     this.handleChange = this.handleChange.bind(this)
    // }

    // handleChange(date){
    //     this.setState({
    //         startDate: date
    //     })
    // }

    render(){
        return(
            <div className='form-group'>
                <label>{this.props.label}</label>
                <DatePicker 
                selected={this.props.startDate}
                onChange={this.props.changeFn}
                />
            </div>
        )
    }
}

export default DateSelector;