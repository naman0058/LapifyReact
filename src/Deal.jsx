import React from 'react';
import DealsData from "./DealsData";
import buyoffer from "../src/images/buyoffer.png";
import repairoffer from "../src/images/repairoffer.png";
import exchangeoffer from "../src/images/exchangeoffer.png";
import "../src/css/Deals.css"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
function Deal() {
    return (
        <>
         <div class="container">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <div class="row">
              <div class='col-lg-12  col-sm-12 col-md-12'>
<Card style={{marginTop:30,boxShadow: '0px 10px 12px rgba(0,0,0,0.1)',borderRadius:20}}>
    <CardContent>
      <h3 style={{margin:'10px 0 0 20px',fontWeight:'inherit',fontFamily:'-moz-initial',}}>Why Us</h3>
      <div style={{display:'flex',marginTop:40}}>
     
      <div class = 'row' style={{margin:'auto',justifyContent:'space-around'}}>
  <div class = 'col-6 col-lg-4'>
     
      <img style={{width:80,height:80,marginLeft:5}} src='https://www.cashify.in/static/buy-back/whyus/whyus-7.svg'/>
    
      <div >
      <p style={{marginLeft:5}}>
One-stop Solution <br/>Sell, buy, repair or accessorize your <br/>laptop
</p>
</div>
</div>
    
      <div class = 'col-6 col-lg-4'>
     
      <img style={{width:80,height:80,marginLeft:5}} src='https://www.cashify.in/static/buy-back/whyus/whyus-8.svg'/>
   
      <div >
      <p style={{marginLeft:10}}>

      Quick & Hassle-free<br/>Get mobile care in a click at your home or <br/>office
</p>
</div>
</div>
     

      <div class = 'col-6 col-lg-4'>
     
      <img style={{width:80,height:80,marginLeft:5}} src='https://www.cashify.in/static/buy-back/whyus/whyus-9.svg'/>
    
      <div >
      <p style={{marginLeft:10}}>

      
Trained Professionals<br/>Trusted experts to help every step of the<br/>way
</p>
</div>
</div>
      </div>
      </div>

      <div class="container">
      <div class = 'row' style={{margin:'auto',}}>
  <div class = 'col-6 col-lg-4'>
     
      <div style={{marginLeft:20}}>
      <img style={{width:80,height:80,marginLeft:5}} src='https://www.cashify.in/static/buy-back/whyus/whyus-10.svg'/>
      </div>
     
      <p style={{marginLeft:10}}>
One-stop Solution <br/>Sell, buy, repair or accessorize your <br/>laptop
</p>

</div>

      <div class = 'col-6 col-lg-4'>
     
      <img style={{width:80,height:80,marginLeft:5}} src='https://www.cashify.in/static/buy-back/whyus/whyus-1.svg'/>
    
      <div >
      <p style={{marginLeft:10}}>

      Quick & Hassle-free<br/>Get mobile care in a click <br/>at your home oroffice
</p>
</div>
</div>
     

      <div class = 'col-6 col-lg-4'>
    
      <img style={{width:80,height:80,marginLeft:5}} src='https://www.cashify.in/static/buy-back/whyus/whyus-5.svg'/>
     
      <div >
      <p style={{marginLeft:10}}>

      
Trained Professionals<br/>Trusted experts to help every <br/>step of theway
</p>
</div>
</div>
</div>
</div>
     
   
    </CardContent>
</Card>
</div>
      </div>
      </div>

      
<div class="container">
      <div class = 'row'>
      <div>
  <h3 style={{margin:'30px 0 0 20px',fontWeight:'inherit',fontFamily:'-moz-initial',}}>Hot Deals</h3>
  </div>
  <div class = 'col-6 col-lg-4'>
     
<img  style={{width:350,height:200,borderRadius:5}} src='https://s3b.cashify.in/gpro/uploads/2019/09/16135517/buyback_offer_banner.png'/>
</div>


<div class = 'col-6 col-lg-4'>
<img  style={{width:350,height:200,borderRadius:5}} src='https://s3b.cashify.in/gpro/uploads/2019/09/16135514/repair_offer_banner.png'/>
</div>

<div class = 'col-6 col-lg-4'>
<img  style={{width:350,height:200,borderRadius:5}} src='https://s3b.cashify.in/gpro/uploads/2019/09/16135515/exchange_offer_banner.png'/>
</div>
</div>
</div>
        {/* <div id="deal">
                 <div>
               <h1 style={{marginRight:200,marginTop:50,fontFamily:'-moz-initial'}}>Hot Deals</h1>
                 </div>
        <div className="a-container">

        <DealsData image={buyoffer} style={{width:100,height:50,margin:'0 50px 0 50px'}}/>
        <DealsData image={repairoffer}/>
        <DealsData image={exchangeoffer}/>

        </div>
            
        </div> */}
        </>
    )    
}

export default Deal;
