import React from 'react'
import {Link} from 'react-router-dom'


import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


import {Toolbar,Badge,AppBar,IconButton,MenuIcon,Typography,Button,makeStyles,Box} from '@material-ui/core'




const usestyle=makeStyles({
  header:{
  height:55
  },
  logo:{
width:65,
height:20,
marginLeft:50
  },
  container:{
    margin:'0 5% 0 auto',
    display:'flex',
  
    alignItems:'center',
    
    },

   
  
})



function Demoheader() {
    const classes=usestyle()
    return (
        
           
            <div>
            <AppBar className={classes.header}>
          <Toolbar>
          <Link to='/' style={{lineHeight:0}}>
            
            <div style={{margin:5,textDecoration:'none'}}>
            <span style={{marginLeft:50,fontSize:10,fontStyle:'italic',color:'white',textDecoration:'none'}}>explore<span style={{marginLeft:5,color:'yellow'}}>plus</span></span>
            </div>
          </Link> 
         
          <div className={classes.container}>
          <Button style={{marginRight:50,backgroundColor:'white',}} variant="contained">Login</Button>
          <span style={{marginRight:50,}}>more</span>
          <Link to='/Cart' style={{display:'flex'}}>
          <Badge badgeContent={4} color="primary">
          <ShoppingCartIcon/>
        </Badge>
            <span style={{marginLeft:10}}>cart</span>
          </Link>
          </div>
                  
          </Toolbar>
        </AppBar>
        <div style={{flexDirection:'row'}}/>
        </div>
    
    )
}

export default Demoheader
