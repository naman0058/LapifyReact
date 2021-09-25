import React from 'react'
import Card from '@material-ui/core/Card';
import Pfooter from './Pfooter'
import Footernew from '../Footernew'
function Cookie() {
    return (
        <>
        <Card style={{display:'flex',margin:'40px 50px 0 50px'}}>
        <div style={{marginLeft:30,marginTop:130}}>
       <h1 style={{color:'#65f0f0',fontFamily:'cursive'}}> Coocie Policy</h1>
       </div>
       <div style={{marginLeft:300,marginTop:50,marginBottom:20}}>
       <img style={{width:600,height:350}} src='https://thumbs.dreamstime.com/b/cookie-policy-write-sticky-note-isolated-wooden-table-187284107.jpg'/>
       </div>
       </Card>
       <div style={{display:'flex'}}>
 <Pfooter/>
        <div  style={{margin:'30px 0 0 40px'}}>
            Manak Waste Management Private Limited (Cashify) uses cookies<br/>
at https://www.cashify.in (the Website) to distinguish you from other users of this Website. This helps us to provide you with a good <br/>experience when you browse our Website and also allows us to improve our Website. By using this Website, you consent to our use<br/> of cookies in accordance with this Cookie Notice. You will have seen a pop up to this effect on your first visit to the Website.<br/> Although it will not usually appear on subsequent visits, you may withdraw your consent at any time by following the instructions below, <br/>including by changing your browser settings so that cookies from this Website cannot be placed on your device. <br/>Please note that some of the services on the Website will not function so well if cookies are disabled. <br/>After your initial visit to the Website we may change the cookies we use. This cookies policy will always allow you to know who is placing cookies,<br/> for what purpose and give you the means to disable them so you should check it from time to time.<br/>
<br/>
<h6>What is a Cookie?</h6>

<p>A cookie is a small file of letters and numbers that are sent to and stored on your computer, smartphone or other device for accessing<br/> the internet, whenever you visit a site. Cookies are useful because they allow a website to recognize a user’s device.<br/>
We use cookies for a variety of reasons, such as letting you navigate between pages efficiently, remembering your preferences and <br/>generally improving the user experience. Session cookies are deleted automatically when you close your browser and persistent<br/> cookies remain on your device after the browser is closed (for example to remember your user preferences when you return <br/>to the site).
</p><br/>
<h6>How and Why the Website Uses Cookies</h6>
<p>
The cookies we use are completely safe. In fact, many of them are used purely to provide important security features such as <br/>protecting your data. Overall, cookies help us provide you with a better Website and service, by enabling us to monitor which pages <br/>you find useful and which you do not.

<br/>
</p>
<p>
We use cookies to safeguard your privacy when you’re browsing the Website. We also use them to give you the best experience when<br/> you visit this Website. By using cookies, we can make it easier for you to do many things, such as managing your accounts, policies, <br/>or login details, and selecting for products and services. Cookies can also allow us to tailor the content of this Website so we can show<br/> you services or adverts we think you may be interested in.</p><br/>
        <h6>What Cookies Do We Use On Our Website ?</h6>
        <p>


Essential or “strictly necessary” cookies: as you might guess, essential cookies enable essential functionality of the site to work, <br/>for example ensuring that you can move between pages on the Website securely. This category of cookies cannot be disabled. <br/>For example, session cookies needed to transmit the Website, authentication cookies, and security cookies. We use the following cookies:</p><br/>
        </div>
        </div>
        < Footernew/>
        </>
    )
}

export default Cookie
