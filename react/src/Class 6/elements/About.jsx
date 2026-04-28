import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const [data,setData]=useState("")

  let navigate=useNavigate()
  return (
    <div>
        <h1>About Us</h1>

        <input type="text" value={data} onChange={(e)=>{setData(e.target.value)}}  />
        <button onClick={()=>{navigate(`/student/${data}`)}}>Find Student</button>
    </div>
  )
}

export default About
