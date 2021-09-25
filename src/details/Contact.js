import React from 'react'
import {Card,Divider,Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import Footernew from '../Footernew'
function Contact() {


    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
    function handleSubmit(event) {
      event.preventDefault();
    }


    return (
        <>
        <Card style={{display:'flex',margin:'50px 50px 0 50px'}}>
            <div  style={{marginTop:100,marginLeft:50}}>
            <h1 style={{color:'#65f0f0',fontFamily:'cursive'}}>We’d love to</h1>
            <h1 style={{fontFamily:'cursive'}}>hear from you</h1>
            </div>
            <div>
                <img style={{width:500,height:300,margin:'50px 50px 30px 400px'}} src='https://thumbs.dreamstime.com/b/hands-holding-contact-us-38015088.jpg'/>
            </div>
            </Card>
            <h1 style={{margin:'30px 0 0 500px'}}>Get in Touch</h1> 
            <Divider style={{border:'1px solid',margin:'0 640px 0 500px'}}/>
            
           
            <p style={{marginLeft:50,marginTop:30}}>Please fill out the quick form and we will be in touch with lightening speed.</p>
            <div style={{display:'flex'}}>
            <form style={{marginLeft:50}} onSubmit={handleSubmit}>
            <div >
            <TextField style={{width:515}} id="outlined-basic" label="Name" variant="outlined" />
            </div>
            <div style={{marginTop:30,}}>
  <TextField style={{width:250}} id="outlined-basic" label="Email" variant="outlined" />
  <TextField style={{width:250,marginLeft:15}} id="outlined-basic" label="Mobile" variant="outlined" />
  </div>
  <div style={{marginTop:10}}>
  <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
      />
      </div>
               <div >
            <TextField style={{width:515,marginTop:10}} id="outlined-basic" label="Description" variant="outlined" />
            </div>
            <Button style={{width:515,marginTop:10,backgroundColor:'#0ebbf0',color:'white'}} variant="contained"  color="primary">
  SUBMIT
</Button>
</form>
<div style={{display:'flex'}}>
<div style={{marginLeft:60}}>
    <h3>Connect with us:</h3>
    <p>For support or any questions: Call <br/>us at 7290068900 or Email us<br/> at support@cashify.in for Sell &<br/> Repair Queries</p>  
</div>
<div style={{marginLeft:60}}>
<h3>Corporate Office:</h3>
3rd & 4th Floor, Plot No. 7, Sector 44, <br/> Gurugram, Haryana 122003 See on <br/> map
</div>
</div>
</div>
<Footernew/>
        </>
    )
}

export default Contact
