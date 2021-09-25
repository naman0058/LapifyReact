import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
function Edit() {


  const useStyles = makeStyles({
    list: {
      width: 500,
    },
    fullList: {
      width: 900,
      padding:20,
    },
  });

    const [state, setState] = useState({})
  const [data, setData] = useState({
    number:'',
    name:'',
    landmark:'',
    pincode:'',
    city:'',
    state:'',
    area:'',
    usernumber:''


  });
//   landmark, area, city, state, pincode, name, number, usernumber }
useEffect(() => {
  fetch()
}, [])


  const submit=(e)=>{
    e.PreventDefault()
   const fetch=()=>{
    axios
    .post('http://lapify.in/api/save-address',{
      name:data.name,
      number:data.number,
      landmark:data.landmark,
      pincode:data.pincode,
      city:data.city,
      states:data.states,
      area:data.area,
      usernumber:data.usernumber
    })
    .then(res=>{
      console.log(res.data)
  })
}
   }
      




     const handle=(e)=>{
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata)
      }
      
    return (
        <>
      
            <form  onSubmit={submit()}>
            <TextField
          label="name"
          id="name"
          value={data.name}
          onChange={(e)=>handle(e)}
          id='name'
          //onChange={(e)=>setName(e.target.value)}
          className={classes.textField}
      
          style={{width:450}}
        />
     
         
        <div>
      
      <TextField
          label=" Number"
          id="number"
          value={data.number}
          onChange={(e)=>handle(e)}
         
         // onChange={(e)=>setNumber(e.target.value)}
          className={classes.textField}
         
          style={{width:450}}
        />
        </div>
        <div>
      
      <TextField
          label="State"
         
          value={data.state}
          onChange={(e)=>handle(e)}
          id='states'
          //onChange={(e)=>setStates(e.target.value)}
          className={classes.textField}
      
          style={{width:450}}
        />
        </div>
        <div>
      
      <TextField
          label="City"
         
          value={data.city}
          onChange={(e)=>handle(e)}
          id='city'
          //onChange={(e)=>setCity(e.target.value)}
          className={classes.textField}
      
          style={{width:450}}
        />
        </div>
        
        <div>
      
      <TextField
          label="Pincode"
        
          value={data.pincode}
          onChange={(e)=>handle(e)}
          id='pincode'
          //onChange={(e)=>setPincode(e.target.value)}
          className={classes.textField}
        
          style={{width:450}}
        />
        </div>
        <div>
      
      <TextField
          label="Landmark"
    
          value={data.landmark}
          onChange={(e)=>handle(e)}
          id='landmark'
         // onChange={(e)=>setLandmark(e.target.value)}
          className={classes.textField}
          
          style={{width:450}}
        />
        </div>
     
        <div>
      
      <TextField
          label="usernumber"
         
          value={data.usernumber}
          onChange={(e)=>handle(e)}
          id='usernumber'
         // onChange={(e)=>setLandmark(e.target.value)}
          className={classes.textField}
          
          style={{width:450}}
        />
        </div>
      
      <TextField
          label="area"
        
          value={data.area}
          onChange={(e)=>handle(e)}
          id='area'
          //onChange={(e)=>setArea(e.target.value)}
          className={classes.textField}
         
         
          style={{width:450}}
        />
            </form>
      
        </>
    )
}

export default Edit




















// import React, { Component } from 'react'

// export default class Addnew extends Component {

    

//    submit=(e)=>{
// e.PreventDefault()
//    }


//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.submit()}>
//                 <TextField id="standard-basic" onChange={} value={} label="Standard" variant="standard" />
//                 <TextField id="standard-basic" label="Standard" variant="standard" />
//                 <TextField id="standard-basic" label="Standard" variant="standard" />
//                 <TextField id="standard-basic" label="Standard" variant="standard" />
//                 <TextField id="standard-basic" label="Standard" variant="standard" />
//                 <TextField id="standard-basic" label="Standard" variant="standard" />
//                 <TextField id="standard-basic" label="Standard" variant="standard" />
//                 <TextField id="standard-basic" label="Standard" variant="standard" />
//                 <Button type="submit" >Primary</Button>
//                 </form>
//             </div>
//         )
//     }
// }
