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

export default function Bankdetailsslider({props}) {
  const classes = useStyles();


  const [checked, setChecked] = React.useState();

const [accountno, setAccountno]=React.useState();
const [confirmaccountno, setConfirmAccountno]=React.useState();
const [beneficiaryname, setBenificiaryName]=React.useState();
const [ifsccode, setIfscCode]=React.useState();
const [bankname, setBankName]=React.useState();





  const [selectedValue, setSelectedValue] = React.useState('');
  const [state, setState] = React.useState({
  
  });






const submit=(e)=>{
  e.PreventDefault()
}
//fuction pass by props
{/*
const handle1=(e)=>{
  setAccountno(e.target.value)

}
const confirma=(e)=>{
  setConfirmAccountno(e.target.value)
}

const beneficn=(e)=>{
  setBenificiaryName(e.target.value)
}

const icode=(e)=>{
  setIfscCode(e.target.value)
}

const bname=(e)=>{
  setBankName(e.target.value)
}
*/}






  const handlecheked = (event) => {
    setChecked(event.target.value);
  };

 /* const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };*/


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (

      <form onSubmit={submit}>
      <div style={{padding:30}}>
      
  
      <h1 style={{fontSize:20}}>Add Bank Details</h1>
      
      <TextField
          label="Account no*"
          id="margin-none"
          value={accountno}
          onChange={(e)=>setAccountno(e.target.value)}
          className={classes.textField}
         
          style={{width:450}}
        />
        
  <div>
      
      <TextField
          label="ConfirmAccountno*"
          id="margin-none"
          value={confirmaccountno}
          className={classes.textField}
          onChange={(e)=>setConfirmAccountno(e.target.value)}
          style={{width:450}}
        />
        </div>
        <div>
      
      <TextField
          label="Beneficiary Name"
          id="margin-none"
          value={beneficiaryname}
          className={classes.textField}
          onChange={(e)=>setBenificiaryName(e.target.value)}
          style={{width:450}}
        />
        </div>
        <div>
      
      <TextField
          label="IFSC code*"
          id="margin-none"
          value={ifsccode}
          className={classes.textField}
        onChange={(e)=> setIfscCode(e.target.value)}
          style={{width:450}}
        />
        </div>
        <div>
      
      <TextField
          label="Bank Name"
          id="margin-none"
          value={bankname}
          className={classes.textField}
      onChange={(e)=>setBankName(e.target.value)}
          style={{width:450}}
        />
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <Checkbox
        defaultChecked
        onChange={handlecheked}
        value={checked}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <p style={{marginTop:25}}>I hereby declare that the details above are true to the<p>best of my knowledge and belongs to me.</p></p>
      </div>
      <div style={{backgroundColor:'#e3dada',justifyContent:'center',height:30,width:450,fontSize:13,display:'flex',alignItems:'center'}}>
     <LockIcon style={{width:12,height:12,alignItems:'center'}}/>
      <span>Your account is encrypted and 100% safe with us</span>
        </div>
        <Button style={{marginTop:50,width:'100%',backgroundColor:'#82b74b',color:'white'}} variant="contained" color="primary">
  Add Account
</Button>
      </div>
      </form>
      
      
  );

  return (
   
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
   
   
  );
}
