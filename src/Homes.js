import logo from './logo.svg';
import '../src/css/Homes.css'
import Howwork from './Howwork';
import TopSellingBrands from './TopSellingBrands';
import Footernew from './Footernew';
function Homes() {
  return (
    <div className="App">
    

{/* 
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
      <li class="active"><a href="/">Home</a></li>
      <li class="active"><a href="/login">Login</a></li>
       <li class="drop-down"><a href="">Project Report</a>
        <ul>
          <li><a href="/sell-components/searchLaptop">Sell Laptop</a></li>
          <li><a href="/mtech-final-year-project-report">Sell Desktop</a></li>
          <li><a href="/be-final-year-project-report">Sell Accessories</a></li>
          
        </ul>
       
      </li>
   
    </ul>
  </nav>

</div>
</header> */}


<section id="intro" class="clearfix">
<div class="container d-flex h-100">
  <div class="row justify-content-center align-self-center" style={{marginTop:40}}>
    <div class="col-md-6 intro-info order-md-first order-last" >
      <h2>Want<span  style={{color:'#e6ac00'}}> sell</span> your Laptop</h2>
      <p>Maximum value & hassle Free & safe Process ! Instant Quote. Free Doorstep Pickup</p>
      <div>
     <a href="./Sell-components/SearchLaptop"  style={{backgroundColor:'#e6ac00'}} class="btn-get-started scrollto">Get Started</a>
      </div>
    </div>

    <div class="col-md-6 intro-img order-md-last order-first">
      <img src="https://i2.wp.com/www.tech-critter.com/wp-content/uploads/ASUS-ZenBook-Pro-Duo-2.jpg" alt="filemakr-hero-header-image" class="img-fluid"/>
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
      <h2 class="title">What would Like to Do</h2>
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
        {/* <div class="step-icon"><span><i class="fa fa-hand-o-up"></i></span>
        </div> */}
        <div> 
          <img style={{width:200,height:300}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDT0yq5HXe8Up_Ur_byPC_HYGpTv384d2Ymw&usqp=CAU'/></div>
        <div class="step-num">01</div>
      </div>
      <div class="step-desc">
      <a href="/sell-components/searchLaptop" class="scrollto"><span><h4>Sell Laptop</h4></span></a>
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
        {/* <div class="step-icon"><span><i class="fa fa-edit"></i></span>
        </div> */}
         <div> 
          <img style={{width:200,height:300}} src='data:image/jpeg;base64,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'/></div>
        <div class="step-num">02</div>
      </div>
      <div class="step-desc">
      <a href="/" class="scrollto"><span><h4>Sell Desktop</h4></span></a>
        <p class="mb-0">Edit Report Content </p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 col-md-12 md-mt-5">
    <div class="work-process">
      <div class="step-num-box">
        {/* <div class="step-icon"><span><i class="fa fa-download"></i></span>
        </div> */}
         <div> 
          <img style={{width:200,height:300}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8dhSEXLwnkhC98NaRnp230ak7XZFwkW2qwA&usqp=CAU'/></div>
        <div class="step-num">03</div>
      </div>
      <div class="step-desc">
      <a href="/" class="scrollto"><span><h4>Sell Accessories</h4></span></a>
        <p class="mb-0">Download Project Report easily in free of cost.</p>
      </div>
    </div>
  </div>
</div>
</div>
</section>
{/* 
<section id="services" class="section-bg">
  <div class="container">

 <div class="row">
            <div class="col-md-12 text-center heading-main">
                <h2 class="heading">How works Lapify</h2>
                <div class="separator"><i class="fa fa-home below-line-about-icon"></i></div>

            </div>
        </div>  

    <div class="row" style={{marginLeft:50}}>

     
      <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
        <div class="box" >
          <h4 class="title"><a href="/btech-final-year-project-report">Check Prise</a></h4>
       <p>Select your device & tell us about its current condition, make the perfect price for you.</p>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
        <div class="box" >
          <h4 class="title"><a href="/btech-final-year-project-report">
              Schedule <span>Pickup</span>
              </a></h4>
              <p>Book a free pickup from your home or work at a time slot that best suits your convenience.</p>
       
        </div>
      </div>
      <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
        <div class="box">
          <h4 class="title"><a href="/btech-final-year-project-report">
               Get Paid
               </a></h4>
       <p>Did we mention you get paid as soon as our executive picks up your device? </p>
        </div>
      </div>

    </div>

  </div>
</section> */}
<Howwork/>




<section class="amazing_feature">
  <div class="container">

        <div class="row">
            <div class="col-md-12 text-center heading-main">
                <h2 class="heading">Why Us</h2>
                <div class="separator"><i class="fa fa-handshake-o below-line-about-icon"></i></div>

            </div>
        </div>      
    <div class="row">         
      <div class="col-md-4 col-sm-6 col-xs-12">
      <div class="single_feature">
          <div class="feature_icon"><i class="fa fa-handshake-o"></i></div>
          <h3>One-stop Solution</h3>
          <p>Sell, buy, repair or accessorize your smartphone. </p>  
        </div>
      </div>             
      <div class="col-md-4 col-sm-6 col-xs-12">
        <div class="single_feature">
          <div class="feature_icon"><i class="fa fa-snowflake-o"></i></div>
          <h3>Quick & Hassle-free</h3>
          <p>Get mobile care in a click at your home or office.</p>    
        </div>
      </div>       
                
       
         
      <div class="col-md-4 col-sm-6 col-xs-12">
        <div class="single_feature">
          <div class="feature_icon"><i class="fa fa-sitemap"></i></div>
          <h3>
               Trained Professionals</h3>
          <p>Trusted experts to help every step of the way.</p>  
        </div>
      </div>         
    </div>     


<div class="row">         
      <div class="col-md-4 col-sm-6 col-xs-12">
        <div class="single_feature">
          <div class="feature_icon"><i class="fa fa-pie-chart"></i></div>
          <h3>Premium Products</h3>
          <p>
Certified, high quality products guaranteed. </p>  
        </div>
      </div>             
      <div class="col-md-4 col-sm-6 col-xs-12">
        <div class="single_feature">
          <div class="feature_icon"><i class="fa fa-tasks"></i></div>
          <h3>Amazing Prices</h3>
          <p>
Buying or selling, you’ll surely love our prices.</p>    
        </div>
      </div>       
                
       
         
      <div class="col-md-4 col-sm-6 col-xs-12">
        <div class="single_feature">
          <div class="feature_icon"><i class="fa fa-info"></i></div>
          <h3>Guaranteed Safety</h3>
          <p>
Be it buyback or repair, we are the safest hands  </p>  
        </div>
      </div>         
    </div>  

  </div> 
</section>





<TopSellingBrands/>




<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>




</main>


<Footernew/>

{/* <footer id="footer" class="section-bg">
      <div class="footer-top">
        <div class="container">
  
          <div class="row">
  
            <div class="col-lg-6">
  
              <div class="row">
  
                  <div class="col-sm-6">
  
                    <div class="footer-info">
                      <h3>Lapify</h3>
                    <b>
                        <p>The #1 Online Major & Minor Project file Generator! we've helped students owners create easy-to-read, highly effective, custom project files.
                        </p>
                        </b>
                    </div>
  
                   
                  </div>
  
                  <div class="col-sm-6">
                    <div class="footer-links">
                      <h4>Useful Links</h4>
                      <ul>
                        
                        <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
                        <li><a href="/Privacypolicy">Privacy Policy</a></li>
                        <li><a href="/About">About Us</a></li>
                      </ul>
                    </div>
  
                    <div class="footer-links">
                    <ul>
                    <li><a href="/Contact">Contact Us</a></li>
                    </ul>
                      <p>
                        <strong>Phone:</strong>  <a href="tel:8319339945" >+91 8319339945</a>
                        <strong>Email:</strong>  <a href="mailto:filemakr@gmail.com" >Lapify@gmail.com</a>
                      </p>
                    </div>
  
                    <div class="social-links">
                      <a href="https://twitter.com/FileMakr" class="twitter"><i class="fa fa-twitter"></i></a>
                      <a href="https://www.facebook.com/FileMakr" class="facebook"><i class="fa fa-facebook"></i></a>
                      <a href="https://www.instagram.com/filemakr" class="instagram"><i class="fa fa-instagram"></i></a>
                      <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                    </div>
  
                  </div>
  
              </div>
  
            </div>
  
            <div class="col-lg-6">
  
              <div class="form">
                
                <h4>Send us a message</h4>
                <p></p>
                <form action="/contactus" method="get"  id="contact" class="contactForm">
                  <div class="form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div class="validation"></div>
                  </div>
                  <div class="form-group">
                    <input type="number" class="form-control" name="email" id="email" placeholder="Your Mobile Number" data-rule="minlen:10" data-msg="Please enter a valid mobile number" />
                    <div class="validation"></div>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div class="validation"></div>
                  </div>
                  <div class="form-group">
                    <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                    <div class="validation"></div>
                  </div>
  
                  <div id="sendmessage">Your message has been sent. Thank you! Our Team will contact you as soon as possible.</div>
                  <div id="errormessage">Not Send</div>
  
                  <div class="text-center"><button type="submit" title="Send Message">Send Message</button></div>
                </form>
              </div>
  
            </div>
  
            
  
          </div>
  
        </div>
      </div>
  
      <div class="container">
        <div class="copyright">
          &copy; 2019 Copyright <strong>Lapify</strong>. 
        </div>
    <div class="credits">
        
            All the links in the footer should remain intact.
            You can delete the links only if you purchased the pro version.
            Licensing information: https://bootstrapmade.com/license/
            Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Rapid
        
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer> */}



    </div>
  );
}

export default Homes;
