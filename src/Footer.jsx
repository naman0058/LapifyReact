import React from 'react'
import {NavLink} from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = ()=>{
    return (
        <>
            
                <footer id="footer" style={{backgroundColor:"#6b6160"}}>
                <hr />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row pb-5">
                                <div className="col-md-4 pt-5">

                                    <NavLink exact to="#" className="nav-link text-white">
                                        Sell Laptops
                                   </NavLink>
                                    <NavLink exact to="/About" className="nav-link text-white">
                                        About Us
                                   </NavLink>
                                    <NavLink exact to="/Contact" className="nav-link text-white">
                                        Contact Us
                                   </NavLink>
                                    <NavLink exact to="/Privacypolicy" className="nav-link text-white">
                                        Privacy Policy
                                   </NavLink>

                                </div>


                                <div className="col-md-4 pt-5">

                                    <NavLink exact to="#" className="nav-link text-white" >
                                        Sell Laptop
                                   </NavLink>
                                    <NavLink exact to="/About" className="nav-link text-white">
                                        About Us
                                   </NavLink>
                                    <NavLink exact to="/Contact" className="nav-link text-white">
                                        Contact Us
                                   </NavLink>
                                    <NavLink exact to="/Privacypolicy" className="nav-link text-white">
                                        Privacy Policy
                                   </NavLink>

                                </div>


                                <div className="col-md-4 pt-5">
                                    
                                    <NavLink exact to="#" className="nav-link text-white">
                                        {<FacebookIcon />}
                                   </NavLink>
                                    <NavLink exact to="#" className="nav-link text-white">
                                        {<InstagramIcon/>}
                                   </NavLink>
                                    <NavLink exact to="#" className="nav-link text-white">
                                        {<TwitterIcon/>}
                                   </NavLink>
                                    <NavLink exact to="#" className="nav-link text-white">
                                        {<YouTubeIcon/>}
                                   </NavLink>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <h4 className="text-center text-dark pb-5" style={{marginRight:80,color:'white'}}>Copyright © 2021 Lapify</h4>
                
                </footer>
        </>
        
    )
}

export default Footer;