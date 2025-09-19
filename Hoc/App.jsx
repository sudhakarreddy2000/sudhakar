import Add from './Add'
import Del from './Del'
import Hoc from './Hoc'
function App() {
    return (
        <>
            <h1>App</h1>
            <Hoc cmp={Add}/>
            <Hoc cmp={Del}/>
        </>
    )
}
export default App