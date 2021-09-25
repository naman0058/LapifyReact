//state provider
import React, {createContext,useContext,useReducer} from 'react'

//prepare datalayer
export const StateContext= createContext();


//wrap our app and provide data layer 
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value ={useReducer(reducer,initialState)}>
    {children}
    </StateContext.Provider>
)
//pull information from the data layer
export const useStateValue =()=>useContext(StateContext)


{/*
import React from 'react'
import  './Product.css'
//import AddIcon from '@material-ui/icons/Add';
//import MinimizeIcon from '@material-ui/icons/Minimize';
import {useStateValue} from './StateProvider'



 
 

function Product({id,tittle,images,price}) {
  const [{basket},dispatch]=useStateValue();
  console.log('basket')

  const addtoitem=()=>{
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id:id,
        tittle:tittle,
        images:images,
        price:price,
      }

      }
    )
  }

*/}