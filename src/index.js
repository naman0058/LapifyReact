import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Newhome from './Newhome'
import { createContext } from 'react'
import { Provider } from 'react-redux'
import store from './Redux/store'
 
const MyContext = React.createContext({});
ReactDOM.render(
    < Provider store={store}>
    <App />
  </ Provider>,

    document.getElementById("root"));



    // "proxy": "http://localhost:5000",