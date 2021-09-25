/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import lapify11 from '../src/images/lapify11.png'
import lapify12 from '../src/images/lapify12.png'
import lapify13 from '../src/images/lapify13.png'
import '../src/css/crousel.css';
const Crousel  = ()=>{
    return(
        <>
        <Carousel>
        {/* <Carousel fade  style={{
        position:'absolute',
        left:0,
        top:0,
        zIndex:-1,
         
        }}> */}
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{ height: 350,}}
      src={lapify11}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Lenovo</h3>
      <p>Sell Your Lenovo Laptop </p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{ height: 350,}}
      src={lapify12}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Asus</h3>
      <p>Sell Your Asus Laptop</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100" 
      style={{ height: 350,}}
      src={lapify13}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Dell</h3>
      <p>Sell Your Dell Laptop </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    )
}

export default Crousel;