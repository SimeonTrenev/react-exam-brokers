import { Component } from 'react';
import Select from './sharedComponents/Select';
import Input from './sharedComponents/Input'
import DateSelector from './sharedComponents/DateSelector'

class AddOffer extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
                <Select></Select>
                <Input></Input>
                <DateSelector />
            </div>
        )
    }
}

export default AddOffer;

