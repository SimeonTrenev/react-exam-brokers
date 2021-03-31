import { Component } from 'react';
import Input from './sharedComponents/Input'
import axios from 'axios'

class AddOptions extends  Component {
    constructor(props){
        super(props)

        this.state = {
            constructionType: '',
            property: '',
            state: '',
            neighborhood: '',
        }
    }

    save = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.setState({
            constructionType: '',
            property: '',
            state: '',
            neighborhood: '',
        })
        axios.post('/add-types', this.state)
        .then(ressponse => console.log(Response))
    };

  

    onChangeValue = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    render() {
        return(
            <div>
                <form>
                    <Input 
                    type = 'text'
                    label = 'Вид Строителство'
                    placeholder = 'Вид Строителсво'
                    name = 'constructionType'
                    val = {this.state.constructionType}
                    changeFn = {this.onChangeValue}
                    />
                    <Input 
                    type = 'text'
                    label = 'Вид Имот'
                    placeholder = 'Вид Имот'
                    name = 'property'
                    val = {this.state.property}
                    changeFn = {this.onChangeValue}
                    />
                    <Input 
                    type = 'text'
                    label = 'Състояние'
                    placeholder = 'Състояние'
                    name = 'state'
                    val = {this.state.state}
                    changeFn = {this.onChangeValue}
                    />
                    <Input 
                    type = 'text'
                    label = 'Квартал'
                    placeholder = 'Квартал'
                    name = 'neighborhood'
                    val = {this.state.neighborhood}
                    changeFn = {this.onChangeValue}
                    />
                </form>
                <button onClick={this.save} className="btn btn-success">Запази</button>
            </div>
        )
    }
}

export default AddOptions