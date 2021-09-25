import React ,{useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import { useEffect } from "react";

import Radio from '@material-ui/core/Radio';
import SearchIcon from '@material-ui/icons/Search';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';


const useStyles = makeStyles({
  list: {
    width: 500,
  },
  fullList: {
    width: 900,
    padding:20,
  },
});

export default function Adddrawer({props}) {
  const classes = useStyles();
  {/*const [location, setLocation]=useState('');
  const [flatno, setFlatno]=useState('');
  const [landmark, setLandmark]=useState('');
  const [pincode, setPincode]=useState('');
  const [city, setCity]=useState('');
  const [state, setState]=useState('');
const [alternateno, setAlternateno]=useState('');*/}

const [state, setState] = useState({})
  const [data, setData] = useState({
    number:'',
    name:'',
    landmark:'',
    pincode:'',
    city:'',
    states:'',
    area:'',
    usernumber:'',


  });
 
const [selectedValue, setSelectedValue]=React.useState()

// const [usernumber, setUsernumber]=React.useState()

// const [number, setNumber]=React.useState()
// const [landmark, setLandmark]=React.useState()
// const [pincode, setPincode]=React.useState()
// const [city, setCity]=React.useState()
// const [name, setName]=React.useState()
// const [states, setStates] = React.useState()
// const [area, setArea]= React.useState()



// useEffect(() => {
//   console.log('useeffect from searchlaptop')
//   fetch()
// }, [])




const submit=(e)=>{
  e.PreventDefault()
 
    axios
        .post('http://lapify.in/api/save-address',{
          name:data.name,
          number:data.number,
          landmark:data.landmark,
          pincode:data.pincode,
          city:data.city,
          states:data.states,
          area:data.area,
          usernumber:data.usernumber,

        })
        .then(res=>{
          console.log(res.data)
      })
   }
   
//         .then((response) => {
            
//             console.log(" list of brands", response.data);
           
//             setData(response.data)
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

const handle=(e)=>{
  const newdata={...data}
  newdata[e.target.id]=e.target.value
  setData(newdata)
  console.log(newdata)
}


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <form onSubmit={()=>submit()}>
    
      <div style={{padding:30}}>
      <h1 style={{fontSize:20}}>Address</h1>
     {/* <SearchIcon style={{marginTop:18}}/>
      <TextField
          label="Search your location here"
          id="margin-none"
        
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
         
          className={classes.textField}
         
          style={{width:450}}
        />
        <div>
        <Button style={{marginTop:10,backgroundColor:'#82b74b',color:'white'}} variant="contained">
 <LocationSearchingIcon/> <span style={{marginLeft:10}}>Use my current location</span>
</Button>
  </div>*/}
    
    <div>
      
      <TextField
          label="name"
          id="margin-none"
          value={data.name}
          onChange={(e)=>handle(e)}
          id='name'
          //onChange={(e)=>setName(e.target.value)}
          className={classes.textField}
      
          style={{width:450}}
        />
        </div>
         
        <div>
      
      <TextField
          label=" Number"
          id="margin-none"
          value={data.number}
          onChange={(e)=>handle(e)}
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
          value={data.states}
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
          id="margin-none"
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
          id="margin-none"
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
          id="margin-none"
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
          label="area"
          id="margin-none"
          value={data.area}
          onChange={(e)=>handle(e)}
          id='area'
          //onChange={(e)=>setArea(e.target.value)}
          className={classes.textField}
         
         
          style={{width:450}}
        />
        </div>
        <div>
      
      <TextField
          label="usernumber"
          id="margin-none"
          value={data.usernumber}
          onChange={(e)=>handle(e)}
          id='usernumber'
          //onChange={(e)=>setArea(e.target.value)}
          className={classes.textField}
         
         
          style={{width:450}}
        />
        </div>
      
{/*      
        <div>
      
      <TextField
          label=" userNumber"
          id="margin-none"
          value={usernumber}
          onChange={(e)=>setUsernumber(e.target.value)}
          className={classes.textField}
         
          style={{width:450}}
        />
        </div> */}
       



  




  {/*<div>
    <Radio
      checked={selectedValue === 'a'}
      onChange={handleChange}
      value="a"
      name="radio-button-demo"
      inputProps={{ 'aria-label': 'A' }}
    ></Radio><span>HOME</span>
    <Radio
      checked={selectedValue === 'b'}
      onChange={handleChange}
      value="b"
      name="radio-button-demo"
      style={{marginLeft:20}}
      inputProps={{ 'aria-label': 'B' }}
    ></Radio><span>OFFICE</span>
      <Radio
      checked={selectedValue === 'c'}
      onChange={handleChange}
      value="c"
      name="radio-button-demo"
      inputProps={{ 'aria-label': 'c' }}
    ></Radio><span>OTHER</span>
  </div>*/}
  <Button  style={{width:'80%',marginLeft:45,marginBottom:20,marginTop:30,backgroundColor:'#0ebbf0',border:'#0ebbf0',color:'white'}} variant="contained" color="primary">
  Save Address
</Button>
      </div>
      </form>
      
      
  );

  return (
    <>
    <div>
      {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <labal labal="edit" onClick={toggleDrawer(anchor, true)}>Add New</labal>
          
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
        
      ))}
    </div>
   
    </>
  );
}