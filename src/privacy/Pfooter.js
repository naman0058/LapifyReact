
import React from 'react'
import {Divider, Card } from '@material-ui/core';
import {NavLink} from 'react-router-dom'
function Pfooter() {
    return (
        <>
        <Card style={{margin:'30px 0 20px 50px',width:300,height:400,padding:20,}}>
        <NavLink exact to='/waranty'>
        <label style={{marginTop:10,color:'#82b74b'}}>Warranty Policy</label><br/>
        </NavLink>
        <Divider style={{border:'dashed 1px',marginTop:10}}/>
        <NavLink exact to='/Terms'>
        <label style={{marginTop:10,color:'#82b74b'}}>Terms of Use</label><br/>
        </NavLink>
        <Divider style={{border:'dashed 1px',marginTop:10}}/>
        <NavLink exact to='/Termscondition'>
        <label style={{marginTop:10,color:'#82b74b'}}>Terms and Conditions</label><br/>
        </NavLink>
        <Divider style={{border:'dashed 1px',marginTop:10}}/>
        <NavLink exact to='/Refend'>
        <label style={{marginTop:10,color:'#82b74b'}}>Refund Policy</label><br/>
        </NavLink>
        <Divider style={{border:'dashed 1px',marginTop:10}}/>
        <NavLink exact to='/Cookie' >
        <label style={{marginTop:10,color:'#82b74b'}}>Coocie Policy</label><br/>
        </NavLink>
        <Divider style={{border:'dashed 1px',marginTop:10}}/>
        <NavLink exact to='/Refen'>
        <label style={{marginTop:10,color:'#82b74b'}}>Refer & Earn Terms</label><br/>
        </NavLink>
        <Divider style={{border:'dashed 1px',marginTop:10}}/>
        <NavLink exact to='/Privacypolicy'>
        <label style={{marginTop:10,color:'#82b74b'}}>Privacy Policy</label><br/>
        </NavLink>
        <Divider style={{border:'dashed 1px',marginTop:10}}/>
        <NavLink exact to='/complains'>
        <label style={{marginTop:10,marginBottom:10,color:'#82b74b'}}>GDPR Complains</label><br/>
        </NavLink>
       </Card>
       </>
    )
}

export default Pfooter
