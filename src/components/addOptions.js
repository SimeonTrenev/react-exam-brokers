import { Component } from 'react';
import Input from './sharedComponents/Input'

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
                    value = {this.state.constructionType}
                    onChange = {this.onChangeValue}
                    />
                    <Input 
                    type = 'text'
                    label = 'Вид Имот'
                    placeholder = 'Вид Имот'
                    name = 'property'
                    value = {this.state.property}
                    onChange = {this.onChangeValue}
                    />
                    <Input 
                    type = 'text'
                    label = 'Състояние'
                    placeholder = 'Състояние'
                    name = 'state'
                    value = {this.state.state}
                    onChange = {this.onChangeValue}
                    />
                    <Input 
                    type = 'text'
                    label = 'Квартал'
                    placeholder = 'Квартал'
                    name = 'neighborhood'
                    value = {this.state.neighborhood}
                    onChange = {this.onChangeValue}
                    />
                </form>
                <button onClick={this.save}>Запази</button>
            </div>
        )
    }
}

export default AddOptions