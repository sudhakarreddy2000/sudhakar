import {createStore} from 'redux'
const initialState=0
function deposit(){
    return {
        type:'DEPOSIT'
    }
}

function withdraw(){
    return {
        type:'WITHDRAW'
    }
}
function reducer(state=initialState, action){
switch(action.type){
    case 'DEPOSIT':
        return state+1
    case 'WITHDRAW':
        return state-1
    default:
        return state
}
}

const store=createStore(reducer)
store.dispatch(deposit())
console.log(store.getState())

store.dispatch(withdraw())
console.log(store.getState())

store.dispatch(deposit())
console.log(store.getState())