import {useState} from 'react'

function App(){
  const [result, setResult]=useState('')
  const [city,setCity]=useState('')
  
  const changeHandler=e=>{
    setCity(e.target.value)
  }
const submitHandler=e=>{
  e.preventDefault()
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e849ec378296aae22dc243a8b9d84def`).then(
    response=>response.json()
  )
  .then(data=>{
      console.log(data.main.temp)
    const kelvin=data.main.temp;
    const celsius=kelvin-273.15
    //console.log(celsius)
    setResult(Math.round(celsius))
  })
  
}
  return(
    <>
    <h1>Hello</h1>
    {result+"deg"}
    <form onSubmit={submitHandler}>
<input type="text" value={city} onChange={changeHandler}/>
<br/>

<input type="submit"/>

</form>

</>
  )
}
export default App