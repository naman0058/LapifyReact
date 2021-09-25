import React ,{useState} from 'react'
import axios from 'axios'
function Postapi() {

const url=''

const [data,setData]=useState({
    name:'',
    date:'',
    iduser:''
})

const submit=(e)=>{
e.PreventDefault()
axios.post(url,{
    name:data.name,
    date:data.date,
    iduser:parseInt(data.iduser)
    //or
    //  iduser:data.iduser
})
   .then(res=>{
       console.log(res.data)
   })
}

const handle=(e)=>{
   const newdata={...data}
   newdata[e.target.id]=e.target.value
   setData(newdata)
   console.log(newdata)
}


    return (
        <div>
            <form onSubmit={()=>submit(e)}>
                <input type='text' placeholder='name' onChange={(e)=>handle(e)} id='name' value={data.name}></input>
                <input type='text' placeholder='date' onChange={(e)=>handle(e)} id='date' value={data.date}></input>
                <input type='text' placeholder='iduser' onChange={(e)=>handle(e)} id='iduser' value={data.iduser}></input>
               <button>submit</button>
            </form>
        </div>
    )
}

export default Postapi
