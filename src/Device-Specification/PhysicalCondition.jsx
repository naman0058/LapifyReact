import React,{useState} from 'react'
import { RadioGroup,Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import '../css/PhysicalCondition.css'
import Footer from '../Footer'
import {NavLink} from "react-router-dom"
import Box from '@material-ui/core/Box';
import {Divider} from '@material-ui/core'
 import VarificationMobileDrawer from '../drawer/VarificationMobileDrawer'
 import Footernew from '../Footernew'


function PhysicalCondition(props) {

    const [products,setProducts]=useState(JSON.parse(localStorage.getItem('physicalCondition')))

    const [count,setCount]=useState(JSON.parse(localStorage.getItem('count')))
    const [processor,setProcessor]=useState(JSON.parse(localStorage.getItem('processor')))
    const [ram,setRam]=useState(JSON.parse(localStorage.getItem('ram')))
    const [harddisk,setharddisk]=useState(JSON.parse(localStorage.getItem('harddisk')))

    const [touchscreen,setTouchscreen]=useState(JSON.parse(localStorage.getItem('touchscreen')))
    const [screensize,setScreensize]=useState(JSON.parse(localStorage.getItem('screensize')))
    const [graphics,setGraphics]=useState(JSON.parse(localStorage.getItem('graphics')))



    const [physical,setPhysical]=useState("");
    const conditionChange =(event)=>{
        setPhysical(event.target.value)
    };

    const handleOnClick=(products)=>{
        // console.log("calling handle event",JSON.parse(data))
        props.history.push({
             pathname:"/checkout",
          state:products
            
            })
    
            localStorage.setItem('checkout',JSON.stringify(products))

            localStorage.setItem('processor',JSON.stringify(processor))
            localStorage.setItem('ram',JSON.stringify(ram))
            localStorage.setItem('harddisk',JSON.stringify(harddisk))

            localStorage.setItem('touchscreen',JSON.stringify(touchscreen))
            localStorage.setItem('screensize',JSON.stringify(screensize))
            localStorage.setItem('graphics',JSON.stringify(graphics))
    }






    return (
        <>
        <div className="container" style={{display:'flex',marginTop:150 }}>
        <div className="row">
        <div className="col-md-12">
        <div className="physical-section">
                
                                <h3 style={{ textAlign: "center", paddingTop:20, fontFamily: "Montserrat" }}>
                                Select the Physical condition of your device</h3>
                    

                <FormControl>

                    <RadioGroup value={physical} onChange={conditionChange}>
                   
                        <label className="labelage">
                            <span aria-disabled="false">
                            <div className="container">
                                <div className="row" style={{margin:'auto'}}>
                                    <div className="col-md-4">
                                            <div className="physical-box" >
                                            
                                         
                                                <FormControlLabel value="Flawless"    style={{border:'none',}} control={<Radio/>}  label="Flawless" >
                                             
                                                </FormControlLabel>
                                                <ul className="li-text">
                                                    <li>No scratches on the device</li>
                                                    <li>No sign of usage on the device</li>
                                                    <li>No dents or cracks on the device</li>
                                                </ul>
                                           
                                            </div>
                                    </div>
                                    <div className="col-md-4">
                                            <div className="physical-box" >
                                                             
                                                <FormControlLabel value="Good" control={<Radio/>}  label="Good" />
                                               
                                                    <ul className="li-text">
                                                    <li>Normal Sign Of Usage</li>
                                                    <li>Minor Scratches on the device</li>
                                                    <li>No dents or cracks on the device</li>
                                                </ul>
                                               
                                            </div>
                                    </div>
                                    <div className="col-md-4">
                                            <div className="physical-box" >
                                          
                                                <FormControlLabel className="nav-link" value="Average" control={<Radio/>}  label="Average" />
                                              
                                                     <ul className="li-text">
                                                    <li>Major Scratches/Dents on device </li>
                                                    <li>Loose/Broken Hinges/Discoloration of device</li>
                                                    <li>Screw(s) missing from device</li>
                                                    <li>Panel intact with cracks</li>
                                                </ul>
                                             

                                            </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                                <div className="physical-box" style={{width:215,height:270,marginLeft:34}} >
                                              
                                                    <FormControlLabel  value="Below Average" label="Below Average"   control={<Radio/>} />
                                               
                                                
                                                        <ul className="li-text">
                                                        <li>Physical damage on device </li>
                                                        <li>Multiple scratches or dents on device</li>
                                                        <li>Broken hinges on device panel</li>
                                                        <li>Parts missing from device</li>
                                                    </ul>

                                                </div>

                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4"></div>
                                    </div>
                                </div>
                            </div>
                                
                             
                                
                                
                            </span>

                        </label>
                    </RadioGroup>
                   
                </FormControl>
               
            </div>
                    </div>

                    {/* <div className="col-md-4">
                        <h1>Data</h1>
                    </div> */}

                </div>
                <Box
        boxShadow={1}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '27rem', height: '41.3rem' ,marginLeft:30,borderRadius:20,    boxShadow: '0px 10px 12px rgba(0,0,0,0.1)'}}
      >
        <img style={{width:200,height:200,marginLeft:50}} src={'https://lapify.in/images/' + products.image}/>
        <span style={{marginLeft:20,fontWeight:'bold'}}>
           
           <p style={{fontStyle:'italic'}}>{products.name}</p>
           <span style={{fontStyle:'italic'}}>${products.price}</span>
         </span>
       <Divider style={{marginTop:10}}/>
       <p style={{margin:'10px 0 0 20px',fontWeight:'bold',fontStyle:'italic'}}>Device Evaluation</p>  
       <p style={{margin:'10px 0 0 20px',fontStyle:'italic'}}>   Does the Laptop Switch ON? </p>
       <li style={{margin:'0 0 0 20px',fontStyle:'italic'}}>{count}</li>
       <div style={{marginLeft:20,marginTop:10}}> 
       <span style={{marginTop:10,fontStyle:'italic'}}>   System Configuration </span> 
      
           <li style={{fontStyle:'italic'}}>{processor}</li>
           <li style={{fontStyle:'italic'}}>{ram}</li>
           <li style={{fontStyle:'italic'}}>{harddisk}</li>
     
       </div>
       <div style={{marginLeft:20,marginTop:10}}>
       <span style={{marginTop:30,fontStyle:'italic'}}> Additional Features</span>
       <li style={{fontStyle:'italic'}}>{touchscreen}</li>
      <li style={{fontStyle:'italic'}}>{screensize}</li>
      <li style={{fontStyle:'italic'}}>{graphics}</li>
       </div>
      </Box>
            </div>
            <Button variant="contained" style={{backgroundColor:'#0ebbf0',color:'white',marginLeft:'40%',marginTop:30,}} onClick={()=> handleOnClick(products)} >
            <NavLink to='/checkout' style={{color:'white'}}> continue</NavLink>
</Button>
            <Footernew />
        </>
    )
}

export default PhysicalCondition;
