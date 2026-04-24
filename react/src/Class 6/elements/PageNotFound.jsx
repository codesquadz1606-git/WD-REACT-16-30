import React from 'react'
import { useLocation } from 'react-router-dom'

const PageNotFound = () => {
    let {pathname}=useLocation()
    // console.log(route)
  return (
    <div>
      <h1>Page Not Found at .{pathname}</h1>
    </div>
  )
}

export default PageNotFound
