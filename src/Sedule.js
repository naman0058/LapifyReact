import React from 'react'
import { Button,Box,Divider } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import Radio from '@material-ui/core/Radio';
import {Link} from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Footer from './Footer'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AvTimerIcon from '@material-ui/icons/AvTimer';




function Sedule() {
    return (
        <>
        <div style={{backgroundColor:'#ebf0ec',padding:10}}>
    
     <div style={{margin:'40px 0 0 90px'}}>
         <Button variant="contained" color="primary">
         <ArrowBackIcon/>
BACK
</Button>
</div>

<div style={{display:'flex',backgroundColor:'#ebf0ec'}}>
<div>
<Grid container >
        
        <Box
          boxShadow={2}
          bgcolor="background.paper"
          m={1}
          p={1}
          style={{marginTop:30,marginLeft:90, width: '46rem', height: '30rem',borderRadius:10,}}
        >
<div style={{padding:15}}>
      <h1 style={{fontWeight:24,fontSize:28}}>Schedule Appointment</h1>
      <div style={{alignItems:'center',display:'flex'}}>
      <Button variant="contained" color="primary" style={{marginTop:20}}>
  AS soon AS POSSIBLE
</Button><strong style={{marginLeft:20,marginTop:20}}>Tuesday, August 17 - 02:00 PM - 05:00 PM</strong>
      </div>
      <h1 style={{fontWeight:5,fontSize:30,marginTop:10}}>or</h1>
      <AssignmentIndIcon/><span style={{marginLeft:15,fontWeight:'bold'}}>Please select your preferable pickup date</span>
      <div style={{display:'flex',marginTop:10}}>
      <Box
     boxShadow={2}
     bgcolor="background.paper"
     m={1}
     p={1}
     style={{backgroundColor:'#ebf0ec', width: '10rem', height: '7rem',borderRadius:10,padding:25,alignItems:'center',justifyContent:'center'}}
   > <label>Tuesday</label><p style={{marginTop:5,fontSize:40}}>17</p></Box>
        <Box
     boxShadow={2}
     bgcolor="background.paper"
     m={1}
     p={1}
     style={{backgroundColor:'#ebf0ec', width: '10rem', height: '7rem',borderRadius:10,padding:25 }}
   >
       <label>Tuesday</label><p style={{marginTop:5,fontSize:40}}>18</p>
   </Box>
        <Box
     boxShadow={2}
     bgcolor="background.paper"
     m={1}
     p={1}
     style={{backgroundColor:'#ebf0ec', width: '10rem', height: '7rem',borderRadius:10,padding:25 }}
   >
        <label>Tuesday</label><p style={{marginTop:5,fontSize:40}}>19</p>
   </Box>
        <Box
     boxShadow={2}
     bgcolor="background.paper"
     m={1}
     p={1}
     style={{backgroundColor:'#ebf0ec', width: '10rem', height: '7rem',borderRadius:10,padding:25 }}
   >
        <label>Tuesday</label><p style={{fontSize:40,fontSize:40}}>20</p>
   </Box>
   </div>
   <div style={{padding:5,marginTop:15,fontSize:20}}>
   <AvTimerIcon style={{width:30,height:30}} /><span style={{marginLeft:10}}> Your availability on that day</span> 
   </div>
   <Button style={{margin:'10px 0 0 10px',width:200}} variant="contained" color="primary">
  02:00pm-05:00pm
</Button><span>
<Button style={{margin:'10px 0 0 15px', width:200}} variant="contained" color="primary">
  05:00-08:00
</Button>
</span>
</div>
        </Box>
        
   </Grid>
   
   </div>







           <Box
             boxShadow={3}
             bgcolor="background.paper"
             m={1}
             p={1}
             style={{marginTop:40, width: '25rem', height: '20rem',marginLeft:62,borderRadius:10 }}
           >
             <h1>Price Summary</h1>
             <Divider/>
             <div style={{marginTop:20}}>
             
             <span style={{marginTop:20}}>Base Price</span>
             <span style={{marginLeft:225}}>₹18,320</span>
             </div>
             <Divider style={{marginTop:20}}/>
              <div>
             <span style={{marginTop:20}}>Pickup Charges</span>
             <span style={{marginLeft:'170px',color:'blue'}}>
             Free
             </span>
             <span style={{marginLeft:'5px'}}>
             ₹100
             </span>
             </div>
             <Divider style={{marginTop:15}}/>
             
             <div style={{marginTop:15}}>
             <span>Total Amount</span>
             
             <span style={{marginLeft:'210px'}}>
             ₹18,320
             </span>
             </div>
           
           
             <Link to='/PaymentPage'>
             <Button style={{width:'85%',height:40,borderRadius:10,marginLeft:29,marginTop:30}} variant="contained" color="primary"  endIcon={<ArrowRightAltIcon />} >
                    Continue</Button>
                    </Link>
           </Box>


           </div>



          
<div >
   
   <div style={{marginLeft:900,marginRight:40,borderRadius:10,width:400,height:80,backgroundColor:'lightgray',alignItems:'center',display:'flex',}}>
   <img style={{ width:15,height:15,marginLeft:15}} src='https://www.cashify.in/static/buy-back/svgs/whatsapp.svg'/>
     <label style={{marginLeft:10,marginTop:10}}>Get price alerts & updates on <p>Whatsapp</p> </label>
    
     <div class="form-check form-switch" style={{marginLeft:'auto',}}>
<input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
<label class="form-check-label" for="flexSwitchCheckChecked"></label>
</div>
</div>


   <Box>
   <Box
     boxShadow={2}
     bgcolor="background.paper"
     m={1}
     p={1}
     style={{ width: '25rem',marginLeft:900, height: '12rem',marginTop:35,borderRadius:10 }}
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
<div>
   <Footer/>
</div>

         
       





     </>
    )
}

export default Sedule
