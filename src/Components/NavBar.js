import React from 'react'
import SearchBar from './SearchBar'
import  './NavBar.css'
import logoIcon from '../Assests/logo.png';

const NavBar = () => {
  return (
  <nav className="navbar">
    <img src={logoIcon}  alt='logo' width={67}/> 
    <SearchBar />
    <button className="button">
     Give Feedback
    </button>
  </nav>
  )
}

export default NavBar;
