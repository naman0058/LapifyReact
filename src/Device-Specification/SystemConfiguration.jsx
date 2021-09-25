import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from '@material-ui/core';
import {NavLink} from "react-router-dom"
import Footer from '../Footer'
import '../css/SystemConfiguration.css'
import Box from '@material-ui/core/Box';
import {Divider} from '@material-ui/core'
import Footernew from '../Footernew'
function SystemConfiguration(props) {


    const [products,setProducts]=useState(JSON.parse(localStorage.getItem('systemconfiguration')))
    const [count,setCount]=useState(JSON.parse(localStorage.getItem('count')))
   
const [processor, setProcessor]=React.useState('Intel Core i5')
const [ram, setRam]=React.useState('1 GB')
const [harddisk, setHarddisk]=React.useState('60 GB HDD')

const handleOnClick=(products)=>{
    // console.log("calling handle event",JSON.parse(data))
    props.history.push({
         pathname:"/additionalFeatures",
      state:products
        
        })

        localStorage.setItem('additionalFeatures',JSON.stringify(products))
        localStorage.setItem('processor',JSON.stringify(processor))
        localStorage.setItem('ram',JSON.stringify(ram))
        localStorage.setItem('harddisk',JSON.stringify(harddisk))
}






const handleChange1 = (event) => {
    localStorage.setItem('Procesor', event.target.value.toString());

    setProcessor(event.target.value);
    console.warn("hello");
};


const handleChange2 = (event) => {
    localStorage.setItem('RAM', event.target.value.toString());

    setRam(event.target.value);
    console.warn("hello");
};



const handleChange3 = (event) => {
    localStorage.setItem('HardDisk', event.target.value.toString());

    setHarddisk(event.target.value);
    console.warn("hello");
};




    return (
        <>
        <div style={{display:'flex',marginTop:160 }}>
        <div className="container"style={{marginLeft:120,}}>
        <div className="row">
        <div className="col-md-12">
                        <div className="configuration-section" >
                            <h3 style={{ textAlign: "center", marginTop:20 }}>Select The System Configuration Of Your Device?</h3>

                           <Form>
                                <div style={{ margin:20}}>
                                    <Form.Group     
                                     onChange={handleChange1}
                                     value={processor}
                                        controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Processor</Form.Label>
                                       
                                        <Form.Control    as="select">
                                        
                                    
                                          <option>Intel Core i5</option>
                                            <option>Intel Core i7</option>
                                            <option>Intel Core i9</option>
                                            <option>Intel Core i9 10 Gen</option>
                                            <option>Intel Core M</option>
                                            <option>Intel Core M3 6 Gen</option>
                                        </Form.Control>
                                    </Form.Group></div>


                                <div style={{ margin: 20 }}>
                                    <Form.Group 
                                    onChange={handleChange2}
                                    controlId="exampleForm.ControlSelect1">
                                        <Form.Label>RAM</Form.Label>
                                        <Form.Control as="select">
                                            <option>1 GB</option>
                                            <option>1.5 GB</option>
                                            <option>2 GB</option>
                                            <option>3 GB</option>
                                            <option>4 GB</option>
                                            <option>6 GB</option>
                                        </Form.Control>
                                    </Form.Group></div>

                                <div style={{ margin: 20 }}>
                                    <Form.Group 
                                    onChange={handleChange3}
                                    controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Hard Disk</Form.Label>
                                        <Form.Control as="select">
                                        
                                            <option>60 GB HDD</option>
                                            <option>80 GB HDD</option>
                                            <option>100 GB HDD</option>
                                            <option>120 GB HDD</option>
                                            <option>200 GB HDD</option>
                                            <option>500 GB HDD</option>
                                        </Form.Control>
                                    </Form.Group></div>

                            </Form><br />
                            
                            <div>
                                <Button variant="contained" onClick={()=> handleOnClick(products)}  style={{ height: 40,marginBottom:"5%", marginLeft:"40%",backgroundColor:'#0ebbf0',color:'white'}} >

                                    <NavLink className="nav-link" style={{color:'white'}} exact to="/AdditionalFeatures" > Continue </NavLink>

                                </Button>

                            </div>


                        </div>

                    </div>

                    {/* <div className="col-md-4">
                        <p>Data</p>
                    </div> */}

                </div>
            </div>
            <Box
        boxShadow={1}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '45rem', height: '30.5rem' ,marginRight:150,marginLeft:0,borderRadius:20,    boxShadow: '0px 10px 12px rgba(0,0,0,0.1)'}}
      >
        <img style={{width:90,height:90,width:200,height:200,marginLeft:50}} src={'https://lapify.in/images/' + products.image}/>
       
        <span style={{marginLeft:20,fontWeight:'bold'}}>
           
           <p style={{fontStyle:'italic'}}>{products.name}</p>
           <span style={{fontStyle:'italic'}}>${products.price}</span>
         </span>
       <Divider style={{marginTop:10}}/>
       <p style={{margin:'10px 0 0 20px',fontWeight:'bold',fontStyle:'italic'}}>Device Evaluation</p>  

       <p style={{margin:'10px 0 0 20px',fontStyle:'italic'}}>   Does the Laptop Switch ON? </p>

       <li style={{margin:'0 0 0 20px',fontStyle:'italic'}}>{count}</li>
       <div style={{marginLeft:20}}> 
       <p1 style={{marginTop:50,fontStyle:'italic'}}>   System Configuration </p1> 
       
       <li style={{fontStyle:'italic'}}>{processor}</li> 
      
       <li style={{fontStyle:'italic'}}>{ram}</li>
       <li style={{fontStyle:'italic'}}>{harddisk}</li>
       </div>
       
      </Box>
      </div>
            
            <Footernew/>
            
        </>
    )
}

export default SystemConfiguration;
