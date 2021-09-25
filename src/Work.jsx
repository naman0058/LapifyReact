import React from 'react';
import WorkBox from "./WorkBox";
import featureimage1 from "../src/images/feature_1.png";
import featureimage2 from "../src/images/feature_2.png";
import featureimage3 from "../src/images/feature_3.png";
import  "../src/css/work.css"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DoubleArrowTwoToneIcon from '@material-ui/icons/DoubleArrowTwoTone';

function Work() {
    return (
        <>   
         <div class="container">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <div class="row">
              <div class='col-lg-12  col-sm-12 col-md-4'>
          
           <Card style={{marginTop:30,borderRadius:20,boxShadow: '0px 10px 12px rgba(0,0,0,0.1)'}}>
               <CardContent>
                 
                   <h3 style={{fontFamily:'-moz-initial',marginTop:40}}>How lapify Works</h3>
                   {/* <div style={{display:'flex'}}>
                   <div style={{marginLeft:80}}> */} 
                       {/* <div class = 'container'> */}
<div class = 'row'>
  <div class = 'col-6 col-lg-4'>
                       <img   style={{ width: 90, height: 90, marginTop: 'auto', marginBottom: 'auto' }}  src='https://www.cashify.in/static/landing/pngs/get-price.png'/>
                       <h4 style={{fontFamily:'cursive'}}>
                       Check Price
                       </h4>
                       <p>Select your device & tell us about its current <br/>condition, and our advanced AI tech will <br/> tailor make the perfect price for you.</p>
                   </div>

                   <div class = 'col-6 col-lg-4'>
                  
                       <img  style={{ width: 90, height: 90, marginTop: 'auto', marginBottom: 'auto' }}  src='https://www.cashify.in/static/landing/pngs/book-pickup.png'/>
                       <h4 style={{fontFamily:'cursive'}}>
                     
                    Schedule Pickup
                       </h4>
                       <p>Select your device & tell us about its current <br/>condition, and our advanced AI tech will <br/> tailor make the perfect price for you.</p>
                   </div>

                   <div class = 'col-6 col-lg-4'>
                  
                       <img  style={{ width: 90, height: 90, marginTop: 'auto', marginBottom: 'auto' }}  src='https://www.cashify.in/static/landing/pngs/get-paid.png'/>
                       <h4 style={{fontFamily:'cursive'}}>
                      
                      Get Paid
                       </h4>
                       <p>Select your device & tell us about its current <br/>condition, and our advanced AI tech will <br/> tailor make the perfect price for you.</p>
                   </div>
                   </div>
               </CardContent>
           </Card>
           </div>
           </div>
           </div>


           {/* <img src="https://s3n.cashify.in/cashify/product/img/xhdpi/0855bb0c-dc08.jpg" class="img-fluid" alt="Responsive image"></img> */}
          {/* <div className="container-fluid">
                
        <div id="work">

         <h2 className="h1">
                        <DoubleArrowTwoToneIcon />  How It Works</h2>
                         

            <div className="a-container"  style={{marginLeft:100,marginRight:100}}>
                        

                <WorkBox image={featureimage1} title="Check Price" />
                <WorkBox image={featureimage2} title="Schedule Pickup" />
                <WorkBox image={featureimage3} title="Get Paid" />
                
                
                    </div>     

        </div>
        </div> */}
        </>
    )
}

export default Work;
