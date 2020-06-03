import React from "react"
import logo from "../img/13947390.png"

export default function Header({ appTitle, showMenu, setShowMenu }) {
  return (
    <header>
      <div className="image-container">
        <img src={logo} />
      </div>
      <h1 className="app-title">{appTitle}</h1>
      <div className="hamburger-menu" onClick={() => setShowMenu(!showMenu)}>
        <div className={`bar-1${showMenu ? ' change' : ''}`}></div>
        <div className={`bar-2${showMenu ? ' change' : ''}`}></div>
        <div className={`bar-3${showMenu ? ' change' : ''}`}></div>
      </div>
    </header>
  )
}
