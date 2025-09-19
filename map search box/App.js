import {useState} from 'react'
import Data from './city.json'
function App(){
  const [search, setSearch]=useState('')
  return(
    <>
    <h1>Hello</h1>
    <input type="text" placeholder='search ....' value={search}
    onChange={(e)=>setSearch(e.target.value)}/>
    <br/>
    {/* {Data.map(city=><li>{city.name}</li>)} */}
    {/* {Data.filter(city=>city.name.includes(search)).map(city=><li>{city.name}</li>)} */}
    {Data.filter(city=>city.name.toLowerCase().includes(search.toLowerCase())).map(city=><li>{city.name}</li>)}
    </>
  )
}
export default App