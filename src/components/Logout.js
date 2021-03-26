import { Component } from 'react';
import axios from 'axios';

class Logout extends Component{

    constructor(props){
        super(props)
    }

    logout(){
        axios.get('/clearCookie')
            .then(response => console.log(response))
            .catch(err => console.log(err));
            this.props.history.push('/')
        // window.location.href='/';
    }

    render() {
        return(
            <div>
                <a href='/logout' onClick={this.logout()}>Logout</a>
            </div>
        )
    }
}

export default Logout