import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
        <h1>Child Component</h1>
        
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <h3>{props.age}</h3>
        <h3>{props.email}</h3>
        <h3>{props.phonenumber}</h3>
    </div>
  )
}
