import React from 'react'

function New({name,age,city}){
    // console.log(props) // object
  return (
    <div>
      {/* <h1>My name is :{props.details.name} </h1> */}
      <h1>My name is : {name}</h1>
      <h1>My age is : {age}</h1>
      <h1>I belong to : {city}</h1>
    </div>
  )
}

export default New
