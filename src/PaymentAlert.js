import React from 'react'
import Button from '@material-ui/core/Button';

function PaymentAlert(props) {






  
  return (
    <div>
     <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{/* <labal type="button" style={{outline:'none',marginLeft:30}}  data-bs-toggle="modal" data-bs-target="#exampleModal">
  delete
</labal>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Do you want to delete this address?</h5>
    
      </div>
      <div class="modal-body">
       
      </div>
      <div class="modal-footer" style={{justifyContent:'center'}}>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">NO</button>
        <button type="button" style={{backgroundColor:'#82b74b',color:'white'}} class="btn btn-primary">YES</button>
      </div>
    </div>
  </div>
</div> */}
    </div>
  )
}

export default PaymentAlert
