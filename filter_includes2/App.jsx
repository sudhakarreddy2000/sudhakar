import React, { useMemo, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Data from './Data.json'
export default function App() {
  const [state, setStte] = useState(Data)
  const [search, setSearch]=useState()
  return (
    <>
    <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
    <br/>
    {state.filter(item=>item.name.includes(search)).map((list)=>{
      return <li>{list.name}</li>
    })}
    </>
  )
}