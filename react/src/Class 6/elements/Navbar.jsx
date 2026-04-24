import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <h1>Logo</h1>
      <div className="navi">
        <ul>
            {/* <li><a href="/">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li> */}

            <li><Link to="/">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            
        </ul>
      </div>
    </div>
  )
}

export default Navbar
