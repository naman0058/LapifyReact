
import { Switch } from "react-router-dom"
import * as actionType from '../constants/productConstant'



export const setProducts=(state={products:[]},action)=>{
 
    switch(action.type){
case actionType.SET_PRODUCTS:
    // case actionType.GET_PRODUCT_SUCCESS:
        // return {products: action.payload}
         return [...action.payload]
     //case actionType.GET_PRODUCT_FAIL:
       // return {error: action.payload}
        default:
        return state
    }
}


{/*export const getproductDetailsReducer=(state={product:{}},action)=>{
 
    switch(action.type){
     case actionType.GET_PRODUCT_DETAIL_SUCCESS:
         return {product : action.payload}
     case actionType.GET_PRODUCT_DETAIL_FAIL:
        return {error: action.payload}
        default:
        return state
    }
}*/}



