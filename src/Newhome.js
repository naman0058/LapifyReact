import React , { useState }from 'react'
import Deal from './Deal'
import Crousel from './Crousel'
import Footer from './Footer'
import Work from './Work'
import GetApp from "./GetApp"
import getapp1 from "../src/images/download3.jpg"
import Testinomial from './Testinomial'
import TopSellingBrands from './TopSellingBrands'
import { useEffect } from "react";
import axios from 'axios'
import Fronthome from './Fronthome'
const Newhome  = ()=>{

   const [data, setdata] = useState()
   useEffect(() => {
      console.log('useeffect from homeppage')
      fetch()
  }, [])



  const fetch = () => {
      console.log("callig fetch data methods")
      axios
      
      .get('https://lapify.in/api/get-top-banner')
        
          .then((response) => {
              
              console.log(" list of brands", response.data);
             
              setdata(response.data)
          })
          .catch((error) => {
              console.log(error);
          });
  }







    return(
       <>







 


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
  
  <section id="intro" class="clearfix">
    <div class="container d-flex h-100">
      <div class="row justify-content-center align-self-center">
        <div class="col-md-6 intro-info order-md-first order-last">
          <h2>Build <span>Major & Minor</span><br/>Project File</h2>
          <p>The #1 Online Major & Minor Project file Generator! we've helped students owners create easy-to-read, highly effective, custom project files.</p>
          <div>
         <a href="#services" class="btn-get-started scrollto">Get Started</a>
          </div>
        </div>
  
        <div class="col-md-6 intro-img order-md-last order-first">
          <img src="/images/hero4.png" alt="filemakr-hero-header-image" class="img-fluid"/>
        </div>
      </div>

    </div>
  </section>

  <main id="main">

<section class="text-center pos-r">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-10 ml-auto mr-auto">
        <div class="section-title">
          <h2 class="title">Three Simple Step To Get Report</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-12">
        <div class="work-process">
          <div class="box-loader"> <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="step-num-box">
            <div class="step-icon"><span><i class="fa fa-hand-o-up"></i></span>
            </div>
            <div class="step-num">01</div>
          </div>
          <div class="step-desc">
            <h4>Choose Project</h4>
            <p class="mb-0">Choose Project Report as per your choice</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 md-mt-5">
        <div class="work-process">
          <div class="box-loader"> <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="step-num-box">
            <div class="step-icon"><span><i class="fa fa-edit"></i></span>
            </div>
            <div class="step-num">02</div>
          </div>
          <div class="step-desc">
            <h4>Edit Report</h4>
            <p class="mb-0">Edit Report Content </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 md-mt-5">
        <div class="work-process">
          <div class="step-num-box">
            <div class="step-icon"><span><i class="fa fa-download"></i></span>
            </div>
            <div class="step-num">03</div>
          </div>
          <div class="step-desc">
            <h4>Dowanload</h4>
            <p class="mb-0">Download Project Report easily in free of cost.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




    




    <section id="services" class="section-bg">
      <div class="container">

     <div class="row">
                <div class="col-md-12 text-center heading-main">
                    <h2 class="heading">B.Tech Trending Project Report</h2>
                    <div class="separator"><i class="fa fa-home below-line-about-icon"></i></div>

                </div>
            </div>  

        <div class="row">

         
          <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="box">
              <h4 class="title"><a href="/btech-final-year-project-report">View All</a></h4>
           
            </div>
          </div>


        </div>

      </div>
    </section>




<section class="amazing_feature">
      <div class="container">

            <div class="row">
                <div class="col-md-12 text-center heading-main">
                    <h2 class="heading">GET PROJECT REPORT WITH</h2>
                    <div class="separator"><i class="fa fa-handshake-o below-line-about-icon"></i></div>

                </div>
            </div>      
        <div class="row">         
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single_feature">
              <div class="feature_icon"><i class="fa fa-handshake-o"></i></div>
              <h3>IEEE Standard</h3>
              <p>Don’t wait for days to have project report completed. </p>  
            </div>
          </div>               
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single_feature">
              <div class="feature_icon"><i class="fa fa-snowflake-o"></i></div>
              <h3>ER Diagram</h3>
              <p>It cant get much easier to have quality project report download.</p>    
            </div>
          </div>        
                    
           
             
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single_feature">
              <div class="feature_icon"><i class="fa fa-sitemap"></i></div>
              <h3>DFD Diagram</h3>
              <p>Get Project Report with three level DFD Diagram.</p>  
            </div>
          </div>          
        </div>     


<div class="row">         
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single_feature">
              <div class="feature_icon"><i class="fa fa-pie-chart"></i></div>
              <h3>Giant Chart</h3>
              <p>Don’t wait for days to have project report completed. </p>  
            </div>
          </div>              
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single_feature">
              <div class="feature_icon"><i class="fa fa-tasks"></i></div>
              <h3>Screenshots</h3>
              <p>It cant get much easier to have quality project report download.</p>    
            </div>
          </div>        
                    
           
             
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single_feature">
              <div class="feature_icon"><i class="fa fa-info"></i></div>
              <h3>Indexing</h3>
              <p>Get Project Report with quality assured.</p>  
            </div>
          </div>          
        </div>  

      </div>   
    </section>



   

  


 

    <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>


    
    <section id="faq">
        <div class="container">
          <div class="row">
                <div class="col-md-12 text-center heading-main">
                    <h2 class="heading">Frequently Asked Questions</h2>
                    <div class="separator"><i class="fa fa-handshake-o below-line-about-icon"></i></div>

                </div>
            </div>     
  
          <ul id="faq-list" class="wow fadeInUp">
            <li>
              <a data-toggle="collapse" class="collapsed" href="#faq1">Which programming language you use in provided project file ? <i class="fa fa-sort-down"></i></a>
              <div id="faq1" class="collapse" data-parent="#faq-list">
                <p>
                  We provide all programming languages which use in web development like PHP, Node.Js, AngularJs, React Js, Java, HTML, Python, JavaScript, Jquery, JSON, Css, Bootstrap, MySql etc. 
                </p>
              </div>
            </li>
  
            <li>
              <a data-toggle="collapse" href="#faq2" class="collapsed">Which types of project or project file you provide ? <i class="ion-android-remove"></i></a>
              <div id="faq2" class="collapse" data-parent="#faq-list">
                <p>
                 We provide all types of web and app development projects like Smart Attendance, Payroll Management, Cricket Club System, Daily Expense Tracker, ERP College Management, Real Estate Management, Matrimonial Site, Bike and Car Rental System, Online Election System, Online Quiz System, Online Food Ordering, Library Management, Hospital Management, Hotel Management System, Online Job Portal, Event Management System, E-Commerce, Pizza Ordering System and so on.
                </p>
              </div>
            </li>
  
            <li>
              <a data-toggle="collapse" href="#faq3" class="collapsed">How we create own project file ? <i class="ion-android-remove"></i></a>
              <div id="faq3" class="collapse" data-parent="#faq-list">
                <p>
                 You choose your project as per your need , customize and edit your information then you download your project file as free of cost.
                </p>
              </div>
            </li>
  
            <li>
              <a data-toggle="collapse" href="#faq4" class="collapsed">How we request to you create my project ? <i class="ion-android-remove"></i></a>
              <div id="faq4" class="collapse" data-parent="#faq-list">
                <p>
                 You have to follow these steps -:
                </p>
                <p>
                  Firstly,You go to make your own project section, then you have to choose that you want project or project file.

                 </p>
                 <p>
                 In the end you contact us , our team will contact you as soon as. 
                  
                 </p>
              </div>
            </li>
  
        
  
         
  
          </ul>
  
        </div>
      </section>
  
    </main>
  
  
       </>
    )
}

export default Newhome;