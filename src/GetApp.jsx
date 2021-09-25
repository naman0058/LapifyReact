import React from 'react';
import "../src/css/GetApp.css"
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import SystemUpdateIcon from '@material-ui/icons/SystemUpdate';

function GetApp(props) {
    return (
        <>
        <div className="container-fluid">
        <div id="about">
            <div className="about-image">
                <img src={props.image} alt="Download" />
            </div>
            <div className="about-text">
                <h2>{props.title}</h2>
                <p>Get a link to download the app</p>
                    <NavLink exact className="navbar-brand text-dark" to="/">
                        <Button size="large" fontWeight="bold" endIcon={<SystemUpdateIcon />}>
                            Download</Button>
                    </NavLink>
                   
            </div>
               
        
                </div></div>
        </>
    )
}


export default GetApp;
