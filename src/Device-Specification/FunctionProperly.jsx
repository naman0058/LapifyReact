import React,{useState} from 'react'
import '../css/FunctionProperly.css'
import { Button } from '@material-ui/core';
import { NavLink } from "react-router-dom"
import Footer from '../Footer'
import Box from '@material-ui/core/Box';
import {Divider} from '@material-ui/core'
import Footernew from '../Footernew'
// import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
function FunctionProperly(props) {


    // const [selectedOptions, setSelectedOptions] = useState([])
    const Data=[];
    const [products,setProducts]=useState(JSON.parse(localStorage.getItem('functionProperly')))

    const [count,setCount]=useState(JSON.parse(localStorage.getItem('count')))
    const [processor,setProcessor]=useState(JSON.parse(localStorage.getItem('processor')))
    const [ram,setRam]=useState(JSON.parse(localStorage.getItem('ram')))
    const [harddisk,setharddisk]=useState(JSON.parse(localStorage.getItem('harddisk')))

    const [touchscreen,setTouchscreen]=useState(JSON.parse(localStorage.getItem('touchscreen')))
    const [screensize,setScreensize]=useState(JSON.parse(localStorage.getItem('screensize')))
    const [graphics,setGraphics]=useState(JSON.parse(localStorage.getItem('graphics')))


    const [check,setCheck]=useState(false)
    const [divStyle,setDivStyle]=useState({color:'none'})

    const handleOnClick=(products)=>{
        // console.log("calling handle event",JSON.parse(data))
        props.history.push({
             pathname:"/age",
          state:products
            
            })
    
            localStorage.setItem('age',JSON.stringify(products))
            localStorage.setItem('count',JSON.stringify(count))
            localStorage.setItem('processor',JSON.stringify(processor))
            localStorage.setItem('ram',JSON.stringify(ram))
            localStorage.setItem('harddisk',JSON.stringify(harddisk))

            localStorage.setItem('touchscreen',JSON.stringify(touchscreen))
            localStorage.setItem('screensize',JSON.stringify(screensize))
            localStorage.setItem('graphics',JSON.stringify(graphics))
    }


//     function getDropdownButtonLabel({ placeholderButtonLabel, value }) {
//         if (value && value.some((o) => o.value === "*")) {
//           return `${placeholderButtonLabel}: All`;
//         } else {
//           return `${placeholderButtonLabel}: ${value.length} selected`;
//         }
//       }

    
//   function onChange(value, event) {
//     if (event.action === "select-option" && event.option.value === "*") {
//       this.setState(this.options);
//     } else if (
//       event.action === "deselect-option" &&
//       event.option.value === "*"
//     ) {
//       this.setState([]);
//     } else if (event.action === "deselect-option") {
//       this.setState(value.filter((o) => o.value !== "*"));
//     } else if (value.length === this.options.length - 1) {
//       this.setState(this.options);
//     } else {
//       this.setState(value);
//     }
//   }
    return (
        <>
        <div className="container" style={{display:'flex',marginTop:150}}>
       
                   
        <div className="row">
            <div className="col-md-12">
                        <div className="function-container">
                            <h3 className="function-heading">Does Your Device Function Properly?</h3>

                            {/* <ReactMultiSelectCheckboxes
      options={[{ label: "All", value: "*" }, ...options]}
      placeholderButtonLabel="Colors"
      getDropdownButtonLabel={getDropdownButtonLabel}
      value={selectedOptions}
      onChange={onChange}
      setState={setSelectedOptions}
    /> */}
                                <div className="row" style={{marginLeft:10}}>
                                    <div className="col-md-3 box ">
                                        
                                    <ul><input type="checkbox"  id="cb1" />
                                        <div> <img className="img" src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/5f6d93d81a185.png" /></div><br />
                                    </ul>
                                    <div className="p-box"><p>Screen not working,discoloration, blurr, line/spots</p></div>
                                    </div>

                                    <div className="col-md-3 box">
                                    <ul><input type="checkbox" id="cb1" />
                                        <div> <img className="img" src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/5f6d9a590140d.png" /></div><br />
                                        </ul>
                                        <div className="p-box"><p>Keyboard not working;key(s) missing/not working</p></div>
                                    </div>

                                    <div className="col-md-3 box">
                                    <ul><input type="checkbox" id="cb1" />
                                        <div> <img className="img" src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/5f6d948a350ad.png" /></div><br />
                                        </ul>
                                        <div className="p-box"><p>CD/DVD Drive not working</p></div>
                                    </div>

                                    <div className="col-md-3 box">
                                    <ul><input type="checkbox" id="cb1" />
                                        <div> <img className="img" src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/5f6d9550f0840.png" /></div><br />
                                        </ul>
                                    <div className="p-box"><p>Touchpad not working;Left/Right click faulty  </p></div>
                                    </div>
                                </div>

                            <div className="row" style={{ marginLeft: 10 }}>

                                    <div className="col-md-3 box">
                                    <ul><input type="checkbox" id="cb1" />
                                        <div> <img className="img" src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/5f6d95a5ac0f1.png" /></div><br />
                                        </ul>
                                    <div className="p-box"><p>Battery dead;backup less than 30 minutes </p></div>
                                    </div>

                                    <div className="col-md-3 box">
                                    <ul><input type="checkbox" id="cb1" />
                                       
                                    </ul> <div> <img className="img" src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/5f6d9550f0840.png" /></div><br />
                                    <div className="p-box"><p>Speakers not working;faulty/cracked sound </p></div>
                                    </div>

                                    <div className="col-md-3  box">
                                    <ul><input type="checkbox" id="cb1" />
                                        <div> <img className="img" src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/5f6d99c29aea7.png" /></div><br />
                                        </ul>
                                    <div className="p-box"><p>Wifi not working </p></div>
                                    </div>

                                    <div className="col-md-3  box">
                                    <ul><input type="checkbox" id="cb1" />
                                        <div> <img className="img" src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/5f6d9a0b13af8.png" /></div><br />
                                        </ul>
                                    <div className="p-box"><p>Faulty charger;wire cut,Not available </p></div>
                                    </div>
                                </div>

                            <div className="row" style={{ marginLeft: 10 }}>
                                    <div className="col-md-3 box">
                                    <ul><input type="checkbox" id="cb1" />
                                        <div> <img className="img" src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/5f6d9ab75f1f6.png" /></div><br />
                                        </ul>
                                 <div className="p-box"><p>USB port not working</p></div>
                                    </div>
                                    <div className="col-md-3 box">
                                    <ul><input type="checkbox" id="cb1" />
                                        <div> <img className="img" src="https://s3n.cashify.in/cashify/productLinePartVariation/img/xxhdpi/5fe9b91df29e6.png" /></div><br />
                                        </ul>
                                    <div className="p-box"><p>Webcam not working </p></div>
                                    </div>
                                    <div className="col-md-3"></div>
                                    <div className="col-md-3"></div>
 

                                </div>
                 

                            <div className="text-center" style={{margin:"2%" }}>
                                <Button variant="contained"  onClick={()=> handleOnClick(products)} style={{backgroundColor:'#0ebbf0',color:'white',height:40}} >

                                    <NavLink className="nav-link" exact to="/Age" style={{color:'white'}} > Continue </NavLink>

                                </Button>

                            </div>
            </div>
                    </div>


            {/* <div className="col-md-4">

                            <p>div for device evaluation</p>
            </div>  */}
       
                </div>
                <Box
        boxShadow={1}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '27rem', height: '74.5rem' ,marginLeft:30,borderRadius:20,    boxShadow: '0px 10px 12px rgba(0,0,0,0.1)'}}
      >
        <img style={{width:200,height:200,marginLeft:50}} src={'https://lapify.in/images/' + products.image}/>
        <span style={{marginLeft:20,fontWeight:'bold'}}>
           
           <p style={{fontStyle:'italic'}}>{products.name}</p>
           <p style={{fontStyle:'italic'}}>${products.price}</p>
         </span>
       <Divider style={{marginTop:10}}/>
       <p style={{margin:'20px 0 0 20px',fontWeight:'bold',fontStyle:'italic'}}>Device Evaluation</p>  
       <p style={{margin:'30px 0 0 20px',fontStyle:'italic'}}>   Does the Laptop Switch ON? </p>
       <li style={{margin:'10px 0 0 20px',fontStyle:'italic'}}>{count}</li>
       <div style={{marginLeft:20}}> 
       <p style={{marginTop:20,fontStyle:'italic'}}>   System Configuration </p> 
     
           <li style={{fontStyle:'italic'}}>{processor}</li>
           <li style={{fontStyle:'italic'}}>{ram}</li>
           <li style={{fontStyle:'italic'}}>{harddisk}</li>
      
     
       </div>
       <div style={{marginLeft:20}}>
       <p style={{marginTop:20,fontStyle:'italic'}}> Additional Features</p>
      <li style={{fontStyle:'italic'}}>{touchscreen}</li>
      <li style={{fontStyle:'italic'}}>{screensize}</li>
      <li style={{fontStyle:'italic'}}>{graphics}</li>
     
       </div>
      </Box>
      </div>
            

            <Footernew/>
        </>
    )
}

export default FunctionProperly;
