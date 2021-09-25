// import React,{useState,useEffect} from 'react'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core'
import exactvalue from '../images/exactvalue.jpg';
import TopSellingBrands from '../TopSellingBrands'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Footer from '../Footer'
import '../css/Version.css'
import {addToCart} from '../Redux/actions/cartAction'
import  {useDispatch} from 'react-redux'
import { useSelector} from 'react-redux'
import { useHistory } from 'react-router';
import Footernew from '../Footernew'
import axios from 'axios'
{/*import {getProductDetails} from '../Redux/actions/productAction'
import {addToCart} from '../Redux/actions/cartAction'
import  {useDispatch} from 'react-redux'
import { useSelector} from 'react-redux'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';*/}

////////////////Showing Exact Value/////////////////////////
// function Version(props) {

//   const dispatch = useDispatch()

//   const [product,setProduct]=useState(JSON.parse(localStorage.getItem('Version')))



export default class Version extends Component {

  constructor(props) {
      super(props)
  
      this.state = {
           data:[]
      }
  }
  


    componentDidMount = async () => {
        const Data =  JSON.parse(localStorage.getItem("Version"))
        // console.log("shahid=====>>",Data.id)
        const data={
            id:Data.id
        }
        axios.post("https://lapify.in/api/single-model-details",data)
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
    }

    //     const Version= await localStorage.getItem('Version');
    //     // alert(brandid)
    //     var url = 'https://lapify.in/api/single-model-details';
    //     var data = { id: Version }

    //     fetch(url, {
    //         method: 'POST',
    //         body: JSON.stringify(data),
    //         headers: new Headers({ 'Content-Type': 'application/json' })
    //     }).then(res => res.json())
    //         .catch(error => console.error("Error", error))
    //         .then(result => {
    //             console.log('minikhi', result)
    //             if (result[0]) {
    //                 //console.log(result[0].addon_type)

    //                 this.setState({
    //                     refreshing: false,
    //                     data: result[0]        //setstate of data which is convert in to fetch data and pass them in to component see below
    //                 })
    //             }
    //             else {

    //                 this.setState({
    //                     refreshing: false,
    //                     data: ['result']        //setstate of data which is convert in to fetch data and pass them in to component see below
    //                 })

    //             }
    //         })
    // }



  //   const product = useSelector(state => state.getProductDetails)

 additemcart = (e)=>{
 console.log("version page",e)
    
     this.props.history.push({
                pathname: '/device-Specification/DeviceSwitch',
             
                 })
    //new set
                 localStorage.setItem('DeviceSwitch', JSON.stringify(e))
    }

    
        
// useEffect(() => {
//    getDataFromSession()       
  
// }, [dispatch])



// useEffect(() => {
//     // getDataFromSession()       
//     fetch()
// }, [dispatch])

// const brandid = await AsyncStorage.getItem('brandid');
// var url = 'https://lapify.in/api/single-model-details';
// var data = { id: brandid }

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

//             setState({
//                 refreshing: false,
//                 data: result        //setstate of data which is convert in to fetch data and pass them in to component see below
//             })
//         }
//         else {

//             setState({
//                 refreshing: false,
//                 data: ['result']        //setstate of data which is convert in to fetch data and pass them in to component see below
//             })

//         }
//     })

// }
  
//  getDataFromSession=()=>{
//     var data = JSON.parse(localStorage.getItem('Version'))
//     console.log("calling getdata",data.Name)
//     // console.log("calling product",product)
    
// }

render() {
     
// const data=this.state.data
    return (
        <>
        <div className="container" style={{marginTop:150 }}>
                            
             {/* {console.log("hello from version", props.location.state)}  */}

                        <div className="version-section" >
                        {
                     this.state.data.map(e=>
                    <div className="row">
                   
                    <div className="col-md-4">
                           
                        <span> 
                         
                            <img className="img-fluid" style={{ paddingLeft: 50,objectFit:'contain' }}  onClick={()=> this.additemcart(e)}
                                //src={product.Url}
                                src={'https://lapify.in/images/' + e.image}
                                />
                           
                      
                            </span>
                            </div>
                            
                                 

                            <div className="col-md-4" style={{marginTop:90,}}>
                           
                             <h3>{e.name}</h3>
                             <img style={{width:50,height:50}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAC5lZz4i8YP1-bfPlf1GVpMeFV8i01yfZg&usqp=CAU'/>
                             <span style={{fontWeight:'bold',fontStyle:'italic'}}>{e.price}</span>
                        <div >
                                       
                                        {/* <p className="price-data">{product.price}</p> */}
                            </div>



                {/* <div>
                   <Button variant="contained" style={{ height: 40,marginLeft:10,backgroundColor:'#0ebbf0',color:'white'}} size="large" 
                  
                   endIcon={<ArrowRightAltIcon />} >
Get Exact Value */}
                    {/* <NavLink className="nav-link"  style={{color:'white'}} exact to="/Device-Specification/DeviceSwitch" > Get Exact Value</NavLink> */}
                        {/* </Button>
                        
                            </div> */}
                            </div>

                            <div className="col-md-4">

                            <img src={exactvalue} alt="exact value" className="banner-img" />
                            </div>
                            
                            </div>
                
                ) 

            }
            
                            </div>
            </div>
                            




   
    
         

          

  {/* <Card >
   <CardContent>
           <img src={product.detailsUrl}/>
           </CardContent>
</Card>*/}





  

 







                        <TopSellingBrands />
                        <Footernew />
                           
          
            
        </>

        
    )
}
}



 
 

