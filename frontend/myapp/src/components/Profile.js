import { Component } from "react";
import User1 from "./User1.js"
import './Profile.css'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import Card from "./Card.js";

class Profile extends Component{

    
  
    
    render(){

        const LogoutP=()=>{
            Cookies.remove('token')

        }

     

        return(
            <div className="logo-card1">
                <div className="profilec">
                    <User1/>
                    <Link to='/updatedata'><button className="toggle-button">Update Profile</button></Link>
                    <Link to='/'><button onClick={LogoutP} className="toggle-button">LogOut</button></Link>

                </div>

                <div className="cc">
                    <div className="t">
                        
                        <div>
                            <Card/>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Profile