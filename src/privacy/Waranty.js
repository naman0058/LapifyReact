import React from 'react'
import Card from '@material-ui/core/Card';
import Pfooter from './Pfooter'
import Footernew from '../Footernew'
function Waranty() {
    return (
        <>
        <div>
        
        <Card style={{display:'flex',margin:'40px 50px 0 50px'}}>
             <div style={{marginLeft:30,marginTop:130}}>
            <h1 style={{color:'#65f0f0',fontFamily:'cursive'}}>Waranty Policy</h1>
            </div>
            <div style={{marginLeft:300,marginTop:50,marginBottom:20}}>
            <img alt='war' style={{width:600,height:350}} src='https://thumbs.dreamstime.com/b/clipboard-warranty-concept-d-sheet-paper-wooden-office-table-business-office-supplies-around-rendering-blurred-77915912.jpg'/>
            </div>
            </Card>
            <div style={{display:'flex'}}>
      <Pfooter/>
     
          <div style={{margin:'30px 0 0 40px'}}>
             <p>
                Cashify Repair offers you a 6 month + 1 month breakage warranty on every mobile screen <br/>
                repaired/replaced by us from the date of invoice. We also provide 3 months warranty on all<br/> the other spare parts that we replace
                </p>
                <p> The 6 months + 1 month breakage warranty covers :</p> 
                <p>Screen/LCD that malfunctions, or does not work as intended or designed.<br/>
<p>Any display issues that may arise without any manual intervention and are related to the screen quality <br/>specifically touch issues.
One time screen replacement in case of accidental damage, if claimed within 1 month <br/>from the date of invoice. </p>
If the screen replaced by us causes any above-mentioned issues, you can claim a brand new screen with the continued warranty of 6 months!</p>
<h4>Please note:</h4>
<p>1. The warranty is valid only for the specific device repaired and the original customer. It is not transferable across<br/> devices or if the device is sold or handed over to another individual.<br/>
2. Mobile phone must be switching on and functioning normally other than screen to process claim request.<br/>
3. In case the old screen of your device is not handed over to the technician, the warranty is applicable only for 3 months.</p>
       <h5> To claim your warranty, you need to:</h5>
       <p>   Share the video of the phone with the prevailing display issue at support@cashify.in<br/>
Send us your phone number/order number/IMEI Number. Just about any of it at support@cashify.in</p>
<h5>How can I claim my warranty?</h5> 
<p> You can claim the warranty by writing to us at support@cashify.in with the service details and the <br/>invoice delivered to you at the time of repair. If you need any further assistance, please connect via <br/>Chat or write to us at support@cashify.in</p> 
           <h5>  How much time will Cashify Repair take to resolve my query, if it is coming under warranty?</h5>
<p>Our team generally resolves an issue within 48 hours to 72 hours from the moment you send us a<br/> query. You will get acknowledgement over mail for your query and your issue will be sorted as<br/> soon as possible.
</p>
<p>Warranty is limited to the parts and/or service(s) that were paid for. If only parts were purchased, <br/>warranty is limited to the replacement of the parts. If parts and repair service were purchased, <br/>warranty extends to cover the labor cost of part replacement and any other repairs specifically resulting from the initial repair.</p>
            <h5> The warranty is not applicable under the following scenarios :</h5>
<p>1. We do not cover any kind of accidental damage and our warranty stands null and void in all such related cases. <br/>Direct damage or damages caused as a consequence of accidents will not be covered under the 6 month warranty.<br/>
2. Any display issues that may arise without any manual intervention and are related to the screen quality <br/>specifically visible lines and blank screen<br/>
3. Excessive Damage to the device wherein there is a possibility that internal components might have been<br/> affected due to excessive or critical damage to the device or screen. Such excessive visible damage might lead <br/>to internal components getting damaged and can cause screen or other system malfunctions. Any part <br/>replacement wherein such damage is reported at the time of order completion will not be covered under the <br/>warranty provided. Such malfunctions can even become visible after immediately opening of the device and <br/>reassembly as any component damage/malfunction would become visible after opening the device and<br/> reassembly, Cashify Repair or any of its representative will neither be responsible nor liable for such issues.<br/>
4. Subsequent mishandling which causes the frame to bend, twist, or crack will not be entertained<br/>
5. Subsequent mishandling with the screen such as hard press that may initiate discoloring or lining on the display<br/>
6. Subsequent accidental or purposeful drops<br/>
7. Water damage<br/>
8. Tampering with internal hardware<br/>
9. Damage resulting from attempted customer self-repairs<br/>
10. Software issues unrelated to the repair<br/>
11. Jail-broken devices<br/>
12. New damages unrelated to the original repair<br/>
13. Any loss of data occurring as a result of the repair – customers are advised to back up all data prior to the repair attempt</p>
            <h5> Our warranty also does not cover the outcome of a repair<br/> if certain pre-repair conditions exist, including:</h5>
<p>1. Existence of known manufacturing and/or performance issues related to the device separate from repair, as noted prior to the repair<br/>
2. Existence of damage to the device frame, as noted prior to the repair<br/>
3. Water damage<br/>
4. Jail-broken devices<br/>
5. Tampering with internal hardware: Under certain conditions, internal damage may make a repair impossible.<br/> Our specialist will be able to explain in detail upon diagnosing your specific device. <br/>If you have any doubts, we recommend that you do not attempt to repair the device on your own, <br/>as any damage may affect the reparability of your device.</p>
            <h6> Note: Refund is not applicable to the spare part as on screen. Please refer to your order email for more information.</h6>
            </div>
        </div>
        </div>
        < Footernew/>
        </>
    )
}

export default Waranty
