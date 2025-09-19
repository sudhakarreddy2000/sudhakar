import React, { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
export default function App() {
const [state, setState]=useState([])
const [search, setSearch]=useState()
useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  //.then(json=>console.log(json))
  .then(json=>setState(json))
},[])
  return (
    <>
<div className='container'>
  <div className='row'>
    <div className='col-md-12 text-center'>
      <input type='text' className='form-control p-3'
      placeholder='Search' value={search} 
      onChange={(e)=>setSearch(e.target.value)}/>
    </div>
  </div>
  <div className='row mt-3'>
  {state.filter(item=>item.title.includes(search)).map((list)=>{
    return <div className='col-md-4'>
      <div className="card">
  <img src={list.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{list.title}</h5>
    <p className="card-text">{list.description}</p>

  </div>
</div>
      </div>
    })}    
  </div>
</div>

    </>
  )
}