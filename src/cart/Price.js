import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import {Button,Divider} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';



function Price() {
    return (
        <div>
            
<Box
                boxShadow={3}
                bgcolor="background.paper"
                m={1}
                p={1}
                style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)', width: '25rem', height: '20rem',marginLeft:35,borderRadius:20 }}
              >
                <h1>Price Summaryyyyyyyyy</h1>
                <Divider/>
                <div style={{marginTop:20}}>
                
                <span style={{marginTop:20}}>Base Price</span>
                <span style={{marginLeft:225}}>₹18,320</span>
                </div>
                <Divider style={{marginTop:20}}/>
                 <div>
                <span style={{marginTop:20}}>Pickup Charges</span>
                <span style={{marginLeft:'190px'}}>
                Free₹100
                </span>
                </div>
                <Divider style={{marginTop:15}}/>
                <div>
                <span style={{marginTop:20}}>Add Promo code</span>
                <span style={{marginLeft:'190px'}}>
                Apply
                </span>
                </div>
                <Divider style={{marginTop:20,color:'gray'}}/>
                <div style={{marginTop:15}}>
                <span>Total Amount</span>
                
                <span style={{marginLeft:'210px'}}>
                ₹18,320
                </span>
                </div>
              
              
                <Link to='/Demosedule'>
                <Button style={{color:'blue',width:'85%',height:30,borderRadius:10,marginLeft:29,marginTop:15,}} variant="contained"   endIcon={<ArrowRightAltIcon />} >
                       Get Paid</Button>
                       </Link>
              </Box> 
        </div>
    )
}

export default Price








          