import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Drawer from '@material-ui/core/Drawer';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Footernew from './Footernew';

const useStyles = makeStyles({
    list: {
      width: 500,
    },
    fullList: {
      width: 900,
      padding:20,
    },
  });
  


function Banktransferdetail() {
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

     return(
         <>
      <form onSubmit={submit} style={{marginLeft:220}}>
      <div style={{padding:30}}>
      
  
      <h1 style={{fontSize:20,marginTop:160}}>Add <span style={{color:'#f5b342'}}>Bank </span>Details</h1>
      
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
        {/* <Checkbox
        defaultChecked
        onChange={handlecheked}
        value={checked}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> */}
     
      </div>
      <div style={{backgroundColor:'#e3dada',marginTop:20,justifyContent:'center',height:30,width:450,fontSize:13,display:'flex',alignItems:'center'}}>
     <LockIcon style={{width:12,height:12,alignItems:'center'}}/>
      <span>Your account is encrypted and 100% safe with us</span>
        </div>
        <Button style={{marginTop:50,width:'41%',backgroundColor:'#0ebbf0',color:'white'}} variant="contained" color="white">
  Add Account
</Button>
      </div>
      </form>
      <Footernew style={{marginTop:30}}/>
      </>
  
    )
}

export default Banktransferdetail
