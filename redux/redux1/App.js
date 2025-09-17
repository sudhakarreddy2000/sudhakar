import React from 'react';
// import './App.css';
import { legacy_createStore as createStore} from 'redux'
const initialState="Hello World"
const reducer=(state=initialState, action)=>{
	return state
}
const store=createStore(reducer)
console.log(store.getState())
function App(){
	return(
		<div>
			<h1> Redux is no nice {store.getState()}</h1>
		</div>
	)
}
export default App

