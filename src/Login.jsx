
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './css/Login.css'
import Footer from './Footer'
import axios from 'axios'
//import OTPInput, { ResendOTP } from "otp-input-react";
import Footernew from './Footernew'

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

const url='https://lapify.in/api/save-user'

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  const [data,setData]=useState({
    otp:'',
  
    
})

const submit=(e)=>{
e.PreventDefault()
axios.post(url,{
    otp:data.otp,

    //iduser:parseInt(data.iduser)
    //or
    //  iduser:data.iduser
})
   .then(res=>{
       console.log(res.data)
   })
}

const handle=(e)=>{
   const newdata={...data}
   newdata[e.target.id]=e.target.value
   setData(newdata)
   console.log(newdata)
}





  // function handleSubmit(event) {
  //   event.preventDefault();
  // }
  //////////////////////////////otp///////////////////////
  // const [otp,setOtp] =useState("");

  ///////////////////////////////////////////////////////////////

    return (
  <>
        <div className="box" style={{height:400,width:500 ,marginTop:80 }} >
        <div className="Login">
          <Form onSubmit={(e)=>submit(e)}>
            <Form.Group size="lg" controlId="otp">
              <Form.Label> Login</Form.Label>
              <Form.Control
                autoFocus
                type="number"
                id='otp'
                value={data.otp}
                onChange={(e)=>handle(e)}
                //onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
           
              {/* <Form.Group size="lg" controlId="otp">
                <Form.Label>OTP</Form.Label>
                <Form.Control
                  type="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </Form.Group> */}
              
            <Button  type="submit"  style={{height:40,width:150}} className="button">
              Login
        </Button>
          </Form>
          </div></div>

        <Footernew style={{marginTop:40}}/>

  </>
    )
}


export default Login;








