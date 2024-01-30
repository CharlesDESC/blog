import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  const deco = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }

  const token = localStorage.getItem('token')
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">ynov blog</div>
      </Link>
      {token ? (
        <div className="registerWrapper">
          <Link onClick={deco}>deconnexion</Link>
        </div>
      ) : (
        <div className="registerWrapper">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  )
}
