import React from 'react'
import Pfooter from './Pfooter'
import Card from '@material-ui/core/Card';
import Footernew from '../Footernew'
function Complains() {
    return (
        <>
        <div>
        
        <Card style={{display:'flex',margin:'40px 50px 0 50px'}}>
             <div style={{marginLeft:30,marginTop:130}}>
            <h1 style={{color:'#65f0f0',fontFamily:'cursive'}}> GDPR Complains</h1>
            </div>
            <div style={{marginLeft:300,marginTop:50,marginBottom:20}}>
            <img style={{width:600,height:350}} src='https://thumbs.dreamstime.com/b/gdpr-young-woman-using-laptop-computer-128773888.jpg'/>
            </div>
            </Card>
            <div style={{display:'flex'}}>
      <Pfooter/>
    
        <div style={{margin:'30px 0 0 40px'}}>
Following a clear mandate from our Partners and our Customers, Manak Waste Management<br/> Private Limited (Cashify), in 2019, constituted a dedicated cross-functional compliance team and defined <br/> the roadmap to GDPR compliance.

<h6> What is GDPR?</h6>

The General Data Protection Regulation (GDPR), which came into effect from May 25, 2018,<br/>  empowers European Union (EU) residents by placing them in control of their personal information <br/> and upholding strict protocols for organizations that collect and process this information.<br/> 

The GDPR lays down seven core principles. They are:<br/> 

1. Lawfulness, fairness, and transparency.<br/> 
2. Purpose limitation<br/> 
3. Data minimization<br/> 
4. Accuracy<br/> 
5. Storage limitation<br/> 
6. Integrity and confidentiality (security)<br/> 
7. Accountability<br/> 
8. The Data We Collec<br/> 
        </div>
        </div>
        </div>
        <Footernew/>
        </>
    )
}

export default Complains
