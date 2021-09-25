import React from 'react'
import Pfooter from './Pfooter'
import Card from '@material-ui/core/Card';
import Footernew from '../Footernew'
function Terms() {
    return (
        <>
        <div>
        
        <Card style={{display:'flex',margin:'40px 50px 0 50px'}}>
             <div style={{marginLeft:30,marginTop:130}}>
            <h1 style={{color:'#65f0f0',fontFamily:'cursive'}}> Terms of Use</h1>
            </div>
            <div style={{marginLeft:300,marginTop:50,marginBottom:20}}>
            <img alt='team' style={{width:600,height:350}} src='https://thumbs.dreamstime.com/b/creative-team-meeting-to-discuss-terms-use-original-product-colors-design-coworking-space-teamwork-modern-189300071.jpg'/>
            </div>
            </Card>
            <div style={{display:'flex'}}>
      <Pfooter/>
        <div style={{margin:'30px 0 0 40px'}}>
            <p> Please read these terms of use carefully before using this website (“cashify”).<br/> These website terms of use (the “terms of use”) govern your access to <br/>and use of the website. the website is available for your use only on the condition<br/> that you agree to the terms of use set forth below. If you do not ag<br/>ree to all of the terms of use, do not access or use the website. by accessing or using<br/> the website, you and the entity you are authorized to repre<br/>sent (“you” or “your”) signify your agreement to be bound by the terms of use.</p>
        </div>
        </div>
        </div>
        < Footernew/>
        </>
    )
}

export default Terms
