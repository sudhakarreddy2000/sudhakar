import { createContext } from "react"
import CompA from "./CompA"
export const context=createContext()
function App(){
    let x="Student Tribe"
 return(
        <>
    <context.Provider value={x}>
    <CompA/>
    </context.Provider>
        </>
    )
}
export default App