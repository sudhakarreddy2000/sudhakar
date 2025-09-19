import React from 'react'
import CompA from './CompA'
export default function App() {
    let uid="Single page application"
  return (
    <div>
      <h1>App Component</h1>
      <CompA data={uid}/>
    </div>
  )
}

Prop Drilling:
==========