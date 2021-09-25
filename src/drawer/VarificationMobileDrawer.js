import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';




const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: 600,
    padding:20,
  },
});

export default function VarificationMobileDrawer({props}) {
  const classes = useStyles();
  const [state, setState] = React.useState({

  })
 

const [code, setCode] =useState()







  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div >
      
      <div style={{padding:30}}>
      
  <img style={{width:400,height:200,marginTop:60}} src='https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY218_.jpg'/>
      <h1 style={{fontSize:20,marginTop:60}}>You are 1-step aweay from selling</h1>
      <p> your device</p>
      <p> Please enter your phone number</p>
      
      <TextField
          label="Mobile no*"
          id="margin-none"
          value={code}
          onChange={(e)=>setCode(e.target.value)}
          className={classes.textField}
         
          style={{width:350}}
        />
        
  
     
      
      
     <Button style={{marginTop:50,width:'90%'}} variant="contained" color="primary">
  continue
</Button>
        </div>
      </div>
      
      
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