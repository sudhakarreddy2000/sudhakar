import React from 'react'
import CompC from './CompC'
export default function CompB({data}) {
  return (
    <div>
      <h1>ComponentB</h1>
      <CompC data={data}/>
    </div>
  )
}
