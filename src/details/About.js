import React from 'react'
import {Card,Divider} from '@material-ui/core';
import { CardGroup } from 'react-bootstrap';
import Footernew from '../Footernew'

function About() {
    return (
        <>
        <Card style={{display:'flex',margin:'50px 50px 0 50px'}}>
             <div style={{marginTop:150,marginLeft:50}}>
            <h1 style={{fontFamily:'cursive'}}>We’re All About</h1>
            <h1 style={{color:'#65f0f0',fontFamily:'cursive'}}>Laptopes</h1>
            </div>
            <div>
                <img style={{width:600,height:400,margin:'50px 50px 50px 200px'}} src='https://www.wallpaperflare.com/static/934/559/809/laptop-table-cup-and-laptop-laptop-on-table-wallpaper.jpg'/>
            </div>
        </Card>
        <div>
       <h1 style={{marginLeft:500,marginTop:30}}> About Us</h1>
       <Divider style={{border:'1px solid',margin:'0 680px 0 500px'}}/>

       <div>
       <p  style={{marginLeft:300,marginTop:30}}>  When it comes to smartphones, we’re the only one place that does it all. <br/><span style={{marginLeft:200}}> At Cashify, you get</span></p>
         
         </div>
        </div> 
        <div style={{display:'flex',justifyContent:'space-between',margin:'40px 30px 0 30px'}}>
        <Card style={{width:700,height:400,marginLeft:250,marginBottom:30}}>
         <img  src='https://thumbs.dreamstime.com/b/us-businessman-working-modern-technology-73677146.jpg'/>
        </Card>
        
       
        </div> 
        <Footernew/> 
        </>
    )
}

export default About
