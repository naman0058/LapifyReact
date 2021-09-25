

import React, { useState } from 'react'
import "../css/DeviceSwitch.css"

import Footer from '../Footer'
import Box from '@material-ui/core/Box';
import { Divider } from '@material-ui/core'
import { NavLink } from "react-router-dom"
import { useHistory } from 'react-router';

import { RadioGroup, Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import { useEffect, useDispatch } from 'react'
import Footernew from '../Footernew'



// const getLocalItems=()=>{
//     var data = JSON.parse(localStorage.getItem('Version'))

//     if(data){
//         return JSON.parse(localStorage.getItem('lists'))
//     }else{
//         return []
//     }
// }





function DeviceSwitch(props) {

    const history = useHistory()
    //    const dispatch=useDispatch()


    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('DeviceSwitch')))
    // alert(products)
    //const [inputData,setInputData]=useState('')
    const [count, setCount] = useState('yes');

    console.log('hello', products)

    // const [items,setItems]=useState(getLocalItems())
    //const [touchscreen, setTouchscreen] = React.useState('');
    /*const addItems=()=>{
        if(!inputData){
    
        }else{
            setItems([...items,inputData])
            setInputData()
        }
      
        console.log('inputdata',inputData)
    
         //localStorage.setItem('LaptopSwitchOn', inputData.toString());       JSON.stringify(items)
    
    }*/
    //    useEffect(() => {
    // //    var laptopswitchon = localStorage.getItem('LaptopSwitchOn');
    //       //console.log('res',localStorage.getItem('DeviceSwitch'))
    //       setCount(localStorage.getItem('DeviceSwitch'))
    //       fromSession()
    //       console.log()

    //    }, [])

    //    const fromSession=()=>{
    //    // var data = JSON.parse(localStorage.getItem('DeviceSwitch'))
    //     // console.log("calling getdata",data.Name)
    //     console.log("product",products)

    // }


    const handleOnClick = (products) => {
        // console.log("calling handle event",JSON.parse(data))
        props.history.push({
            pathname: "/systemConfiguration",
            state: products

        })

        localStorage.setItem('systemconfiguration', JSON.stringify(products))
        localStorage.setItem('count', JSON.stringify(count))
    }



    const handle = (event) => {
        setCount(event.target.value)
    }
    //     localStorage.setItem('DeviceWidth',event.target.value)
    //     setCount(event.target.value)
    //     console.log()
    //    }
    // localStorage.setItem('Version',)
    //  var laptopswitchon = localStorage.getItem('LaptopSwitchOn');
    //console.log('res',laptopswitchon)



    return (
        <>
            <div style={{ display: 'flex', marginLeft: 95, marginTop: 150 }}>
                <div className="row" style={{ width: 600 }}>
                    <div className="col-md-11">
                        <Card style={{ height: 500, width: 700, boxShadow: '0px 10px 12px rgba(0,0,0,0.1)', borderRadius: 20 }}>


                            <FormControl component="fieldset" style={{ padding: 170 }}>
                                {/* <FormLabel component="legend">Touch Screen</FormLabel> */}

                                <p>  Does the Laptop switch on? </p>
                                <p>  See what this means?</p>

                                <RadioGroup value={count} onChange={handle} >
                                    <label >
                                        <span aria-disabled="false">
                                            <div className="row">

                                                <div className="features-box">
                                                    <FormControlLabel value="yes" style={{ width: 500, color: 'black' }} control={<Radio />} label="yes" checked={count === "yes" ? true : false} />
                                                </div>
                                                <div className="features-box">
                                                    <FormControlLabel value="No" checked={count === "No" ? true : false} style={{ width: 500, color: 'black' }} control={<Radio />} label="no" />
                                                </div>

                                            </div>
                                        </span>
                                    </label>
                                </RadioGroup>
                            </FormControl>
                        </Card>
                    </div>
                </div>


                {/*<NavLink to='/systemconfiguration'>*/}






























                {/*<div className="container" >
        <div className="row">
<div className="col-md-12" style={{height:500,width:800}}>
            <div className="switch-container">
                
                    <h3 style={{ textAlign: "center", marginTop:20 }}>Does The Laptop Switch On?</h3>
                


                    <div className="deviceswitch">


                    <label className="labelswitch" >
                        <span className="span1switch" aria-disabled="false">
                            <NavLink exact to="/SystemConfiguration" >
                                <span className="span2switch" >

                                    <input 
                                    name="question"
                                    type="radio"
                                    value={confirm}
                                    value="yes"
                                    onChange={(e)=>setConfirm(e.target.value)}
                                     defaultValue="Yes" />
                                </span>
                                </NavLink>

                        </span>

                        <span className="span3switch" >
                     yes</span>
                    </label>
                </div>
 

                <br />

                <div className="deviceswitch"   value={cancil}
                                    onChange={(e)=>setCancil(e.target.value)}>
                    <label className="labelswitch">
                        <span className="span1switch" aria-disabled="false">
                            <NavLink exact to="/SystemConfiguration" >
                                <span className="span2switch">
                                    <input 
                                    name="question" 
                                    type="radio" 
                                  value="no"
                                 
                                    defaultValue="No" />
                                </span></NavLink>

                        </span>

                        <span className="span3switch" >
                            no</span>
                    </label>
                </div>


            </div>
                    </div>

                   

                </div>
            //exact to="/systemconfiguration
            */}

                <Box
                    boxShadow={1}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ width: 400, height: '31.5rem', marginRight: 70, marginLeft: 200, borderRadius: 20, boxShadow: '0px 10px 12px rgba(0,0,0,0.1)' }}
                >
                    <div>
                        <img style={{ width: 200, height: 200, marginLeft: 50 ,objectFit:'contain'}} src={'https://lapify.in/images/' + products.image} />
                        <span style={{marginLeft:20,fontWeight:'bold'}}>
           
           <p style={{fontStyle:'italic'}}>{products.name}</p>
           <span  style={{fontStyle:'italic'}}>${products.price}</span>
         </span>
                        {/* <span style={{marginLeft:30}}>${products.price}</span></p> */}
                    </div>
                    <Divider style={{ marginTop: 10 }} />
                    <p style={{ margin: '20px 0 0 20px',fontStyle:'italic' }}>Device Evaluation</p>
                    <p style={{ marginTop: 20, marginLeft: 20 ,fontStyle:'italic'}}> Does the Laptop Switch ON?</p>

                 
                        <li style={{ marginLeft: 20 ,fontStyle:'italic'}}>{count} </li>
              



                </Box>

            </div>

            <div>
                <Button variant="contained" onClick={() => handleOnClick(products)} style={{ margin: 20, height: 40, marginLeft: "35%", backgroundColor: '#0ebbf0', color: 'white' }} >
                  
                    <NavLink className="nav-link"  style={{color:'white'}} exact to="/systemconfiguration" > Continue </NavLink>

                </Button></div>
            <Footernew />

        </>
    )
}

export default DeviceSwitch;
