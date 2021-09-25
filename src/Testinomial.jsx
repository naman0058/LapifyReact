import React from 'react'
import  './css/Testinomial.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Testinomial(props) {
 
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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
            <div className="container">
            <h1 style={{ fontFamily: "Montserrat", marginTop: 20 }}>What Expert Says</h1>
            
               <div className="test-section">
            

            <Carousel responsive={responsive}>
            

                <div className="col-md-3 col-lg-12 test-box" > 

                <img
                    className="img"
                    src="https://s3b.cashify.in/gpro/uploads/2019/06/13114014/S-1.jpg"
                    alt="sudhnashu"
                />

                <div className="layout vertical flex-1">
                <p className="name" >Sudhanshu Behera</p>
                        <p className="place">(Bangalore)</p>
                </div>
               
                 <p className="test-content">What else can we ask for? Amazing service at home, convenience 
                    at good price with on the spot cash.</p>
                
                   </div>

                        <div className="col-md-3 col-lg-12  test-box" >

                        <img
                            className="img"
                            src="https://s3b.cashify.in/gpro/uploads/2019/06/13114014/S-1.jpg"
                            alt="sudhnashu"
                        />

                        <div className="layout vertical flex-1">
                            <p className="name" >Sudhanshu Behera</p>
                            <p className="place">(Bangalore)</p>
                        </div>

                        <p className="test-content">What else can we ask for? Amazing service at home, convenience
                    at good price with on the spot cash.</p>

                    </div>
                        <div className="col-md-3 col-lg-12  test-box" >

                        <img
                            className="img"
                            src="https://s3b.cashify.in/gpro/uploads/2019/06/13114014/S-1.jpg"
                            alt="sudhnashu"
                        />

                        <div className="layout vertical flex-1">
                            <p className="name" >Sudhanshu Behera</p>
                            <p className="place">(Bangalore)</p>
                        </div>

                        <p className="test-content">What else can we ask for? Amazing service at home, convenience
                    at good price with on the spot cash.</p>

                    </div>

                        <div className="col-md-3 col-lg-12  test-box" >

                        <img
                            className="img"
                            src="https://s3b.cashify.in/gpro/uploads/2019/06/13114014/S-1.jpg"
                            alt="sudhnashu"
                        />

                        <div className="layout vertical flex-1">
                            <p className="name" >Sudhanshu Behera</p>
                            <p className="place">(Bangalore)</p>
                        </div>

                        <p className="test-content">What else can we ask for? Amazing service at home, convenience
                    at good price with on the spot cash.</p>

                    </div>

                        <div className="col-md-3 col-lg-12  test-box" >

                        <img
                            className="img"
                            src="https://s3b.cashify.in/gpro/uploads/2019/06/13114014/S-1.jpg"
                            alt="sudhnashu"
                        />

                        <div className="layout vertical flex-1">
                            <p className="name" >Sudhanshu Behera</p>
                            <p className="place">(Bangalore)</p>
                        </div>

                        <p className="test-content">What else can we ask for? Amazing service at home, convenience
                    at good price with on the spot cash.</p>

                    </div>

                   
                        </Carousel>
                      
            </div>
            </div>

            
           
                        <div style={{marginTop:50,display:'flex'}}>
                            <div>
                        <h1 style={{margin:'100px 0 0 120px'}}>Get a link to download<br/>
                          the app.</h1>
                          </div>
                          <div>
                              <img style={{marginLeft:50}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAspLyjybg1cwTAsCMrdoeA9ZcuzHBfKxTGQ&usqp=CAU'/>
                    </div>
                    </div>
            </>
        
        )
}

export default Testinomial;
