import React from 'react'
import { Outlet } from 'react-router-dom'

const Services = () => {
  return (
    <div>
        <h1>Services</h1>
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
