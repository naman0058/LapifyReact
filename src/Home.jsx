import React , { useState }from 'react'
import { useEffect } from "react";
import axios from 'axios'
import Fronthome from './Fronthome'
const Home  = ()=>{

   const [data, setdata] = useState()
   useEffect(() => {
      console.log('useeffect from homeppage')
      fetch()
  }, [])



  const fetch = () => {
      console.log("callig fetch data methods")
      axios
      
      .get('https://lapify.in/api/get-top-banner')
        
          .then((response) => {
              
              console.log(" list of brands", response.data);
             
              setdata(response.data)
          })
          .catch((error) => {
              console.log(error);
          });
  }







    return(
   <>



   </> 
    )
}

export default Home;