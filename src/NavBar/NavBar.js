import React, { Component }  from 'react';
import {  Link } from "react-router-dom";
import './NavBar.css';

class NavBar extends Component {
    hidebar(){
        //console.log('clicked')
        const link = document.getElementById('navHambuger');
        document.getElementById('nav-check').checked = false;

        link.style.height ="0px";
    }

    togglebar(){

        const link = document.getElementById('navHambuger');
        const button =document.getElementById('nav-check');

        //console.log(button.checked);
        if(!link)
            return;
        if(button.checked){
            link.style.height = "100vh";
            document.getElementById('nav-check').checked = false;
        }else{
            link.style.height = "0px";
            document.getElementById('nav-check').checked = true;

        }
    }
    render() {
        return (

            <div className="nav">
                <div className="nav-header">
                    <div className="nav-title">
                        香港即時新聞
                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                <input type="checkbox" id="nav-check" onClick = {this.togglebar}/>
                <div className="nav-links" id ="navHambuger">
                    
                        <div>

                            <Link to="/" className ="b" onClick = {this.hidebar}>要聞</Link>
                            <Link to="/international" className ="b"onClick = {this.hidebar}>國際</Link>
                            <Link to="/business" className ="b"onClick = {this.hidebar}>商業</Link>
                            <Link to="/entertainment" className ="b"onClick = {this.hidebar}>娛樂</Link>
                            <Link to="/sport" className ="b"onClick = {this.hidebar}>體育</Link>
                            <Link to="/technology" className ="b"onClick = {this.hidebar}>科技</Link>
                            <Link to="/lifestyle" className ="b"onClick = {this.hidebar}>生活</Link>
                            <Link to="/science" className ="b"onClick = {this.hidebar}>科學</Link>

                        </div>
                    
                </div>
            </div>
        );
    }
} 
export default NavBar;