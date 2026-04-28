import React from 'react'
import { useParams } from 'react-router-dom'

const Student = () => {
    let {id}=useParams()
  return (
    <div>
      <h1>Student Details</h1>
      <h2>Student Name : {id}</h2>
    </div>
  )
}

export default Student
