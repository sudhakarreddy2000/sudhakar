import React, {Suspense} from "react"
const About=React.lazy(()=>import('./About'))
function App() {
    return (
        <>
        <Suspense fallback={
            <div>Please wait ...loading</div>
            }>
        <About/>
        </Suspense>
        </>
    )
}
export default App