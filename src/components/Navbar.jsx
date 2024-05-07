import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/navbar.css'

export const Navbar = () => {
  return (
    <>
        <h1>Tour Of Heroes</h1>
        <nav>
        <ul>
          <li>
            <Link to="/"><h3>Dashboard</h3></Link>
          </li>
          <li>
            <Link to="/heroes"><h3>Heroes</h3></Link>
          </li>
        </ul>
      </nav>
    </>

  )
}
