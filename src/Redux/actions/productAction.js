import axios from 'axios'
import * as action from '../constants/productConstant'
//import Api from '../apis/Api'


 export const fetchProducts=()=>{
    return async function(dispatch){
    /*    const res=await fetch('https://lapify.in/api/all-brands', {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' })})
       
        const data=await res.json()*/
        console.log("callig fetch data methods")
        axios
          .get('https://lapify.in/api/all-brands')
          .then((response) => {
            console.log(" list of brands", response.data);
            dispatch(setProducts(response.data))
          })
          .catch((error) => {
            console.log(error);
          });
     
      //fetch('https://lapify.in/api/all-brands').then(res=>res.json()).then(data=>{
         
      }
    }

    /*export const fetchProducts=()=>{
        return async function(dispatch, getState){
        const response=await Api.get('/products')
        
           dispatch({type:action.SET_PRODUCTS, payload:response.data}) 
           
        };
        }*/





export const setProducts=(products=null)=>{
    if(products){
        return{
            type: action.SET_PRODUCTS,
            payload:products,
           
        }
    }
}



/*export const getProducts = () => async (dispatch) =>{

    try{
        const {data}=await axios.get(`${url}/products`)
      dispatch({type: action.GET_PRODUCT_SUCCESS, payload:data})
    
    }catch(error){
        dispatch({type: action.GET_PRODUCT_FAIL, payload:error.response})
    }
}*/


/*export const getProductDetails = (id) => async (dispatch) =>{

    try{
        const {data}=await axios.get(`${url}/product/${id}`);
      dispatch({type: action.GET_PRODUCT_DETAIL_SUCCESS,})
     
    }catch(error){
        dispatch({type: action.GET_PRODUCT_DETAIL_FAIL,})
    }
}*/