import React from "react"
import {createStore} from 'redux'
const reducer=(state="hello redux",action)=>{
    return state
}
const store=createStore(reducer)
console.log(store.getState())
function App() {
    return (
        <>
  <h1>{store.getState()}</h1>
        </>
    )
}
export default App