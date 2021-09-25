import React from 'react'
import Card from '@material-ui/core/Card';
import Pfooter from './Pfooter'
import Footernew from '../Footernew'
function Refend() {
    return (
        <>
     
        <Card style={{display:'flex',margin:'40px 50px 0 50px'}}>
             <div style={{marginLeft:30,marginTop:130}}>
            <h1 style={{color:'#65f0f0',fontFamily:'cursive'}}> Refund Policy</h1>
            </div>
            <div style={{marginLeft:300,marginTop:50,marginBottom:20}}>
            <img alt='jdj' style={{width:600,height:350}} src='https://thumbs.dreamstime.com/b/man-take-paper-text-refund-policy-shirt-office-background-190982857.jpg'/>
            </div>
            </Card>
            <div style={{display:'flex'}}>
      <Pfooter/>
        <div style={{margin:'30px 0 0 40px'}}>
            <h6>Cashify Repair offers you a 6 month warranty along with a refund</h6>
Here is how you can claim your refund for the Screen replaced with us:

1. We provide a 6 months warranty with a refund on every screen replacement<br/> under the following conditions –
Screen/LCD that malfunction, or does not work as intended or designed.<br/> 
ANY display issues that may arise without any manual intervention and<br/>  are related to the screen quality specifically dead pixels and touch issues.<br/> 
 
If the screen replaced by us causes any above-mentioned issues, you can claim a <br/> brand new screen with the continued warranty of 6 months! or get a refund of your screen<br/>  within 7 days of service date by returning our screen back. All you need to do is:<br/> 
. Share the video of the phone with the prevailing display issue @ support@cashify.in.<br/> 
Send us your phone number/order number/IMEI Number. Just about any of it @ support@cashify.in.<br/> 
Our Customer Service Associate will respond to you within 48 hours and schedule our technician visit to replace your screen!
        </div>
        </div>
        < Footernew/>
        </>
    )
}

export default Refend
