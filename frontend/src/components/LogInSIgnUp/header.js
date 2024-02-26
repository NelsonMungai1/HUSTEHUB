import React, { useState } from 'react';
import './Header.css'
import logo from "../Assets/logo.png";
import accountIcon from "../Assets/person.png";
import BsTabs from './BsTabs'; 
const Header=()=>{
    const [showForms,setShowForms]=useState(false);
    const toggleForms=()=>{
        setShowForms(!showForms);
    };

    return(
        <>
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Lo go"/>
            </div>
            <nav>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Contact</a></li>
                    <li onClick={toggleForms}>
                        <img src={accountIcon} alt="account"/>
                    </li>
                </ul>
            </nav>
        </header>        
        <div className={`forms-container ${showForms ?'show':'show'}`}>
            <BsTabs/>
        </div>
        </>

    )
}
export default Header;