
import React, { Component } from 'react'
import Footer from '../Footer'
import Downoad from '../GetApp'
import getapp1 from '../images/download3.jpg'
import { useHistory } from "react-router-dom";
import '../css/LaptopSeries.css'
import { stringify } from 'querystring';
import Footernew from '../Footernew'
import { useEffect } from "react";
import axios from 'axios'
import {Button,Divider} from '@material-ui/core';
import Repairingdrawer from './Repairingdrawer'
//import { useHistory } from 'react-router';

/////////////////////Showing Laptop Series page/////////////////////////////
// export default function Laptopss(props) {

    // import {useNavigate} from 'react-router-dom';
    // const navigate = useNavigate();
    // navigate('/home')

export default class Repairingdetails extends Component {
 
 

  constructor(props) {
      super(props)
  
      this.state = {
           data:[]
      }
  }
//   <div class='container' style={{marginTop:200,}}>
//   <div class='row'>
//   <div class='col-md-8'>
 
// <div style={{display:'flex'}}>
// <img style={{width:300,height:200,backgroundColor:'white',marginBottom:30}} src="data:image/jpeg;base64,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" class="card-img-top" alt="..."/>

// <h1>title</h1>
// </div>


// </div>
// <div class='col-md-4'>
// <Button variant="outlined" color="primary" style={{marginTop:50,marginLeft:70}}>
// Primary
// </Button>
// </div>
// </div>
// </div>
// <Divider/>







    // const history =useHistory()
    // const [data,setData]=useState(JSON.parse(localStorage.getItem('Brand')))




    // const fetch = () => {
    //     console.log("callig fetch data methods")
    //     axios
    //         .then((response) => {

    //             console.log(" list of brands", response.data);

    //             setdata(response.data)


    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }


    // const fetch = () => {
    //     console.log("callig fetch laptop series")
    //     axios
    //         .post('https://lapify.in/api/all-model',data)
    //         data:
    //         // .post('https://lapify.in/api/all-model='+29)
    //         //.post('https://lapify.in/api/all-model='+29)
    //         .then((response) => {

    //             // console.log(" list of brands============>", JSON.stringify(response.data));

    //             setData(response.data)


    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });

    componentDidMount = async () => {
        const Data =  JSON.parse(localStorage.getItem("AllrepairingBrand"))
// console.log("shahid=====>>",Data.id)
const data={
    id:Data.id
}
axios.post("https://lapify.in/api/all-model",data)
.then((response)=>{
    if(response.status===200){
        console.log("response",response)
        this.setState({
            data:response.data
        })
    }
    
})
.catch((error)=>{
    console.log("error=>",error)
})
// console.log("shahid=====>>",localStorage.getItem("Brand"))


        // const Brand = await localStorage.getItem('Brand');
        // // alert(brandid)
        // var url = 'https://lapify.in/api/all-model';
        // var data = { id }

        // fetch(url, {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: new Headers({ 'Content-Type': 'application/json' })
        // }).then(res => res.json())
        //     .catch(error => console.error("Error", error))
        //     .then(result => {
        //         console.log('minikhi', result)
        //         if (result[0]) {
        //             //console.log(result[0].addon_type)

        //             this.setState({
        //                 refreshing: false,
        //                 data: result[0]        //setstate of data which is convert in to fetch data and pass them in to component see below
        //             })
        //         }
        //         else {

        //             this.setState({
        //                 refreshing: false,
        //                 data: ['result']        //setstate of data which is convert in to fetch data and pass them in to component see below
        //             })

        //         }
        //     })
    }






     handleOnClick =(e)=>{
        // console.log("calling handle event", JSON.parse(e))
         this.props.history.push({
             pathname:"/Version",
             
            })
            localStorage.setItem('Version', JSON.stringify(e))
    }

    render() {

    
        // console.log('past data', rest)
        return (
            <>
                {/* {console.log("hello",props.data)} */}
              
                    {/* <button onClick={demo}> data</button> */}
                    {/* <div className="series-section">  </div> */}
                     <div class='container' style={{marginTop:200,}}>
                    <Divider style={{marginBottom:30}}/>
 <div class='row'>
 <div class='col-md-8'>
 
<div style={{display:'flex'}}>
<img style={{width:300,height:200,backgroundColor:'white',marginBottom:30}} src="data:image/jpeg;base64,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" class="card-img-top" alt="..."/>

 <h1>title</h1>
</div>


 </div>
<div class='col-md-4'>
 <Button variant="contained" color="primary" style={{marginTop:50,marginLeft:70,backgroundColor:'#0ebbf0',color:'white',border:'#0ebbf0'}}>
<Repairingdrawer/>
</Button>
</div>
 </div>
 </div>
 <Divider style={{width:'83%',marginLeft:115}}/>

                   
                {/* <Downoad image={getapp1} title="Hello!" /> */}

                
                <Footernew />

            </>

        )







    }
}