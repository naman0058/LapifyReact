import React from 'react'
import {Divider,} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Pfooter from './Pfooter'
import Footernew from '../Footernew'
function Refen() {
    return (
        <>
     
        <Card style={{display:'flex',margin:'40px 50px 0 50px'}}>
             <div style={{marginLeft:30,marginTop:130}}>
            <h1 style={{color:'#65f0f0',fontFamily:'cursive'}}> Refer & Earn Terms</h1>
            </div>
            <div style={{marginLeft:200,marginTop:50,marginBottom:20}}>
            <img style={{width:600,height:350}} src='https://thumbs.dreamstime.com/b/handwriting-text-writing-earn-points-concept-meaning-collecting-scores-order-qualify-to-win-big-prize-conceptual-photo-155156248.jpg'/>
            </div>
            </Card>
            <div style={{display:'flex'}}>
      <Pfooter/>
            <div style={{margin:'25px 0 0 40px'}}>
            <h6> Refer & Earn Terms</h6>
            <ul>
                <li>Your friend must not have registered with us before.</li>
                <li>The phone number which your friend will use to sign up shouldn’t have been used earlier for a Cashify  <br/> transaction.</li>
                <li>Cashify App should not be installed using App runtime for Chrome, emulators or simulators.</li>
                <li>It is only for the users based in India. The mobile number provided to receive OTP should be an Indian mobile <br/>number.</li>
                <li>If your friend uses someone else’s referral code, the person whose referral code is used will get the benefits even <br/>if you had referred him/her first.</li>
                <li>Points earned from Refer & Earn will be credited to Cashify Wallet as “My Points”.</li>
                <li>Points have validity. Please check this information in the Cashify Wallet section. If unutilised, points will cease to <br/>exist & will not be renewed.</li>
                <li>Points can neither be exchanged nor be transferred</li>
                <li>Only registered users can use My Points.</li>
                <li>The maximum referral bonus that can be earned by a referrer is capped and may differ for each referral offer.</li>
                <li>You cannot add funds directly to your Cashify wallet account. Only referral amount will get added to the wallet.</li>
                <li>Cashify reserves all rights to change the amounts conferred under Refer and Earn program at any point in time.</li>
                <li>Cashify may suspend or terminate the Refer and Earn program or any user’s ability to participate in the program <br/>at any time for any reason at their discretion. Points earned as a result of fraudulent activities will be revoked <br/>and deemed invalid.</li>
                
            </ul>
            </div>
            </div>
            < Footernew/>
            </>
    )
}

export default Refen
