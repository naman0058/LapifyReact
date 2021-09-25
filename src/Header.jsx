import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.min.css';
import {NavLink} from 'react-router-dom';
import '../src/css/header.css'
import {Button} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import logo from "../src/images/logo.png";

const Header = ()=>{

    return(
        <>
           
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                {/* style={{width:90,height:50}}  */}

                    <NavLink exact className="navbar-brand " to="/"><img style={{width:200,height:50}} src='https://gust-production.s3.amazonaws.com/uploads/startup/logo_image/110191/logo.png' alt="lapify Logo" className="logo" /></NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Start Typing..." aria-label="Search" style={{ width:700 }} />
                            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                        </form>

                        <ul className="navbar-nav text-center ml-auto " style={{ paddingLeft:100 }}>
                            <li>
                                <NavLink exact className="navbar-brand text-dark" to="/Sell-components/SearchLaptop">
                                    <Button color="dark"  size="large" fontWeight="bold" startIcon={<LaptopMacIcon />}>Sell Laptops</Button>
                                </NavLink>
                            </li>
                            <li className="nav-item" style={{marginRight:5}}>
                                <NavLink className="nav-link active"  aria-current="page" to="/"><LocationOnIcon />Location</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link active" style={{marginRight:30}} aria-current="page" to="./Login"><AccountCircleIcon />Login</NavLink>
                            </li>



                            </ul>

                    </div>
                </div>
            </nav>
            <hr />

            {/* <hr />


            <div className="col-12 mx-auto" style={{
                backgroundColor: "white", margin: 10, paddingTop: 10,
                borderradius: 10, transition: "ease-in-out", boxShadow: "10px 10px 12px rgba(0,0,0,0.1)",
                overflow: "hidden",
                position: "relative", display: "flex", flexDirection: "column"
            }}>


                <NavLink exact className="navbar-brand text-dark" to="/Sell-components/SearchLaptop">
                    <Button color="primary" size="large" fontWeight="bold" endIcon={<LaptopMacIcon />}>Sell Laptops</Button>
                </NavLink>

            </div> */}




        </>
    )
}

export default Header;