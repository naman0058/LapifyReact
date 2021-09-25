import React from 'react'
import "../src/css/work.css"

function WorkBox(props) {
    return (
        <>
        <div className="container-fluid" >
        <div className="a-box" style={{width:300}}>
              
          <div className="a-b-img" >
                <img src={props.image} className="svg-img" style={{width:100,marginLeft:'50%'}}/>

            </div>

            <div className="s-b-text">
                <h2 >{props.title}</h2>
                    <p className="p-text" style={{fontFamily:'cursive'}}> 
                    Select your device & tell us about its current condition, and our advanced AI 
                    tech will tailor make the perfect price for you.</p>
            </div>

                </div>
                
                </div>
        </>
    )
}

export default WorkBox;
