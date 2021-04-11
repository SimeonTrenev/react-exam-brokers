import React, {useState} from 'react';
import axios from 'axios';
import InputError from './sharedComponents/InputError'


function RegistrationForm(props) {
    const [state , setState] = useState({
        email : "",
        password : "",
        confirmPassword: "",
    })

    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    const redirectToHome = () => {
        
        props.history.push('/home');
    }
    const redirectToLogin = () => {
        props.history.push('/login'); 
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword && state.password.length >= 5 && state.email.length >= 5 && validateEmail(state.email)) {
            // sendDetailsToServer()
            axios.post('/register', state)
            .then(response => console.log(response))
            .catch(err => console.log(err))
            redirectToLogin()
        }else{
            if(state.password.length < 5 || state.confirmPassword.length < 5){
                setErrorMessage('Password is too short!')
                state.password = ''
                state.email = ''
                state.confirmPassword = ''
            }else if(state.email.length < 5){
                setErrorMessage('Email is too short!')
                state.password = ''
                state.email = ''
                state.confirmPassword = ''
            }else if(!validateEmail(state.email)){
                setErrorMessage('Email is wrong!Try again :)')
                state.password = ''
                state.email = ''
                state.confirmPassword = ''
            }else{
                setErrorMessage('Passwords does not match!')
                state.password = ''
                state.email = ''
                state.confirmPassword = ''
            }
            
          
        } 
        
    }
    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={state.email}
                       onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                        value={state.confirmPassword}
                        onChange={handleChange} 
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <InputError>{errorMessage}</InputError>
            <div className="mt-2">
                <span>Already have an account? </span>
                <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> 
            </div>
            
        </div>
    )
}



export default RegistrationForm