import axios from 'axios'
import * as actionTypes from '../constants/cartConstant'

const url='http://localhost:8000'

export const addToCart = (id) =>async(dispatch) =>{
  console.log("idddddddddd=>",id)
    try {
      const {product}=await  axios.get(`${url}/product/${id}`)

      dispatch({type: actionTypes.ADD_TO_CART,})
    } catch (error) {
        console.log('err',error)
    }
}

{/*export const removeToCart = (id) =>(dispatch) =>{


    dispatch({type: actionTypes.REMOVE_TO_CART, payload:id})
 
      
  }
*/}