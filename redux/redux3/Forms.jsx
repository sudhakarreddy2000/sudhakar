import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
export default function Forms() {
    let dispatch = useDispatch()
    const [amount, setAmount] = useState("")
    const [fullName, setFullName] = useState("")
    const [mobile, setMobile] = useState("")
    return (
        <>
        <div>
    <input type="number" placeholder='enter amount' value={amount}
                onChange={(e) => {
                    let data = e.target.value;
                    setAmount(data)
                }} />
            <button onClick={() => {
                dispatch({ 'type': "deposit", payload: amount })
                setAmount("")
            }}>Deposit</button>

            <button onClick={() => {
                dispatch({ 'type': "withdraw", payload: amount })
                setAmount("")
            }}>withdraw</button>
           </div>
<div>
            <input type="text" placeholder='Name' value={fullName}
                onChange={(e) => {
                    let data = e.target.value;
                    setFullName(data)
                }} />
            <button onClick={() => {
                dispatch({ 'type': "nameUpdate", payload: fullName })
                setFullName("")
            }}>update</button>
</div>
<div>
            <input type="text" placeholder='Mobile' value={mobile}
                onChange={(e) => {
                    let data = e.target.value;
                    setMobile(data)
                }} />
            <button onClick={() => {
                dispatch({ 'type': "mobileUpdate", payload: mobile })
                setMobile("")
            }}>update</button>

</div>
<button onClick={() => {
                dispatch({ 'type': "reset"})
                }}>reset</button>
</>
        
    )
}
