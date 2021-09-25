import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import Footernew from '../Footernew';
import { useEffect } from 'react';

// const useStyles = makeStyles({
//     list: {
//       width: 500,
//     },
//     fullList: {
//       width: 900,
//       padding:20,
//     },
//   });


 
  
  export default class Bulkenquirydetails extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
        number:'',
        name:'',
        address:'',
        pincode:'',
        city:'',
        state:'',
       
      }
    }
    
    
  

   
      
    
//   landmark, area, city, state, pincode, name, number, usernumber }


// useEffect(() => {
//     fetch()
//  }, [])



submit=(e)=>{
    e.PreventDefault()
    axios
    .get('')
    // .post('https://lapify.in/api/all-model='+29)
    //.post('https://lapify.in/api/all-model='+29)
    .then((response) => {

        // console.log(" list of brands============>", JSON.stringify(response.data));

       this.setState(response.data)


    })
    .catch((error) => {
        console.log(error);
    });
  }


  onChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
//   const fetch=()=>{

//   }
    //   axios
    //       .get('https://lapify.in/api/get-address?usernumber=${usernumber}',{
    //         name:data.name,
    //         number:data.number,
    //         landmark:data.landmark,
    //         pincode:data.pincode,
    //         city:data.city,
    //         states:data.states,
    //         area:data.area,
    //         usernumber:data.area,
    //       })
    //       .then(res=>{
    //         console.log(res.data)
    //     })
    //  }



    render() {

      const {number, name, address, pincode, city, state}=this.state
    return (
        <>
      <div>
            <form  style={{marginLeft:200,marginTop:200}} onSubmit={(e)=>this.submit(e)}>
            <TextField
          label="name"
          id="margin-none"
          value={name}
          onChange={this.onChange}
          id='name'
         
          //onChange={(e)=>setName(e.target.value)}
        
      
          style={{width:450}}
        />
     
         
        <div>
      
      <TextField
          label=" Number"
          id="margin-none"
          value={number}
          onChange={this.onChange}
          id='number'
         
         // onChange={(e)=>setNumber(e.target.value)}
        
         
          style={{width:450}}
        />
        </div>
        <div>
      
      <TextField
          label="State"
          id="margin-none"
          value={state}
          onChange={this.onChange}
          id='states'
         
          //onChange={(e)=>setStates(e.target.value)}
        
      
          style={{width:450}}
        />
        </div>
        <div>
      
      <TextField
          label="City"
          id="margin-none"
          value={city}
          onChange={this.onChange}
          id='city'
         
          //onChange={(e)=>setCity(e.target.value)}
        
      
          style={{width:450}}
        />
        </div>
        
        <div>
      
      <TextField
          label="Pincode"
          id="margin-none"
          value={pincode}
          onChange={this.onChange}
          id='pincode'
         
          //onChange={(e)=>setPincode(e.target.value)}
        
        
          style={{width:450}}
        />
        </div>
        <div>
      
      <TextField
          label="address"
          id="margin-none"
          value={address}
          onChange={this.onChange}
          id='address'
         
         // onChange={(e)=>setLandmark(e.target.value)}
        
          
          style={{width:450}}
        />
        </div>

        <div>
        <Button type='submit' style={{marginTop:50,width:'39%',backgroundColor:'#0ebbf0',color:'white'}} variant="contained" color="primary">
  Enquiry
</Button>
        </div>
            </form>
            </div>

            <Footernew/>
           
      
        </>
    )
}}


