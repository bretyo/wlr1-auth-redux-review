import React, { Component } from "react";
import axios from 'axios'
import {connect} from 'react-redux'
import {saveUser} from '../redux/authReducer'

class Auth extends Component{
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        const {email, password} = this.state;

        return(
            <div>
                <button>Log Out</button>
                <input name='email' value={email} onChange={this.handleChange} />
                <input name='password' value={password} onChange={this.handleChange} />
                <button>Login</button>
                <button>Register</button>
            </div>
        )
    }
}
export default connect((state)=>state, {saveUser})(Auth);