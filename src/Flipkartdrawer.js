import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Drawer from '@material-ui/core/Drawer';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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

export default function Flipkartdrawer({props}) {
  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  
  const [checked, setChecked] = React.useState(true);
  const [state, setState] = React.useState({
  
  });


const submit=(e)=>{
  e.PreventDefault()
}
 

  const handleChange = (event) => {
    setEmail(event.target.value);
  };


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
  
    <form onSubmit={submit}>
      <div style={{padding:30}}>
     
      <strong style={{fontSize:30}}>Add Flipkart Pay Gift Card</strong> 
      <div> 
      <TextField
          label="Enter Email"
          id="margin-none"
          onChange={ handleChange}
          className={classes.textField}
          value={email}
          style={{width:450}}
        />
        </div> 
       <p style={{marginTop:30,fontSize:12}}>An OTP will be sent to this email. Voucher code will be sent to this email only.</p>
       <p style={{marginTop:0,fontSize:12}}>Make sure you have added correct email.</p> 
       <div style={{backgroundColor:'#e3dada',justifyContent:'center',marginTop:40,width:'100%', fontSize:13,display:'flex',alignItems:'center'}}>
     <LockIcon style={{width:12,height:30,alignItems:'center'}}/> <span>Your account is encrypted and 100% safe with us</span>
     </div>
     <Button style={{marginTop:10,width:'100%',backgroundColor:'#82b74b',color:'white'}} variant="contained" color="primary">
  Add Account
</Button>

  </div>
  </form>
    
      
      
  );

  return (
    <>
    <div>
      {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <labal labal="edit" onClick={toggleDrawer(anchor, true)}>Link</labal>
          
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
        
      ))}
    </div>
   
    </>
  );
}