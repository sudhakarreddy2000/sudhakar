import React, {useContext} from 'react'
import { context } from './App'
const CompC=()=>{
    let x=useContext(context)
    return(
        <>
        I am from CompC
        <h2>Welcome {x}</h2>
        </>
    )
}
export default CompC