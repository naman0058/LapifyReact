import React from 'react'

function Footernew() {
    return (
        <div>
            
<footer id="footer" class="section-bg">
      <div class="footer-top">
        <div class="container" style={{backgroundColor:'#e6ac00'}}>
  
          <div class="row">
  
            <div class="col-lg-6">
  
              <div class="row">
  
                  <div class="col-sm-6">
  
                    <div class="footer-info">
                      <h3 style={{marginTop:20}}>Lapify</h3>
                    <b>
                        <p>The #1 Online Major & Minor Project file Generator! we've helped students owners create easy-to-read, highly effective, custom project files.
                        </p>
                        </b>
                    </div>
  
                   
                  </div>
  
                  <div class="col-sm-6">
                    <div class="footer-links">
                      <h4 style={{color:'black',marginTop:20}}>Useful Links</h4>
                      <ul>
                        
                        <li><a href="/terms-and-conditions" style={{color:'black'}}>Terms and Conditions</a></li>
                        <li><a href="/Privacypolicy" style={{color:'black'}}>Privacy Policy</a></li>
                        <li><a href="/About" style={{color:'black'}}>About Us</a></li>
                      </ul>
                    </div>
  
                    <div class="footer-links">
                    <ul>
                    <li><a href="/Contact" style={{color:'black'}}>Contact Us</a></li>
                    </ul>
                      <p>
                        <strong>Phone:</strong>  <a href="tel:8319339945" style={{color:'black'}}>+91 8319339945</a>
                        <strong>Email:</strong>  <a href="mailto:filemakr@gmail.com" style={{color:'black'}}>Lapify@gmail.com</a>
                      </p>
                    </div>
  
                    <div class="social-links">
                      <a href="https://twitter.com/FileMakr" style={{backgroundColor:'black'}} class="twitter"><i class="fa fa-twitter"></i></a>
                      <a href="https://www.facebook.com/FileMakr" style={{backgroundColor:'black'}} class="facebook"><i class="fa fa-facebook"></i></a>
                      <a href="https://www.instagram.com/filemakr" style={{backgroundColor:'black'}} class="instagram"><i class="fa fa-instagram"></i></a>
                      <a href="#" class="linkedin" style={{backgroundColor:'black'}}><i class="fa fa-linkedin"></i></a>
                    </div>
  
                  </div>
  
              </div>
  
            </div>
  
            <div class="col-lg-6">
  
              <div class="form">
                
                <h4 style={{marginTop:20}}>Send us a message</h4>
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
  
                  <div class="text-center" style={{backgroundColor:''}}><button type="submit" style={{backgroundColor:'black'}} title="Send Message">Send Message</button></div>
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
        
          Designed by <a   style={{color:'#e6ac00'}} href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer> 

            
        </div>
    )
}

export default Footernew
