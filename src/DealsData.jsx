import React from 'react';
import "../src/css/Deals.css"

function DealsData(props) {
    return (
        
        <div>
            
        <div className="a-box" style={{width:400, height:250}}>

        <div className="a-b-img">
         <img style={{height:250, width:400}} src={props.image}/>

        </div>
        <div className="s-b-text">
        <h2>{props.title}</h2>
        <p></p>

        </div>

            
          </div></div>
        
    )
}

export default DealsData;
