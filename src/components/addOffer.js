import { Component } from 'react';
import Select from './sharedComponents/Select';
import Input from './sharedComponents/Input'
import DateSelector from './sharedComponents/DateSelector'
import Dropdowns from './sharedComponents/Dropdowns'

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
                <Dropdowns />
            </div>
        )
    }
}

export default AddOffer;

