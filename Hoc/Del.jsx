import React from 'react'
import {useState} from 'react'
export default function Del() {
    const [del, setDel]=useState(100)
  return (
    <div>
       <h1>{del}</h1>
       <button onClick={()=>setDel(del-1)}>Del</button>
    </div>
  )
}
