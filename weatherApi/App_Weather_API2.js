import React from 'react';
import { useState } from 'react';
function App() {
  const [state, setState]=useState()
fetch('https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=e849ec378296aae22dc243a8b9d84def')
.then((val)=>val.json())
//.then((x)=>console.log(x.main))
.then((x)=>{
  const kelvin=x.main.temp;
  const celsius=kelvin-273.15;
  setState(Math.round(celsius))
})

  
  return (
    <>
  {state} degree celsius
    </>
  )
}
export default App