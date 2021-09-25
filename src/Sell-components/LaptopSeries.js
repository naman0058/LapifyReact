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
//import { useHistory } from 'react-router';

/////////////////////Showing Laptop Series page/////////////////////////////
// export default function Laptopss(props) {

    // import {useNavigate} from 'react-router-dom';
    // const navigate = useNavigate();
    // navigate('/home')

export default class LaptopSeries extends Component {
 
 

  constructor(props) {
      super(props)
  
      this.state = {
           data:[]
      }
  }
  







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
        const Data =  JSON.parse(localStorage.getItem("Brand"))
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
                <div className="container" style={{ marginTop: 110 }}>
                    {/* <button onClick={demo}> data</button> */}
                    {/* <div className="series-section">  </div> */}

                    <span>
                        <h3 style={{ textAlign: "center", fontFamily: "Montserrat", marginTop: 70 }}>Select Products</h3>
                    </span>

                    <div className="container" >

                        <div className="row" >
                            {
                                this.state.data.length !== 0 ?   this.state.data.map(e => 
                                    <div className="col-md-4"
                                    >
                                      
                                      
                                        <div className="brand-series">
                                        <span>
                                            <img style={{ width: 300, height: 200,objectFit:'contain' }} className="img-fluid" onClick={() =>this.handleOnClick (e)}
                                                alt={e.name} src={'https://lapify.in/images/' + e.image} /></span>
                                             <p className="series-name" style={{fontStyle:'italic'}}>{e.name}</p>
                                             <p className="series-name">{e.price}</p>
                                        </div>
                                    </div>
                              ) : ""
                            }
                        </div>

                    </div>

                </div>
                {/* <Downoad image={getapp1} title="Hello!" /> */}

                
                <Footernew />

            </>

        )







    }
}