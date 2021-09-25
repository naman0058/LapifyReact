import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import { useHistory } from "react-router-dom"
import classes from '../css/SearchLaptop.module.css'

import Footer from '../Footer'
import TopSellingBrands from '../TopSellingBrands'
import Work from '../Work'
import axios from 'axios'
import { Button,Card ,Divider} from '@material-ui/core';
import DoubleArrowTwoToneIcon from '@material-ui/icons/DoubleArrowTwoTone';
import { useEffect } from "react";
import { useDispatch, } from "react-redux";
import Howwork from "../Howwork";
import Footernew from '../Footernew'

//useSelector
import { fetchProducts } from '../Redux/actions/productAction'

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
            .get('https://lapify.in/api/bulkenquiry?number=9582172786')
            .then((response) => {
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




    return(
<>
      <div style={{marginTop:200}}>
                {
               data.map(branddata =>
              
                       <Card style={{width:300,height:200,marginTop:20,marginLeft:100,}}>
                   
                            <ul style={{marginTop:'auto',marginBottom:'auto',padding:20}}>
                        <li>{branddata.name}</li>
                        <li>{branddata.number}</li>
                        <li>{branddata.address}</li>
                        <li>{branddata.state}</li>
                        <li>{branddata.city}</li>
                        <li>{branddata.pincode}</li>
                        <li>{branddata.description}</li>
                        </ul>
                     
                        </Card>
                      


    ) 
}
<Divider style={{marginTop:50}}/>
</div>





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