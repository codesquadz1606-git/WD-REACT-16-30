import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Services = () => {
  let navigate=useNavigate()
  return (
    <div>
        <h1>Services</h1>
        <button onClick={()=>{navigate("java")}}>Java</button>
        <button onClick={()=>{navigate("python")}}>Python</button>
        <button onClick={()=>{navigate("mern")}}>Mern</button>
        <button onClick={()=>{navigate("ds")}}>DS/DA</button>
        <Outlet/>
        {/* 
            JAVA
            Python
            MERN
            DA/DS
        */}
    </div>
  )
}

export default Services
