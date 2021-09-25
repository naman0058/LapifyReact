
import React, { Component } from 'react'
import TextField from '@mui/material/TextField';


export default class Addnew extends Component {

constructor(props) {
  super(props)

  this.state = {
    number:'',
    name:'',
    landmark:'',
    pincode:'',
    city:'',
    state:'',
    area:'',
    name:'',
    usernumber:''
  }
}


  submit=(e)=>{
    e.PreventDefault()
   
      axios
          .get('https://lapify.in/api/get-address?usernumber=9582172786')
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


     render() {
       const { number,name,landmark,pincode,city,state,area,name,usernumber}=this.state
    return (
        <>
      
            <form  onSubmit={this.submit()}>
            <TextField
          label="name"
          id="margin-none"
          value={name}
          onChange= {this.onChange}
          id='name'
          //onChange={(e)=>setName(e.target.value)}
          className={classes.textField}
      
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
          className={classes.textField}
         
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
          className={classes.textField}
      
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
          className={classes.textField}
      
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
          className={classes.textField}
        
          style={{width:450}}
        />
        </div>
        <div>
      
      <TextField
          label="Landmark"
          id="margin-none"
          value={landmark}
          onChange={this.onChange}
          id='landmark'
         // onChange={(e)=>setLandmark(e.target.value)}
          className={classes.textField}
          
          style={{width:450}}
        />
        </div>
     
      
      <TextField
          label="area"
          id="margin-none"
          value={area}
          onChange={this.onChange}
          id='area'
          //onChange={(e)=>setArea(e.target.value)}
          className={classes.textField}
         
         
          style={{width:450}}
        />
         <TextField
          label="area"
          id="margin-none"
          value={usernumber}
          onChange={this.onChange}
          id='area'
          //onChange={(e)=>setArea(e.target.value)}
          className={classes.textField}
         
         
          style={{width:450}}
        />
            </form>
      
        </>
    )
}
}





















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
