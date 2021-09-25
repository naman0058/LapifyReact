import React ,{useState}from 'react'
import "../css/AdditionalFeatures.css"
import {NavLink} from "react-router-dom"
import { Button } from '@material-ui/core'
import { RadioGroup } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Footer from '../Footer'
import Box from '@material-ui/core/Box';
import {Divider} from '@material-ui/core'
import Footernew from '../Footernew'

function AdditionalFeatures(props) {
    /*const [count, setCount] = useState(0);
    var Procesor = localStorage.getItem('Procesor');
    console.log('res',Procesor)
    setCount(Procesor)*/



    const [products,setProducts]=useState(JSON.parse(localStorage.getItem('additionalFeatures')))
    const [count,setCount]=useState(JSON.parse(localStorage.getItem('count')))
    
    const [processor,setProcessor]=useState(JSON.parse(localStorage.getItem('processor')))
    const [ram,setRam]=useState(JSON.parse(localStorage.getItem('ram')))
    const [harddisk,setharddisk]=useState(JSON.parse(localStorage.getItem('harddisk')))





    const [touchscreen, setTouchscreen] = React.useState('Touch Screen Available');

    const handleChange1 = (event) => {
        //localStorage.setItem('touchscreen', event.target.value.toString());

      
        setTouchscreen(event.target.value);
        console.warn("hello");
    };


    const [screensize, setScreensize] = React.useState('10-11 Inch');

    const handleChange2 = (event)=>{
        //localStorage.setItem('screensize', event.target.value.toString());

       
        setScreensize(event.target.value);
    };

    const [graphics, setGraphics]=React.useState('Graphics Card Available');

    const handleChange3 = (event)=>{
        //localStorage.setItem('graphicscard', event.target.value.toString());

     
         setGraphics(event.target.value);
    };



    const handleOnClick=(products)=>{
        // console.log("calling handle event",JSON.parse(data))
        props.history.push({
             pathname:"/functionProperly",
          state:products
            
            })
    
            localStorage.setItem('functionProperly',JSON.stringify(products))
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
       
        <div className="container" style={{display:'flex',marginTop:150}}>
        <div className="row">
        <div className="col-md-11">
            <div className="features-section">
        <h4 style={{textAlign:"center", margin:20}}>Select the additional features Of your device?</h4>

                <FormControl component="fieldset">
                    {/* <FormLabel component="legend">Touch Screen</FormLabel> */}
                    <p className="label-name">Touch Screen</p>

                    <RadioGroup value={touchscreen} onChange={handleChange1}>
                        <label >
                            <span  aria-disabled="false">
                            <div className="row">
                                <div className="features-box">
                                    <FormControlLabel value="Touch Screen Available" control={<Radio />} label="Touch Screen Available" /></div>
                                <div className="features-box">
                                    <FormControlLabel value="Touch Screen Not Available" control={<Radio />} label="Touch Screen Not Available" /></div>
                                <div className="features-box">
                                    <FormControlLabel value="Touch Screen Not Working" control={<Radio />} label="Touch Screen Not Working" /></div>
                            </div>
                            </span>
                        </label>
                    </RadioGroup>
                </FormControl>


                <FormControl component="fieldset">
                    {/* <FormLabel className="span3switch"  component="legend">Screen Size</FormLabel> */}
                                <p className="label-name">Screen Size</p>
                    <RadioGroup value={screensize} onChange={handleChange2}>
                        <label>
                            <span  aria-disabled="false">
                            <div className="row">
                                <div className="features-box">
                                    <FormControlLabel value="10-11 Inch" control={<Radio />} label="10-11 Inch" /></div>
                                <div className="features-box">
                                    <FormControlLabel value="12-13 Inch" control={<Radio />} label="12-13 Inch" /></div>
                                <div className="features-box">
                                    <FormControlLabel value="14-15 Inch" control={<Radio />} label="14-15 Inch" /></div>
                                <div className="features-box">
                                    <FormControlLabel value="Above 15 Inch" control={<Radio />} label="Above 15 Inch" /></div>
                                            </div>
                            </span>
                        </label>
                    </RadioGroup>
                </FormControl>





                <FormControl component="fieldset">
                    {/* <FormLabel className="span3switch" component="legend">External Graphics Cards(NVIDIA/AMD)</FormLabel> */}
                                <p className="label-name">External Graphics Cards(NVIDIA/AMD)</p>
                        
                    <RadioGroup  value={graphics} onChange={handleChange3}>
                            <label>
                                <span  aria-disabled="false">
                                <div className="row">
                                <div className="features-box">
                                    <FormControlLabel value="graphics card available" control={<Radio />} label="Graphics Card Available" /></div>
                                <div className="features-box">
                                    <FormControlLabel value="graphics card Not available" control={<Radio />} label="Graphics Card Not Available" /></div>
                                <div className="features-box">
                                    <FormControlLabel value="graphics card Not working" control={<Radio />} label="Graphics Card Not Working" /></div>
                                            </div>
                                    </span>
                                    </label>
                        </RadioGroup>
                    </FormControl>


                <div>
                    <Button variant="contained" onClick={()=> handleOnClick(products)} style={{margin:20, height: 40,marginLeft:"50%",backgroundColor:'#0ebbf0',color:'white'}} >

                        <NavLink className="nav-link" style={{color:'white'}} exact to="/FunctionProperly" > Continue </NavLink>

                    </Button></div>

        </div>
                    </div>

                    {/* <div className="col-md-4">
                        <p>data</p>
                    </div> */}

                </div>
           
            <Box
        boxShadow={1}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '27rem', height: '45.6rem' ,marginLeft:0,borderRadius:20,    boxShadow: '0px 10px 12px rgba(0,0,0,0.1)'}}
      >
        <img style={{width:200,height:200,marginLeft:50}} src={'https://lapify.in/images/' + products.image}/>
        <span style={{marginLeft:20,fontWeight:'bold'}}>
           
           <p style={{fontStyle:'italic'}}> {products.name}</p>
           <span style={{fontStyle:'italic'}}>${products.price}</span>
         </span>
       <Divider style={{marginTop:10}}/>
       <p style={{margin:'20px 0 0 20px',fontWeight:'bold',fontStyle:'italic'}}>Device Evaluation</p>  
       <p style={{margin:'30px 0 0 20px',fontStyle:'italic'}}>   Does the Laptop Switch ON? </p>
       <li style={{margin:'10px 0 0 20px',fontStyle:'italic'}}>{count}</li>
       <div style={{marginLeft:20}}> 
       <p style={{marginTop:20,fontStyle:'italic'}}>   System Configuration </p> 
       <li style={{fontStyle:'italic'}}> {processor}</li> 
       <li style={{fontStyle:'italic'}}>{ram}</li>
       <li style={{fontStyle:'italic'}}> {harddisk}</li>
       </div>
       <div>
       <p style={{marginTop:20,fontStyle:'italic'}}> Additional Features</p>
     
  
       {/*<li>{Procesor}</li>*/}
       <li style={{fontStyle:'italic'}}>{touchscreen}</li>
       <li style={{fontStyle:'italic'}}>{screensize}</li>
       <li style={{fontStyle:'italic'}}> {graphics}</li>
       </div>
      </Box>
      </div>
     
        <Footernew/>
            
        </>
    )
}

export default AdditionalFeatures;
