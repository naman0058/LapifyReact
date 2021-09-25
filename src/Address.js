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
import Addressdetails from './Addressdetails'
import PaymentAlert from './PaymentAlert'
import Adddrawer from './Adddrawer'
import Footernew from './Footernew'
import { useState } from 'react';



function Address(props) {
 
  const [products,setProducts]=useState(JSON.parse(localStorage.getItem('address')))





  const handleOnClick=(products)=>{
    // console.log("calling handle event",JSON.parse(data))
    props.history.push({
         pathname:"/demosedule",
      state:products
        
        })
  
        localStorage.setItem('demosedule',JSON.stringify(products))
  
       
  }
  







    return (
        <>
        <div style={{margin:'130px 0 0 90px',}}>
      
      <Button variant="contained" style={{backgroundColor:'#0ebbf0',color:'white',marginLeft:10,width:130,height:40}}>
      <ArrowBackIcon/>
      <NavLink className="nav-link" exact to='/checkout' style={{color:'white'}}> BACK</NavLink>
</Button>

</div>
           <div style={{marginTop:10}}>
       <div style={{display:'flex',}}>
        
  <div>
<div style={{marginLeft:90,}}>
<h1 style={{marginTop:70,fontSize:24}}>Address</h1>
<span style={{marginLeft:'20%'}}><Button style={{backgroundColor:'#0ebbf0',color:'white',marginLeft:'50%'}} variant="contained">
<AddIcon/>
  <Adddrawer/>
</Button></span>
<p>Please add your address</p>
</div>
   <div>
<Grid container >
           
           <Box
             boxShadow={2}
             bgcolor="background.paper"
             m={1}
             p={1}
             style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',marginTop:'20',marginLeft:90, width: '47rem', height: '11rem',borderRadius:20,}}
           >
         
           <div style={{padding:5,}}>
            <Radio />
           <HomeIcon style={{backgroundColor:'white',color:'orange'}}/><span style={{marginLeft:10,fontWeight:'bold'}}>HOME</span>
           </div>
           <div style={{marginLeft:42}}>
           <label>Noida,Uttar Pradesh</label>
         
           <div style={{display:'flex'}}>
           <span style={{color:'red'}}><Addressdetails/></span><labal style={{color:'red',marginLeft:200}}><PaymentAlert/>delete</labal>
           </div>
           </div>
           
           </Box>
      </Grid>
      </div>
</div>






             <Box
                boxShadow={3}
                bgcolor="background.paper"
                m={1}
                p={1}
                style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',marginTop:60, width: '25rem', height: '20rem',marginLeft:50,borderRadius:20 }}
              >
                <h1 style={{fontStyle:'italic'}}>Price Summary</h1>
                <Divider/>
                <div style={{marginTop:20}}>
                
                <span style={{marginTop:20,fontStyle:'italic'}}>Base Price</span>
                <span style={{marginLeft:200,fontStyle:'italic'}}>{products.price}</span>
                </div>
                <Divider style={{marginTop:20}}/>
                 <div>
                <span style={{marginTop:20,fontStyle:'italic'}}>Pickup Charges</span>
                <span style={{marginLeft:'150px',color:'blue',fontStyle:'italic'}}>
                Free
                </span>
                <span style={{marginLeft:'5px',fontStyle:'italic'}}>
                ₹100
                </span>
                </div>
                <Divider style={{marginTop:15}}/>
                
                <div style={{marginTop:15}}>
                <span style={{fontStyle:'italic'}}>Total Amount</span>
                
                <span style={{marginLeft:'190px',fontStyle:'italic'}}>
                ₹18,320
                </span>
                </div>
              
              
       
                <Button onClick={()=>handleOnClick(products)} style={{backgroundColor:'#0ebbf0',color:'white',width:'85%',height:40,borderRadius:10,marginLeft:29,marginTop:30}} variant="contained"   endIcon={<ArrowRightAltIcon />} >
                <NavLink className="nav-link" exact to='/Demosedule' style={{color:'white'}}> Continue</NavLink>
                </Button>
                   
              </Box>


              </div>


             



      <Box>
      <Box
        boxShadow={2}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)', width: '25rem',marginLeft:900, height: '12rem',marginTop:35,borderRadius:20 }}
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
     
<div style={{marginTop:30}}>
      <Footernew/>
</div>

            
          





        </>
    )
}

export default Address
