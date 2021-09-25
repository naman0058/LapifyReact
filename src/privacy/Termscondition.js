import React from 'react'
import Card from '@material-ui/core/Card';
import Pfooter from './Pfooter'
import Footernew from '../Footernew'
function Termscondition() {
    return (
        <>
        <Card style={{display:'flex',margin:'40px 50px 0 50px'}}>
             <div style={{marginLeft:30,marginTop:130}}>
            <h1 style={{color:'#65f0f0',fontFamily:'cursive'}}> Terms & Conditions</h1>
            </div>
            <div style={{marginLeft:300,marginTop:50,marginBottom:20}}>
            <img alt='trms' style={{width:600,height:350}} src='https://thumbs.dreamstime.com/b/home-computing-terms-conditions-online-business-concept-man-using-laptop-terms-conditions-screen-screen-105056656.jpg'/>
            </div>
            </Card>
            <div style={{display:'flex'}}>
      <Pfooter/>
        <div style={{margin:'30px 0 0 40px'}}>
           <h5>Terms and Conditions for Cashify services:</h5> <br/>

By using it, you are agreeing to these Terms & Conditions (defined below). Please read them carefully.<br/> Manak Waste Management Pvt Ltd., formerly known as ReGlobe, doing business as “Cashify”<br/>

“Cashify” owns and operates the website, www.Cashify.in.<br/> The mobile touch versions, App on Play store and Apple App store and/or any<br/> site(s) we have now or in the<br/> future that reference these Terms & Conditions (collectively, “Cashify”), provides a marketplace<br/> and platform for consumers and organizations to sell or repair their used, old and other <br/>articles, and conduct varied transactions and activities, with third-party companies and other <br/>entities and persons (collectively, “Third Parties”). The Cashify marketplace, platform,<br/> and related functionality, whether provided through the Site or through other means,<br/> are collectively referred to as the services (the “Services”).

If you do not agree with any part of these Terms & Conditions,<br/> you must not use the Site or Services. Your continued use of the Site or Services will<br/> constitute your acceptance of these Terms & Conditions, as they may be modified by us from time<br/> to time, with or without notice to you. Please check this page regularly for updates to <br/>the Cashify Terms & Conditions.
        </div>
        </div>
        < Footernew/>
        </>
    )
}

export default Termscondition
