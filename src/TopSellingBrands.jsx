import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import '../src/css/TopSellingBrands.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from '../src/Sell-components/Data'
// import { useEffect } from 'react';
// import axios from 'axios'
function TopSellingBrands() {
    const history = useHistory()

    // const [data,setData]=useState([])



    // useEffect(() => {
    //     fetch()
    //  }, [])
 
 
 
    //  const fetch = () => {
    //      console.log("callig fetch data methods")
    //      axios
    //          .get('https://lapify.in/api/get-bottom-banner')
    //          // .post('https://lapify.in/api/all-model='+29)
    //          //.post('https://lapify.in/api/all-model='+29)
    //          .then((response) => {
 
    //              // console.log(" list of brands============>", JSON.stringify(response.data));
 
    //              setData(response.data)
 
 
    //          })
    //          .catch((error) => {
    //              console.log(error);
    //          });
    //  }
 



    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5                                               // breakpoint: { max: 4000, min: 3000 },
        },
        desktop: {                                            // items: 3
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
    <>
            {/* <div className="container"> 

            <h1 style={{ fontFamily: "Montserrat",marginTop:30 }}>Top Selling Brands</h1>

            <div className="top-container">
           

            <Carousel responsive={responsive}> 
            

                <div className=" top-brand" >
                    <a title="Sell Old Apple">
                    
                        <div>
                            <span><img onClick={() => history.push({
                                pathname: '/product',
                                state: Product.Apple
                            })} className="img-fluid" alt="Apple" src="https://s3n.cashify.in/cashify/brand/img/xhdpi/1071214e-b44f.jpg" />
                            </span>
                        </div>
                    </a></div>

                 <div className="top-brand" >

                    <a title="Sell Old Xiaomi" >
                        <div>
                            <span><img onClick={() => history.push({
                                pathname: '/product',
                                state: Product.Xiaomi
                            })}
                                className="img-fluid" alt="Xiaomi" src="https://s3n.cashify.in/cashify/brand/img/xhdpi/cb96df6e-080f.jpg" />
                            </span>
                        </div>
                    </a></div>

                        <div className=" top-brand" >
                    <a title="Sell Old Samsung">
                        <div>
                            <span>
                                <img className="img-fluid" onClick={() => history.push({
                                    pathname: '/product',
                                    state: Product.Samsung
                                })}
                                    alt="Samsung" src="https://s3n.cashify.in/cashify/brand/img/xhdpi/406a512d-e8dd.jpg" /></span>
                        </div>
                    </a></div>

                        <div className=" top-brand" >
                    <a title="Sell Old Lenovo">
                        <div >
                            <span>
                                <img className="img-fluid" onClick={() => history.push({
                                    pathname: '/product',
                                    state: Product.Lenovo
                                })} alt="Lenovo" src="https://s3n.cashify.in/cashify/brand/img/xhdpi/4834825a-7f10.jpg" /></span>
                        </div>
                    </a></div>

                   

                        <div className=" top-brand" >
                    <a title="Sell Old Sony" >
                        <div >
                            <span>
                                <img className="img-fluid" onClick={() => history.push({
                                    pathname: '/product',
                                    state: Product.Sony
                                })} alt="Sony" src="https://s3n.cashify.in/cashify/brand/img/xhdpi/125aada5-a86f.jpg" /></span>
                        </div>
                    </a></div>
                        
            </Carousel>
                </div></div> */}




<div className="container" > 

<h3 style={{ fontFamily: "Montserrat",marginTop:40}}>Top Selling Brands</h3>

<div className="top-container">


<Carousel responsive={responsive} > 

{/* <div className="col-md-4" >
{data.length !== 0 ? data.map(bottm =>
    <div className=" top-brand" >
        <a title="Sell Old Apple">
        
            <div>
                <span>
                    <img
                style={{width:700,height:200}}
                className="img-fluid"  alt={bottm.id} src={'https://lapify.in/images/' + bottm.image} />
                </span>
            </div>
        </a></div>
  ) : ""

}</div></div> */}
     <div className="top-brand" >

        <a title="Sell Old Xiaomi" >
            <div>
                <span><img 
                
                    className="img-fluid" alt="Xiaomi" src="https://s3n.cashify.in/cashify/brand/img/xhdpi/cb96df6e-080f.jpg" />
                </span>
            </div>
        </a></div>

            <div className=" top-brand" >
        <a title="Sell Old Samsung">
            <div>
                <span>
                    <img className="img-fluid" 
                    
                        alt="Samsung" src="https://s3n.cashify.in/cashify/brand/img/xhdpi/406a512d-e8dd.jpg" /></span>
            </div>
        </a></div>

            <div className=" top-brand" >
        <a title="Sell Old Lenovo">
            <div >
                <span>
                    <img className="img-fluid" 
                    
                     alt="Lenovo" src="https://s3n.cashify.in/cashify/brand/img/xhdpi/4834825a-7f10.jpg" /></span>
            </div>
        </a></div>

       

            <div className=" top-brand" >
        <a title="Sell Old Sony" >
            <div >
                <span>
                    <img className="img-fluid" 
                   
                    alt="Sony" src="https://s3n.cashify.in/cashify/brand/img/xhdpi/125aada5-a86f.jpg" /></span>
            </div>
        </a></div>
            

        <div className=" top-brand" >
        <a title="Sell Old Sony" >
            <div >
                <span>
                    <img className="img-fluid" 
                   
                    alt="Sony" src="https://s3n.cashify.in/brandlogo/Hp.png" /></span>
            </div>
        </a></div>

        <div className=" top-brand" >
        <a title="Sell Old Sony" >
            <div >
                <span>
                    <img className="img-fluid" 
                   
                    alt="Sony" src="https://s3n.cashify.in/brandlogo/Dell.png" /></span>
            </div>
        </a></div>
</Carousel>
    </div></div>
        </>
 )
}

export default TopSellingBrands;
