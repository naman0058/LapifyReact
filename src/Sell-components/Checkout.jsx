import React ,{useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {Button,Divider} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Form } from 'react-bootstrap';
import HelpIcon from '@material-ui/icons/Help';
import Footer from '../Footer'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { NavLink } from 'react-router-dom';
import Price from '../cart/Price'
import { useEffect } from 'react';
import Footernew from '../Footernew'
//
import { useSelector,useDispatch } from 'react-redux';
//

function Checkout(props) {
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [products,setProducts]=useState(JSON.parse(localStorage.getItem('checkout')))

//const {cartItems}= useSelector(state => state.cart);

// const dispatch = useDispatch()


useEffect(() =>{
  
   
}, [])
        



const handleChange = (event) => {
  setSelectedValue(event.target.value);
};


const handleOnClick=(products)=>{
  // console.log("calling handle event",JSON.parse(data))
  props.history.push({
       pathname:"/address",
    state:products
      
      })

      localStorage.setItem('address',JSON.stringify(products))

     
}


  
    return (
        <>
         <div >
        <div style={{marginLeft:100,}} >
        <Button variant="contained"  color="#82b74b" style={{marginTop:130,backgroundColor:'#0ebbf0',color:'white',width:120,height:40}}>
        <ArrowBackIcon/>
        <NavLink className="nav-link" to='/physicalCondition' style={{color:'white'}}>Back</NavLink>
</Button>




      

 </div>

        
           
           <div style={{display:'flex',marginLeft:70}}>
              <Box
                boxShadow={2}
                bgcolor="background.paper"
                m={1}
                p={1}
                style={{display:'flex',boxShadow: '0px 10px 12px rgba(0,0,0,0.1)', width: '48rem', height: '22rem',marginLeft:30,borderRadius:20,display:'flex'}}
              >
  

 <img src={'https://lapify.in/images/' + products.image}
                    style={{width:200,height:200,margin:'40px 0 0 30px'}}
                />
             <>  
{/*{
  cartItems.map(item=>(
    <img src={item.Url}/> 
  ))
}*/}
 </> 

                <Box style={{margin:'20px 0 0 40px',}}>
                    <h1>{products.name}</h1>
                    <img style={{width:50,height:50,fontStyle:'italic'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAC5lZz4i8YP1-bfPlf1GVpMeFV8i01yfZg&usqp=CAU'/>
                    <span style={{fontWeight:'bold',fontStyle:'italic'}}>${products.price}</span>
                 
              
<div style={{alignItems:'center',display:'flex',justifyContent:'space-around',marginTop:80}}>
<img src='https://www.cashify.in/static/buy-back/quote/safe.svg' style={{width:30,height:30}}/>
<span style={{fontStyle:'italic'}}>Safe & Secure</span>
<img src='https://www.cashify.in/static/buy-back/quote/doorstep.svg' style={{width:30,height:30,marginLeft:15}}/>
<span style={{fontStyle:'italic'}}>Free Doorstep</span>
<img src='https://www.cashify.in/static/buy-back/quote/no_haggling.svg' style={{width:30,height:30,marginLeft:15}}/>
<span style={{fontStyle:'italic'}}>No Haggling</span>
</div>
            
                </Box>
              </Box>
              
              <Box
                boxShadow={3}
                bgcolor="background.paper"
                m={1}
                p={1}
                style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)', width: '25rem', height: '22rem',marginLeft:35,borderRadius:20 }}
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
                <span style={{marginLeft:'190px'}}>
                <span style={{fontStyle:'italic'}}>Free</span>       <strike>₹100</strike> 
                </span>
                </div>
                <Divider style={{marginTop:15}}/>
                <div>
                <span style={{marginTop:20,fontStyle:'italic'}}>Add Promo code</span>
                <span style={{marginLeft:'190px',fontStyle:'italic'}}>
                Apply
                </span>
                </div>
                <Divider style={{marginTop:20,color:'gray'}}/>
                <div style={{marginTop:15}}>
                <span style={{fontStyle:'italic'}}>Total Amount</span>
                
                <span style={{marginLeft:'210px',fontStyle:'italic'}}>
                ₹18,320
                </span>
                </div>
              
              
             
                <Button style={{backgroundColor:'#0ebbf0',color:'white',width:'85%',height:35,borderRadius:10,marginLeft:29,marginTop:15,}} onClick={()=> handleOnClick(products)} variant="contained"   endIcon={<ArrowRightAltIcon />} >
                <NavLink className="nav-link" style={{color:'white'}} exact to='/Address'> Get Paid</NavLink></Button>
                     
              </Box> 
             
              </div>
             
          

            


























           
  <Grid container>
  {/*
      <Box
        boxShadow={1}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)', width: '48rem', height: '17rem',marginLeft:100,borderRadius:20, }}
      >
      <div style={{display:'flex',alignItems:'center'}}>
        <img style={{width:35,height:35,padding:5}} src='https://www.cashify.in/static/buy-back/quote/discount.svg'/>
        <span style={{fontSize:20,marginLeft:5,fontWeight:'bold'}}> Special Offers*</span>
        </div>
        <p style={{marginLeft:40}}> This is where your smile gets wider. Earn extra with these exclusive offer !</p>
       
        <Box style={{display:'flex',}}>
     <Box
        boxShadow={2}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',backgroundColor:'#ebf0ec', width: '14rem', height: '10rem',borderRadius:10 }}
      >
       <div >
       <div >
    <Radio style={{justifySelf:'flex-start'}}
    checked={selectedValue === 'a'}
    onChange={handleChange}
    value="a"
    />
           <label>Flipkart Gift Card</label>
           </div>
           <div style={{marginLeft:20,}}>
          
           <ul>
           <li>Get 6% Extra for</li>
           <li>Flipkart</li>
           <li>You Get</li>
           <li>₹37,020</li>
           
           </ul>
          
       </div>
       </div>
      {/*</Box>
      <Box
        boxShadow={2}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)', backgroundColor:'#ebf0ec',width: '14rem', height: '10rem',borderRadius:10 }}
      >
        <div >
       <div >
    <Radio style={{justifySelf:'flex-start' }}
    checked={selectedValue === 'b'}
    onChange={handleChange}
    value="b"
    />
           <label>Flipkart Gift Card</label>
           </div>
           <div style={{marginLeft:20,}}>
          
           <ul>
           <li>Get 6% Extra for</li>
           <li>Flipkart</li>
           <li>You Get</li>
           <li>₹37,020</li>
           
           </ul>
          
       </div>
       </div>
      </Box>
      <Box >
      </Box>
      </Box>
      </Box>*/}
      
      


    
      {/*}<Box
        boxShadow={2}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{boxShadow: '0px 10px 12px rgba(0,0,0,0.1)', width: '48rem', height: '16rem',marginLeft:100,borderRadius:20,marginTop:10, }}
      >
      <div style={{padding:10,}}>
<HelpIcon style={{width:30,height:30}}/><label>FAQS</label>  
      </div>
      <select style={{border:'none',width:700}}>
  <option selected>Open this select menu</option>
  <option value="1"><p>We evaluate devices on the basis of their condition, age, supply, demand & </p><p>value in the resale market. All 
   these factors are accounted for by our AI mechanism to </p>determine the best resale value of your device.</option>

</select>
 <select style={{border:'none',width:700}}>
  <option selected>Open this select menu</option>
  <option value="1">
 <p>We evaluate devices on the basis of their condition, age, supply, demand &  </p>value in the resale market. All <br/>
 <p>these factors are accounted for by our AI mechanism to determine the best resale value of your device.</p>
</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
 <select style={{border:'none',width:700}}>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
 <select style={{border:'none',width:700}}>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
 <select style={{border:'none',width:700}}>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
 <select style={{border:'none',width:700}}>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<p style={{marginTop:20,marginLeft:350}}>load more</p>
</Box>*/}
</Grid>
      </div>
   <img style={{width:'87%',margin:'20px 100px 0 100px',height:250}} src='https://image.shutterstock.com/image-photo/credit-cards-on-hand-customers-260nw-1416251864.jpg'/>
      <Footernew />

    </>
          );
        }
       

export default Checkout
