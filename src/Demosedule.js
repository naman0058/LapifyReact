import React from 'react'
import { Button,Box,Divider } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import Radio from '@material-ui/core/Radio';
import {NavLink} from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Footer from './Footer'
//import Datepicker from './Datepicker'
import PaymentAlert from './PaymentAlert'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import Footernew from './Footernew'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//import "react-datepicker/dist/react.css";


function Demosedule(props) {

  const [products,setProducts]=useState(JSON.parse(localStorage.getItem('demosedule')))
  const [value, onChange] = useState(new Date());


  const handleOnClick=(products)=>{
    // console.log("calling handle event",JSON.parse(data))
    props.history.push({
         pathname:"/paymentpage",
      state:products
        
        })
  
        localStorage.setItem('Paymentpage',JSON.stringify(products))
  
       
  }






    return (
        <>
        
         <div style={{marginTop:150}}>
         <div style={{margin:'30px 0 0 105px',}}>
      
            <Button variant="contained"  style={{backgroundColor:'#0ebbf0',color:'white',width:130,height:40,}}>
            <ArrowBackIcon/>
            <NavLink to='/address' className="nav-link" style={{color:'white'}}>BACK</NavLink>
</Button>

  </div>
           <div style={{}}>
       <div style={{display:'flex'}}>
       


   <div style={{marginTop:40,}}>
<Grid container >
           
           <Box
             boxShadow={2}
             bgcolor="background.paper"
             m={1}
             p={1}
             style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',marginLeft:80, width: '48rem', height: '44rem',borderRadius:20,}}
           >
           <div style={{padding:15}}>
      <h1 style={{fontWeight:24,fontSize:28}}>Schedule Appointment</h1>
      <div style={{alignItems:'center',display:'flex'}}>
      <Button variant="contained"  style={{marginTop:20,backgroundColor:'#0ebbf0',color:'white'}}>
  AS soon AS POSSIBLE
</Button><strong style={{marginLeft:20,marginTop:20}}>Tuesday, August 17 - 02:00 PM - 05:00 PM</strong>
      </div>
      <h1 style={{fontWeight:5,fontSize:30,marginTop:10}}>or</h1>
      <div style={{marginTop:20,fontSize:20}}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMI4H385Led3YjwGqUMnd1lkHKNgrUuvxfw&usqp=CAU' style={{width:50,height:50}}/><span style={{marginLeft:15,fontWeight:'bold'}}>Please select your preferable pickup date</span>
      </div>
      <div style={{display:'flex',marginTop:10}}>
      <div >
      <Calendar
        onChange={onChange}
        value={value}
     
      />
    </div>
      {/* <Box
     boxShadow={2}
     bgcolor="background.paper"
     m={1}
     p={1}
     style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',backgroundColor:'#ebf0ec', width: '10rem', height: '7rem',borderRadius:20,padding:25,alignItems:'center',justifyContent:'center'}}
   > <label>Tuesday</label><p style={{marginTop:5,fontSize:40}}>17</p></Box>
        <Box
     boxShadow={2}
     bgcolor="background.paper"
     m={1}
     p={1}
     style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',backgroundColor:'#ebf0ec', width: '10rem', height: '7rem',borderRadius:20,padding:25 }}
   >
       <label>Tuesday</label><p style={{marginTop:5,fontSize:40}}>18</p>
       </Box>
        <Box
     boxShadow={2}
     bgcolor="background.paper"
     m={1}
     p={1}
     style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',backgroundColor:'#ebf0ec', width: '10rem', height: '7rem',borderRadius:20,padding:25 }}
   >
        <label>Tuesday</label><p style={{marginTop:5,fontSize:40}}>19</p>
   </Box>
        <Box
     boxShadow={2}
     bgcolor="background.paper"
     m={1}
     p={1}
     style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',backgroundColor:'#ebf0ec', width: '10rem', height: '7rem',borderRadius:20,padding:25 }}
   >
        <label>Tuesday</label><p style={{fontSize:40,fontSize:40}}>20</p>
   </Box> */}
   </div>
   <div style={{padding:5,marginTop:30,fontSize:20}}>
   <AvTimerIcon style={{width:30,height:30}} /><span style={{marginLeft:10}}> Your availability on that day</span> 
   </div>
   <Button style={{margin:'10px 0 0 10px',width:200,backgroundColor:'#0ebbf0',color:'white'}} variant="contained" >
  02:00pm-05:00pm
</Button><span>
<Button style={{margin:'10px 0 0 15px', width:200,backgroundColor:'#0ebbf0',color:'white'}} variant="contained">
  05:00-08:00
</Button>
</span>
</div>
        </Box>
           
           
      
      </Grid>
      </div>






<div>
              <Box
                boxShadow={3}
                bgcolor="background.paper"
                m={1}
                p={1}
                style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',marginTop:60, width: '25rem', height: '20rem',marginLeft:40,borderRadius:20 }}
              >
                <h1 style={{fontStyle:'italic'}}>Price Summary</h1>
                <Divider/>
                <div style={{marginTop:20}}>
                
                <span style={{marginTop:20,fontStyle:'italic'}}>Base Price</span>
                <span style={{marginLeft:225,fontStyle:'italic'}}>{products.price}</span>
                </div>
                <Divider style={{marginTop:20}}/>
                 <div>
                <span style={{marginTop:20,fontStyle:'italic'}}>Pickup Charges</span>
                <span style={{marginLeft:'170px',color:'blue',fontStyle:'italic'}}>
                Free
                </span>
                <span style={{marginLeft:'5px',fontStyle:'italic'}}>
                ₹100
                </span>
                </div>
                <Divider style={{marginTop:15}}/>
                
                <div style={{marginTop:15}}>
                <span style={{fontStyle:'italic'}}>Total Amount</span>
                
                <span style={{marginLeft:'210px',fontStyle:'italic'}}>
                ₹18,320
                </span>
                </div>
              
              
    
                <Button onClick={()=>handleOnClick(products)}  style={{width:'85%',height:40,borderRadius:10,backgroundColor:'#0ebbf0',color:'white', marginLeft:29,marginTop:30}} variant="contained"   endIcon={<ArrowRightAltIcon />} >
                <NavLink exact className="nav-link" to='/PaymentPage' style={{color:'white'}}>  Continue</NavLink></Button>
              </Box>


         



             
<div style={{marginReft:20}}>
      
     

      <Box>
      <Box
        boxShadow={2}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',marginLeft:40, width: '25rem', height: '12rem',marginTop:35,borderRadius:20 }}
      >
        <strong> Payment Options</strong>
        <div style={{marginTop:10  ,justifyContent:'space-between',marginLeft:20,padding:10,border:'2px gray'}}>
          <img style={{width:80,height:35,border:'1px solid'}} src='https://www.cashify.in/static/buy-back/options/upi.png'/>
          <img style={{width:80,height:35,border:'1px solid'}}  src='https://www.cashify.in/static/buy-back/options/paytm.png'/>
          <img style={{width:80,height:35,border:'1px solid'}} src='https://www.cashify.in/static/buy-back/options/amazon.png'/>
          <img style={{width:80,height:35,border:'1px solid'}} src='https://www.cashify.in/static/buy-back/options/paytm.png'/>
        </div>

        <div style={{marginTop:10  ,justifyContent:'space-between',marginLeft:20,padding:10,border:'2px gray'}}>
          <img style={{width:80,height:35,border:'1px solid'}} src='https://www.cashify.in/static/buy-back/options/airtel.png'/>
          <img style={{width:80,height:35,border:'1px solid'}}  src='https://www.cashify.in/static/buy-back/options/croma.png'/>
          <img style={{width:80,height:35,border:'1px solid'}} src='https://www.cashify.in/static/buy-back/options/flipkart.png'/>
          <img style={{width:80,height:35,border:'1px solid'}} src='https://www.cashify.in/static/buy-back/options/tatacliq.png'/>
        </div>
      </Box>
      </Box>
      
      <Box>
     
      </Box>
      </div>
      </div>
      </div>
      </div>
      </div>
<div>
      <Footernew/>
</div>

            
          





        </>
    )
}

export default Demosedule
