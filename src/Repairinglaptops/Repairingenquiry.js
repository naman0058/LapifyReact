import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import { useHistory } from "react-router-dom"
import classes from '../css/SearchLaptop.module.css'

import Footer from '../Footer'
import TopSellingBrands from '../TopSellingBrands'
import Work from '../Work'
import axios from 'axios'
import { Button } from '@material-ui/core';
import DoubleArrowTwoToneIcon from '@material-ui/icons/DoubleArrowTwoTone';
import { useEffect } from "react";
import { useDispatch, } from "react-redux";
import Howwork from "../Howwork";
import Footernew from '../Footernew'
import { Card ,Divider} from '@material-ui/core';
//useSelector


const Repairinghome= () => {
    const [data, setdata] = useState([])


    const dispatch = useDispatch()
    const history = useHistory()


    // useEffect(() => {
    //     dispatch(fetchProducts())
    //   }, [])

    useEffect(() => {
       fetch()
    }, [])



    const fetch = () => {
        console.log("callig fetch data methods")
        axios
            .get('https://lapify.in/api/myenquiry?number=9582172786')
            // .post('https://lapify.in/api/all-model='+29)
            //.post('https://lapify.in/api/all-model='+29)
            .then((response) => {

                // console.log(" list of brands============>", JSON.stringify(response.data));

                setdata(response.data)


            })
            .catch((error) => {
                console.log(error);
            });
    }

    const BrandHandler = (branddata) => {
        history.push({
            pathname: '/Repairinglaptops/Repairingdetails',

        })
        localStorage.setItem('AllrepairingBrand', JSON.stringify(branddata))
    }

    // const XiaomiHandler = () => {
    //     history.push({
    //         pathname: '/product',

    //     })
    //     localStorage.setItem('Brand', JSON.stringify(Product.Xiaomi))
    // }

    // const LenovoHandler = () => {
    //     history.push({
    //         pathname: '/product',

    //     })
    //     localStorage.setItem('Brand', JSON.stringify(Product.Lenovo))
    // }

    // const SonyHandler = () => {
    //     history.push({
    //         pathname: '/product',

    //     })
    //     localStorage.setItem('Brand', JSON.stringify(Product.Sony))
    // }

    // const AppleHandler = () => {
    //     history.push({
    //         pathname: '/product',

    //     })
    //     localStorage.setItem('Brand', JSON.stringify(Product.Apple))
    // }

    // const fetchData = () => {
    //     console.log("callig fetch data methods")
    //     axios
    //         .get('https://lapify.in/api/all-brands')
    //         .then((response) => {
    //             console.log(" list of brands", response.data);

    //             setdata(response.data)

    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });

    // }




    /*const [responseData, setResponseData] = React.useState('');
    const fetchData = React.useCallback(() => {
      axios({
        "method": "GET",
        "url": "https://lapify.in/api/all-brands",
        "headers": {
          "content-type": "application/json",
        
         
        }, 
      })
      .then((response) => {
        setResponseData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }, [])
    React.useEffect(() => {
      fetchData()
    }, [fetchData])

*/











    /*const [data, setData]=useState([])
useEffect(()=>{
    fetch('https://lapify.in/api/all-brands')
      .then((apidata)=>{
        apidata.json()
      })
      .then((actualdata)=>{
        setData(actualdata)
        console.log(actualdata)
    
      })
      .catch((error)=>{
        console.log(error)
      })
        
      },[])*/

    {/*const componentDidMount = async () => {
    var url = 'https://lapify.in/api/all-brands';
    fetch(url, {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json' })
    }).then(res => res.json())
        .catch(error => console.error("Error", error))
        .then(result => {
            console.log('minikhi', result)
            if (result) {
                console.log(result)
                this.setState({
                    refreshing: false,
                    data: result        //setstate of data which is convert in to fetch data and pass them in to component see below
                })
            }

            else {
                this.setState({
                    data: ['result']        //setstate of data which is convert in to fetch data and pass them in to component see below
                })
            }
        })
}
*/}

    // console.log('Product data',JSON.stringify(data[0].name))


    return (




        <>

<div style={{marginTop:200}}>
                {
               data.map(branddata =><>
              
                       <Card style={{width:300,height:200,marginTop:20,marginLeft:100,}}>
                        <div style={{}}>
                            <ul style={{marginTop:'auto',marginBottom:'auto',padding:20}}>
                        <li>name:    {branddata.name}</li>
                        <li>number:   {branddata.number}</li>
                        <li>address:   {branddata.address}</li>
                        <li>state:   {branddata.state}</li>
                        <li>city:   {branddata.city}</li>
                        <li>pincode:  {branddata.pincode}</li>
                        <li>description:   {branddata.description}</li>
                        </ul>
                        </div>
                        </Card>
                      

</>
    ) 
}
<Divider style={{marginTop:50}}/>
</div>
          
                                  

                                        {/* <div className="col-md-3" className={classes.brand}>
                                        <a title={"dfbvdhgh"}>
                                            <div>
                                                <span>
                                                    <img className="img-fluid" onClick={SamsungHandler}
                                                        alt="Samsung" src="https://s3n.cashify.in/cashify/brand/img/xhdpi/406a512d-e8dd.jpg" /></span>
                                            </div>
                                        </a></div> */}

                                        {/* <div className="col-md-3" className={classes.brand}>

                                        <a title={data[0].name} >
                                            <div>
                                                <span><img onClick={XiaomiHandler}
                                                    className="img-fluid" alt="Xiaomi" src="https://s3n.cashify.in/cashify/brand/img/xhdpi/cb96df6e-080f.jpg" />
                                                </span>
                                            </div>
                                        </a></div>


                                    <div className="col-md-3" className={classes.brand}>
                                        <a title="Sell Old Lenovo">
                                            <div >
                                                <span>
                                                    <img className="img-fluid" onClick={LenovoHandler}
                                                  
                                                   alt="Lenovo" src="https://s3n.cashify.in/cashify/brand/img/xhdpi/4834825a-7f10.jpg" /></span>
                                            </div>

                                        </a></div>

                                    <div className="col-md-3" className={classes.brand}>
                                        <a title="Sell Old Sony" >
                                            <div >
                                                <span>
                                                    <img className="img-fluid" onClick={SonyHandler}
                                                       
                                                   alt="Sony" src="https://s3n.cashify.in/cashify/brand/img/xhdpi/125aada5-a86f.jpg" /></span>
                                            </div>
                                        </a></div>
                                    <div className="col-md-3" className={classes.brand} >
                                        <a title="Sell Old Apple">
                                            <div>
                                                <span><img onClick={ AppleHandler}
                                                   
                                                className="img-fluid" alt="Apple" src="https://s3n.cashify.in/cashify/brand/img/xhdpi/1071214e-b44f.jpg" />
                                                </span>
                                            </div>
                                        </a></div> */}
                                  
                                                    {/* <Button style={{color:"black"}}
                                                className="btn btn-secondary" endIcon={< DoubleArrowTwoToneIcon />} onClick={() => history.push({
                                                                pathname: "/More",
                                                                state:Product.Logo
                                                            })}>More Brands
                                           
                                                            </Button> */}
                               
            {/* <Howwork />
            <TopSellingBrands /> */}

            <div className="container">

                <h3 style={{ fontFamily: "Montserrat", marginTop: 30 }}><strong>Sell Your Old Laptop On Lapify</strong></h3>
                <span>
                    <p >Every year many laptops with more added features arrive in the market. Due to this the temptation
                        to upgrade is quite strong. Many users have the old laptops lurking in their almirah or lying on their desks.
                        Selling your old laptop or Upgrading your laptop can be much more expensive so make the right choice by reselling
                        your old laptop at its right value. </p> <br />
                    <p >When your laptop goes old and you are willing to sell old laptop, It is very difficult to go to each market or
                        ask person to person to get or analyze the right value of your laptop. Even if you do this and sell old laptop online,
                        the chances are very less that you would be satisfied with the value you have got. </p><br />

                </span>

                <span>
                    <ul>
                        <li>Selling is Very Easy: You will be able to choose your specific laptop model and
                            condition and get an estimated value on the spot. By getting the real estimated value for your laptop,
                            you can move on to a new one as quickly and effortlessly as possible.</li>
                        <li>Quick Payment: After you sell your used laptop, you don’t have to wait for weeks to receive your payment.
                            We are serving in 1500+ cities and we pay you on the same day. </li>
                        <li>Best Value: When you sell used laptop to us, you will be getting the best possible value for it as compared to the market. </li>
                        <li>Any Model: With us, you don’t have to worry about the model of your laptop. We offer various models and devices and that allows you to sell old
                            laptop to us no matter what make or model it is.</li>
                    </ul>
                </span>
            </div>

            <Footernew />

        </>
    )
}

export default Repairinghome;