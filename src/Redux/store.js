import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import {setProducts,getproductsReducer,getproductDetailsReducer,} from './reducers/productReducer'
import {cartReducer} from './reducers/cartReducer'


const reducer=combineReducers({
    products:setProducts,
//getProducts:getproductsReducer,
//getProductDetails:getproductDetailsReducer,
cart:cartReducer,
})

const middleware=[thunk];

const store =createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
    
)



export default store
