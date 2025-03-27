import { useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";



const Header = () => {
    const [btnName, setbtnName] = useState("login");

    const onlineStatus = useOnlineStatus();

    //if no dependecy array  then useeffect is called on every render
    //if dependecy array is [] then useeffect is called on intial render onlu once
    //if dependecy array is [btnName] then useeffect is called on every time btnname is updated
    
    
    return(
        <div className="flex justify-between bg-pink-100  shadow-lg" >
            <div className="logo-container">
                <img 
                className="w-38"
                src ={LOGO_URL}
                />

            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-4" >
                    <li className="px-5">
                        online status : {onlineStatus ? "🟢" : "🔴"} 
                    </li>
                    <li className="px-5">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="px-5">
                    <Link  to="/about">About Us</Link>
                    </li>
                    <li className="px-5">
                    <Link  to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-5">
                    <Link  to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-5">
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