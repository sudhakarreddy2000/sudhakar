import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
export default function Form() {
    let dispatch=useDispatch()
    const [amount, setAmount]=useState()
    const [fullName, setFullName]=useState()
    const [mobile, setMobile]=useState()
  return (
    <>
    <div className='container'>
      <div>
        <input type="number" value={amount} onChange={(e)=>{
            let data=e.target.value
            setAmount(data)
        }}/>
        <button className="btn btn-success" onClick={()=>{dispatch({'type':"deposit",payload:amount}) }}>Deposit</button>
        <button className="btn btn-danger" onClick={()=>{dispatch({'type':"withdraw",payload:amount})}}>Withdraw</button>
       
      </div>
      <div>
      <input type="text" value={fullName} onChange={(e)=>{
            let data=e.target.value
            setFullName(data)
        }}/>
        <button onClick={()=>{dispatch({'type':"nameUpdate",payload:fullName}) }}>Update</button>
        
      </div>
      <div>
      <input type="text" value={mobile} onChange={(e)=>{
            let data=e.target.value
            setMobile(data)
        }}/>
        <button onClick={()=>{dispatch({'type':"mobileUpdate",payload:mobile}) }}>Update</button>
        
      </div>
 
      </div>
    </>
  )
}
