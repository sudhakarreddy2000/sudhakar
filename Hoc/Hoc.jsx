import React from 'react'
const clr={
    color:'red',
    background:'yellow'
}
export default function Hoc(props) {
  return (
    <div>
      <h3 style={clr}>
    <props.cmp/></h3>
    </div>
  )
}
