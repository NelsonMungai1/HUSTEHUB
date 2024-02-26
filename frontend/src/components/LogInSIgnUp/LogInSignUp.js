import React, { useState } from 'react';
import axios from 'axios';
import './LogInSignUp.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LogInSignUp = () => {
    const [action, setAction] = useState("Sign Up");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async () => {
        try {
            const response = await axios.post('https://dummyjson.com/auth/login', {
                name,
                email,
                password,
            });
            console.log(response.data); // handle success response
        } catch (error) {
            console.error(error); // handle error
        }
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://dummyjson.com/auth/login', {
                email,
                password,
            });
            console.log(response.data); // handle success response
        } catch (error) {
            console.error(error); // handle error
        }
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === "Login" ? null : <div className='input'>
                    <img src={user_icon} alt="/" />
                    <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
                </div>}
                <div className='input'>
                    <img src={email_icon} alt="/" />
                    <input type="email" placeholder='Email Id' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='input'>
                    <img src={password_icon} alt="/" />
                    <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            {action === "Sign Up" ? null : <div className="forgot-password">Forgot password?<span>Click here</span></div>}

            <div className="submit-container">
                {/* dynamic assignment of class names */}
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { handleSignUp(); setAction("Sign Up") }}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { handleLogin(); setAction("Login") }}>Log In</div>
            </div>
        </div>
    );
};

export default LogInSignUp;
