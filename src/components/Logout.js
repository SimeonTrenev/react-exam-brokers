import { Component } from 'react';

class Logout extends Component{

    logout(){
        localStorage.clear();
        window.location.href='/';
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