import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthService from './AuthService';
import { useEffect } from 'react';
import './Login.css'
import './App2.css'
import './Home.css'

const Login = () => {
    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        let result = validateValues();

        if (result === true) {
            try {
                const response = await AuthService.login({ userName, password });
                setMessage(response.data);
                if (response.data === 'Login successful') {
                    navigate('/frontpage');
                } else {
                    setMessage('Invalid credentials');
                }
            } catch (error) {
                setMessage('Invalid credentials');
            }
        } else {
            // alert("Please Enter the Valid Inputs!!!");
        }
    };


    const validateValues = () => {
        if (userName.length === 0) {
            alert("Please enter User Name !!! ");
            return false;
        }
        else if (password.length === 0) {
            alert("Please enter Password !!! ");
            return false;
        }
        else {
            return true;
        }
    }

    return (

        <div class="register">
            {message && <div className="alert alert-info">{message}</div>}
            <form onSubmit={handleLogin} class="form">
                <p class="title" data-testid="head">Login </p>
                <p class="message" role="desc">Login now and get full access to our app. </p>

                <label>
                    <input class="input" name="username" type="userName" placeholder="" value={userName} onChange={(e) => setuserName(e.target.value)}></input>
                    <span role="username" >Username</span>
                </label>
                <label>
                    <input class="input" name="password" type="password" placeholder="" value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                    <span role="password" >Password</span>
                </label>
                <button class="submit" role="submit" name="submit">Submit</button>

            </form>

        </div>

    )
}


export default Login