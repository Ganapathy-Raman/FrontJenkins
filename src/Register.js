import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthService from './AuthService';
import { useEffect } from 'react';
import './Login.css'
import './App2.css'
import './Home.css'

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setuserName] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [userNameError, setuserNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        let result = validateValues();

        if (result === true) {
            try {
                const response = await AuthService.register({ firstName, lastName, userName, email, password });
                setMessage(response.data);
                if (response.data === 'User registered successfully') {
                    navigate('/Login');
                }
            } catch (error) {
                setMessage('Registration failed');
            }
        } else {

        }
    };

    const validateValues = () => {
        if (firstName.trim() === '') {
            alert("Please enter First Name !!! ");
            return false;
        }
        if (lastName.trim() === '') {
            alert("Please enter Last Name !!! ");
            return false;
        }
        if (userName.trim() === '') {
            alert("Please enter User Name !!! ");
            return false;
        }
        if (email.trim() === '') {
            alert("Please enter Email !!! ");
            return false;
        }
        if (password.trim() === '') {
            alert("Please enter Password !!! ");
            return false;
        }
        if (confirmpassword.trim() === '') {
            alert("Please enter Confirm Password !!! ");
            return false;
        }


        const regexUser = /^[a-zA-Z0-9_]{3,20}$/;
        const regexUpperCase = /[A-Z]/;
        const regexSymbol = /[!@#$%^&*(),.?":{}|<>]/;
        const regexNumber = /[0-9]/;

        if (!regexUser.test(userName)) {
            setuserNameError('User Name must be in length of 3 to 20');
            return false;
        }

        if (!regexUpperCase.test(password)) {
            setPasswordError('Password must contain at least one uppercase letter');
            return false;
        }
        if (!regexSymbol.test(password)) {
            setPasswordError('Password must contain at least one symbol');
            return false;
        }
        if (!regexNumber.test(password)) {
            setPasswordError('Password must contain at least one number');
            return false;
        }
        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
            return false;
        }


        return true;
    }


    return (

        <div class="register">
            {message && <div className="alert alert-info">{message}</div>}
            <form onSubmit={handleRegister} class="form">
                <p class="title" data-testid="head">Register </p>
                <p class="message" role="desc">Register now and get full access to our app. </p>
                <div class="flex">
                    <label>
                        <input class="input" name="firstname" type="text" placeholder="" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                        <span role="fname">Firstname</span>
                    </label>

                    <label>
                        <input class="input" name="lastname" type="text" placeholder="" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                        <span role="lname">Lastname</span>
                    </label>
                </div>
                <label>
                    <input class="input" name="username" type="text" placeholder="" value={userName} onChange={(e) => { setuserName(e.target.value); setuserNameError(''); }}></input>
                    <span role="uname">Username</span>
                    {userNameError && <p className="text-danger">{userNameError}</p>}
                </label>

                <label>
                    <input class="input" name="email" type="email" placeholder="" value={email} onChange={(e) => setemail(e.target.value)}></input>
                    <span role="email">Email</span>
                </label>

                <label>
                    <input class="input" name="password" type="password" placeholder="" value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setPasswordError('');
                        }} />
                    <span role="pwd">Password</span>
                </label>
                <label>
                    <input class="input" name="password" type="password" placeholder="" value={confirmpassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            setPasswordError('');
                        }} />
                    <span role="cpwd">Confirm password</span>
                    {passwordError && <p className="text-danger">{passwordError}</p>}
                </label>
                <button class="submit" name = "submit" role="submit">Submit</button>
                <p class="signin" role="alr">Already have an acount ? <a href="/login">Signin</a> </p>
            </form>

        </div>

    )
}


export default Register