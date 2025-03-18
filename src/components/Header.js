import { useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router";



const Header = () => {
    const [btnName, setbtnName] = useState("login");

    //if no dependecy array  then useeffect is called on every render
    //if dependecy array is [] then useeffect is called on intial render onlu once
    //if dependecy array is [btnName] then useeffect is called on every time btnname is updated
    
    
    return(
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo"
                src ={LOGO_URL}
                />

            </div>

            <div className="nav-item">
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link  to="/about">About Us</Link>
                    </li>
                    <li>
                    <Link  to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        Cart
                    </li>
                    <button className="login"
                    onClick={
                        ()=>{
                           btnName === "login" ? setbtnName("logout") :setbtnName("login") ;
                        }
                    }>
                        {btnName}
                    </button>
                </ul>
            </div>

        </div>

    );
};

export default Header;