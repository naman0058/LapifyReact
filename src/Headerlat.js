import React from 'react'

import './css/Headerlat.css'
function Headerlat() {
    return (
        <div>
            

    <header id="header">

<div id="topbar">
  <div class="container">
    <div class="social-links">
      <a href="https://twitter.com/FileMakr" class="twitter"><i class="fa fa-twitter"></i></a>
      <a href="https://www.facebook.com/FileMakr" class="facebook"><i class="fa fa-facebook"></i></a>
      <a href="https://www.instagram.com/filemakr" class="instagram"><i class="fa fa-instagram"></i></a>
      <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
    </div>
  </div>
</div>

<div class="container">

  <div class="logo float-left">

    <h1 class="text-light"><a href="/" class="scrollto"><span>Lapify</span></a></h1>

  </div>

  <nav class="main-nav float-right d-none d-lg-block">
    <ul>
      <li class="active"><a href="/" style={{color:'#e6ac00'}}>Home</a></li>
      <li class="active"><a href="/login"  style={{color:'#e6ac00'}}>Login</a></li>
       <li class="drop-down"><a href=""  style={{color:'#e6ac00'}}> All Services</a>
        <ul>
          <li><a href="/sell-components/searchLaptop">Sell Laptop</a></li>
          <li><a href="/mtech-final-year-project-report">Sell Desktop</a></li>
          <li><a href="/be-final-year-project-report">Sell Accessories</a></li>
          <li><a href="/Repairinglaptops/Repairingdetails">repairing</a></li>
          <li><a href="/Repairinglaptops/Bulkenquiry">Bulk enquiry</a></li>
          <li><a href="/Repairinglaptops/Repairingenquiry">MY enquiry</a></li>
          
        </ul>
       
      </li>
   
    </ul>
  </nav>

</div>
</header>
        </div>
    )
}

export default Headerlat
