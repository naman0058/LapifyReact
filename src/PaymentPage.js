import React from 'react'
import './PaymentPage.css'
import {Button,Typography} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Box,Divider } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import  Bankdetailsslider from './Bankdetailsslider'
import Amazondrawer from './Amazondrawer'
import Footernew from './Footernew'
import Upi from './Upi'
import Flipkartdrawer from './Flipkartdrawer'
import Addupidrawer from './Addupidrawer'

import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import Radio from '@material-ui/core/Radio';
import {NavLink} from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Footer from './Footer'
import  Banktransferdetail from './Banktransferdetail'


import PaymentAlert from './PaymentAlert'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import { useState } from 'react';



function PaymentPage(props) {

  const [products,setProducts]=useState(JSON.parse(localStorage.getItem('Paymentpage')))
  const [open, setOpen] = React.useState(false);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const handleOnClick=(products)=>{
    // console.log("calling handle event",JSON.parse(data))
    props.history.push({
         pathname:"",
      state:products
        
        })
  
        localStorage.setItem('',JSON.stringify(products))
  
       
  }
  
 
  

    return (
        <>
        <div style={{display:'flex',marginTop:150,marginLeft:100}}>
       <div style={{marginLeft:30}}>
       
        <Button variant="contained"  color="#82b74b" style={{backgroundColor:'#0ebbf0',color:'white',width:120,height:40,marginTop:50}}>
        <ArrowBackIcon/>
        <NavLink className="nav-link" to='/Demosedule' style={{color:'white'}}>Back</NavLink>
</Button>

<h1 style={{fontSize:20,marginTop:20}}> Please choose your preferred payment mode</h1>
<Divider style={{marginTop:30,width:'600px'}}/>
<div style={{marginTop:5}}>
        <div style={{marginTop:30,}}>
        <div class="modal" style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',}} id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
     
      <div class="modal-body" style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',borderRadius:20,width:500,height:100}}>
  
      <img style={{width:40,height:40}} src='https://s3n.cashify.in/paymentMode/img/xhdpi/5cfe104bd9e81.png'/>
      <span style={{marginLeft:40,fontWeight:'bold'}}>Instant Bank Trandfer</span>
      </div>
      <div class="modal-footer">
       
      <button type="button" id='some' style={{backgroundColor:'#0ebbf0',color:'white'}} class="btn btn-primary" ></button>
   
        {/*<button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal"><Bankdetailsslider link/></button>*/}
      </div>
    </div>
  </div>
</div>
{/*data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"*/}
<Button variant="contained" style={{width:180,height:40,backgroundColor:'#0ebbf0',color:'white',border:'none'}} color="white" >
<NavLink className="nav-link"  style={{color:'white'}} exact to='/Banktransferdetail'>BANKTRANSFER</NavLink>

</Button>
</div>






<div style={{marginTop:40}}>

      <Button variant="contained" style={{width:180,height:40,backgroundColor:'#0ebbf0',color:'white',border:'none'}} color="white" >
      <NavLink exact to='/Upi' className="nav-link"  style={{color:'white'}}> UPI </NavLink>
      </Button>
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <div style={{display:'flex',boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',height:40,borderRadius:20,height:80,alignItems:'center',width:500}}>
             
             <img style={{width:50,height:50,marginLeft:10}} src='data:image/png;base64,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'/>
          <div style={{marginLeft:100}}>
          <labal style={{fontWeight:'bold',marginLeft:50, marginTop:40}}>UPI</labal>
     
          </div>
     <div style={{marginLeft:90}}>
        
          <span style={{marginLeft:10}}><Button variant="contained" onClick={()=> handleOnClick(products)} style={{marginLeft:50, backgroundColor:'#0ebbf0',color:'white'}} color="primary">
            <Amazondrawer />
          </Button> </span>
          </div>
           </div>
          </DialogContentText>
        </DialogContent>
        <Divider/>
      </Dialog>
    
</div>

  




    










</div>
    </div>




  
<div style={{marginLeft:5,marginRight:100}}>
              <Box
                boxShadow={3}
                bgcolor="background.paper"
                m={1}
                p={1}
                style={{marginRight:50,boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',marginTop:60, width: '25rem', height: '20rem',marginLeft:110,borderRadius:20 }}
              >
                <h1 style={{fontStyle:'italic'}}>Price Summary</h1>
                <Divider/>
                <div style={{marginTop:20}}>
                
                <span style={{marginTop:20,fontStyle:'italic'}}>Base Price</span>
                <span style={{marginLeft:225,fontStyle:'italic'}}>₹{products.price}</span>
                </div>
                <Divider style={{marginTop:20}}/>
                 <div>
                <span style={{marginTop:20,fontStyle:'italic'}}>Pickup Charges</span>
                <span style={{marginLeft:'170px',color:'blue',fontStyle:'italic'}}>
                Free
                </span>
                <span style={{marginLeft:'5px',fontStyle:'italic'}}><strike> ₹100</strike>
               
                </span>
                </div>
                <Divider style={{marginTop:15}}/>
                
                <div style={{marginTop:15}}>
                <span style={{fontStyle:'italic'}}> Total Amount</span>
                
                <span style={{marginLeft:'210px',fontStyle:'italic'}}>
                ₹18,320
                </span>
                </div>
              
              
                
                <Button onClick={()=>handleOnClick(products)}style={{width:'85%',height:40,borderRadius:10,marginLeft:29,marginTop:30,backgroundColor:'#0ebbf0',color:'white'}} variant="contained"   endIcon={<ArrowRightAltIcon />} >
                <NavLink exact to='/PaymentPage' className="nav-link" style={{color:'white'}}>  Continue </NavLink></Button>
                     
              </Box>


         



             
<div style={{marginReft:20}}>
      
     

{/* 
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
      </Box> */}
      
      <Box>
     
      </Box>
      </div>
      </div>
      </div>
        
<img style={{width:'84%',height:300,marginLeft:110,marginTop:20}} src='https://s3.envato.com/files/321285274/A7303712_A7iii_16012019_CreditCard_IconSiam_Banner.jpg'/>

      
<div>
      <Footernew/>
</div>




      </>
    )
}

export default PaymentPage
