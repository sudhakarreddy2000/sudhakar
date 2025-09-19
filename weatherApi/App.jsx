import React from 'react'
import { useState, useEffect} from 'react'
export default function App() {
  const [state, setState]=useState()
  useEffect(()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=e849ec378296aae22dc243a8b9d84def')
    .then((res)=>res.json())
    //.then((data)=>console.log(data.main.temp))
    .then((data)=>setState(data.main.temp))
  })
  return (
    <><h2>{state}</h2></>
  )
}
