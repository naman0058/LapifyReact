import React from 'react'

function Header() {
    return (
        <div>
            
  <header id="header">

<div id="topbar">
  <div class="container">
    <div class="social-links">
      <a href="https://twitter.com/FileMakr" class="twitter"><i class="fa fa-twitter"></i></a>
      <a href="https://www.facebook.com/FileMakr" class="facebook"><i class="fa fa-facebook"></i></a>
      <a href="https://www.instagram.com/filemakr" class="instagram"><i class="fa fa-instagram"></i></a>
    </div>
  </div>
</div>

<div class="container">

  <div class="logo float-left">
    <h1 class="text-light"><a href="/" class="scrollto"><span>FileMakr</span></a></h1>

  </div>

  <nav class="main-nav float-right d-none d-lg-block">
    <ul>
      <li class="active"><a href="/">Home</a></li>
       <li class="drop-down"><a href="">Project Report</a>
        <ul>
          <li><a href="/btech-final-year-project-report">B.TECH</a></li>
          <li><a href="/mtech-final-year-project-report">M.TECH</a></li>
          <li><a href="/be-final-year-project-report">BE</a></li>
          <li><a href="/me-final-year-project-report">ME</a></li>
           <li><a href="/bca-final-year-project-report">BCA</a></li>
            <li><a href="/mca-final-year-project-report">MCA</a></li>
        </ul>
      </li>
      <li><a href="/make-your-own-project" class="btn-get-started scrollto">Make your own project</a></li>

    </ul>
  </nav>

</div>
</header> 
        </div>
    )
}

export default Header
