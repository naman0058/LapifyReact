import React,{useState} from 'react'
import { Button } from '@material-ui/core';
import { NavLink } from "react-router-dom";
import { RadioGroup } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import '../css/Age.css'
import Footer from '../Footer'
import Box from '@material-ui/core/Box';
import {Divider} from '@material-ui/core'
import Card from '@material-ui/core/Card';
import Footernew from '../Footernew'

  function Age(props) {


    const [products,setProducts]=useState(JSON.parse(localStorage.getItem('age')))
    const [count,setCount]=useState(JSON.parse(localStorage.getItem('count')))
    const [processor,setProcessor]=useState(JSON.parse(localStorage.getItem('processor')))
    const [ram,setRam]=useState(JSON.parse(localStorage.getItem('ram')))
    const [harddisk,setharddisk]=useState(JSON.parse(localStorage.getItem('harddisk')))

    const [touchscreen,setTouchscreen]=useState(JSON.parse(localStorage.getItem('touchscreen')))
    const [screensize,setScreensize]=useState(JSON.parse(localStorage.getItem('screensize')))
    const [graphics,setGraphics]=useState(JSON.parse(localStorage.getItem('graphics')))

   const [age,setAge]=useState("");

       const agechange =(event)=>{
    setAge(event.target.value);
     };


     const handleOnClick=(products)=>{
        // console.log("calling handle event",JSON.parse(data))
        props.history.push({
             pathname:"/physicalCondition",
          state:products
            
            })
    
            localStorage.setItem('physicalCondition',JSON.stringify(products))

            localStorage.setItem('count',JSON.stringify(count))
            localStorage.setItem('processor',JSON.stringify(processor))
            localStorage.setItem('ram',JSON.stringify(ram))
            localStorage.setItem('harddisk',JSON.stringify(harddisk))

            localStorage.setItem('touchscreen',JSON.stringify(touchscreen))
            localStorage.setItem('screensize',JSON.stringify(screensize))
            localStorage.setItem('graphics',JSON.stringify(graphics))
    }



 return (
        <>
        <div className='container-fluid' >
        <div className="container" style={{display:'flex',}}>
        <Card style={{width:800,height:600,borderRadius:20, boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',marginTop:110 }}>
        <h3 style={{paddingTop:120, textAlign:"center", fontFamily:"monospace"}}>Age Of Your device?</h3>
     <FormControl>
    <RadioGroup value={age} onChange={agechange}>
         <label>
        <span aria-disabled="false">
        
        <div className="col-md-4 age-box" style={{marginTop:90}} >
        <FormControlLabel value="Less than 1 yaer(in warranty)" style={{width:300}} control={<Radio />} label="Less than 1 year(in warranty)" /></div>
        <div className="col-md-4 age-box">
        <FormControlLabel value="Between 1 and 3 years" style={{width:300}} control={<Radio />} label="Between 1 and 3 years" /></div>
        <div className=" col-md-4 age-box">
        <FormControlLabel value="More than 3 year" style={{width:300}} control={<Radio />} label="More than 3 years" /></div>
                                         
        </span>

        </label>
    </RadioGroup>

</FormControl>

            <div>
                <Button variant="contained"  onClick={()=> handleOnClick(products)}  style={{backgroundColor:'#0ebbf0',color:'white',marginBottom:90, marginTop:30, height: 40, marginLeft:"40%" }} >

                    <NavLink className="nav-link" style={{color:'white'}} exact to="/PhysicalCondition" > Continue </NavLink>

                </Button>

                </div>
                
                </Card>
                

                 {/* <div className="col-md-4">
                     <h1>data</h1>
                 </div> */}
            
             <Box
        boxShadow={1}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '30rem', height: '37.5rem' ,marginLeft:30,borderRadius:20,marginTop:110,   boxShadow: '0px 10px 12px rgba(0,0,0,0.1)'}}
      >
        <img style={{width:200,height:200,marginLeft:50}} src={'https://lapify.in/images/' + products.image}/>
        <span style={{marginLeft:20,fontWeight:'bold'}}>
           
           <p style={{fontStyle:'italic'}}>{products.name}</p>
           <span style={{fontStyle:'italic'}}>${products.price}</span>
         </span>
       <Divider style={{marginTop:10}}/>
       <label style={{margin:'5px 0 0 20px',fontWeight:'bold',fontSize:16,fontStyle:'italic'}}>Device Evaluation</label>  
       <div> 
       <label style={{margin:'5px 0 0 20px',fontSize:16,fontStyle:'italic'}}>   Does the Laptop Switch ON? </label>
       <li style={{margin:'0px 0 0 20px',fontSize:13,fontStyle:'italic'}}>{count}</li>
       </div> 
       <div style={{marginLeft:20,fontSize:13}}> 
       <label style={{marginTop:16,fontSize:16,fontStyle:'italic'}}>   System Configuration </label> 
       
           <li style={{fontStyle:'italic'}}>{processor}</li>
           <li style={{fontStyle:'italic'}}>{ram}</li>
           <li style={{fontStyle:'italic'}}>{harddisk}</li>
      
       </div>
       <div style={{fontSize:13,marginLeft:20}}>
       <label style={{marginTop:15,fontSize:16,fontStyle:'italic'}}> Additional Features</label>
       <li style={{fontStyle:'italic'}}>{touchscreen}</li>
      <li style={{fontStyle:'italic'}}>{screensize}</li>
      <li style={{fontStyle:'italic'}}>{graphics}</li>
       </div>
      </Box>
         </div>
                <Footernew/>
                </div>
        </>
    )
}

export default Age;
