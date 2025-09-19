import React, { useMemo, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Data from './Data.json'
export default function App() {
  const [state, setStte] = useState(Data)
  return (
    <>
    {state.filter(item=>item.name.includes('D')).map((list)=>{
      return <li>{list.name}</li>
    })}
    </>
  )
}