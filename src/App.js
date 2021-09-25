import React, { version } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

//import Demoheader from './Demoheader'
//import Headers from './Headers'
import Home from './Home' 
import Login from './Login'
import SearchLaptop from './Sell-components/SearchLaptop'
// import Modelenquiry from './modelseries/Modelenquiry'
import Lap from './Sell-components/LaptopSeries'
import More from "./Sell-components/More";
import Version from "./Sell-components/Version"
import Checkout from "./Sell-components/Checkout"
import Address from './Address'
import Sedule from './Sedule'
import PaymentPage from './PaymentPage'
import DeviceSwitch from './Device-Specification/DeviceSwitch'
import SystemConfiguration from './Device-Specification/SystemConfiguration'
import AdditionalFeatures from './Device-Specification/AdditionalFeatures'
import FunctionProperly from './Device-Specification/FunctionProperly'
import Age from './Device-Specification/Age'
import PhysicalCondition from './Device-Specification/PhysicalCondition'
import Demosedule from './Demosedule'
import {useStateValue} from './Provider'
import { AccessibleOutlined } from '@material-ui/icons'
import About from './details/About'
import Refen from './privacy/Refen'
import Contact from './details/Contact'
import Privacypolicy from './privacy/Privacypolicy'
import Waranty from './privacy/Waranty'
import Terms from './privacy/Terms'
import Cookie from './privacy/Cookie'
import Termscondition from './privacy/Termscondition'
 import Refend from './privacy/Refend'
 import Complains from './privacy/Complains'
 import Homes from './Homes'
 import Headerlat from './Headerlat'
import     Repairingdetails from './Repairinglaptops/Repairingdetails'
import   Bulkenquirydetails from './Repairinglaptops/Bulkenquirydetails'
import Banktransferdetail from './Banktransferdetail'
import Upi from './Upi'
import Bulkenquiry from './Repairinglaptops/Bulkenquiry'
import Repairingenquiry from './Repairinglaptops/Repairingenquiry'
{/*
  const [data ,setData]=useState([])
  useEffect(()=>{
fetch('http')
  .then((apidata)=>{
    return apidata.json()
  })
  .then((actualdata)=>{
    setData(actualdata)
  

  })
  .catch((error)=>{
    console.log(error)
  },[])
    console.log('actualdata')
  })
  
*/}

//  <Headers/>

const App =()=>{
  return (
    <>
    {/* <Homes/> */}
   
    <BrowserRouter>
    <Headerlat/>
    <Switch>
    <Route path='/login' component={Login}></Route>
    <Route exact path="/" component={Homes} />
    <Route exact path="/Upi" component={Upi} />
    <Route path="/sell-components/searchLaptop" component={SearchLaptop}></Route>

    <Route path="/Repairinglaptops/Repairingdetails"  component={Repairingdetails}/>
    <Route path="/Repairinglaptops/Repairingenquiry"  component={Repairingenquiry}/>
    <Route path="/Repairinglaptops/Bulkenquiry"  component={Bulkenquiry}/>
    <Route path="/Repairinglaptops/Repairingdetails"  component={Repairingdetails}/>
    <Route path="/product"  component={Lap}/>
    <Route path="/Banktransferdetail"  component={Banktransferdetail}/>
    <Route path="/more" component={More} />
    <Route path="/version" component={Version}/>
    <Route path="/checkout" component={Checkout}/>
    <Route path="/address" component={Address}/>
    <Route path="/About"  component={About}/>
    <Route path="/About"  component={About}/>
    <Route path="/Contact"  component={Contact}/>
    <Route path="/Privacypolicy"  component={Privacypolicy}/>
    <Route path="/Waranty"  component={Waranty}/>
    <Route path="/Refen"  component={Refen}/>
    <Route path="/Refend"  component={Refend}/>
    <Route path="/Terms"  component={Terms}/>
    <Route path="/Cookie"  component={Cookie}/>
    <Route path="/Complains"  component={Complains}/>
    <Route path="/Termscondition"  component={Termscondition}/>
    <Route path="/demosedule" component={Demosedule}/>
    <Route path="/paymentpage" component={PaymentPage}/>
    <Route path="/device-Specification/DeviceSwitch" component={DeviceSwitch}/>
    <Route path="/systemConfiguration" component={SystemConfiguration}/>
    <Route path="/additionalFeatures" component={AdditionalFeatures} />
    <Route path="/functionProperly" component={FunctionProperly}/>
    <Route path="/age" component={Age}/>
    <Route path="/physicalCondition" component={PhysicalCondition}/>
    
    </Switch>
    </BrowserRouter> 
    </>
  )
}

export default App;