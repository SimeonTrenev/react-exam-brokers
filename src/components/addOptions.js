import { Component } from 'react';
import Input from './sharedComponents/Input'

class AddOptions extends  Component {
    constructor(props){
        super(props)

        this.state = {
            constructionType: '',
            property: '',

        }
    }

    save = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.setState({
            constructionType: '',
            property: '',

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
                </form>
                <button onClick={this.save}>Запази</button>
            </div>
        )
    }
}

export default AddOptions