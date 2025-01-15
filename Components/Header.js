import React from 'react'

const Header = () => {
  return (
    <div id='header'>
        <div id='logo'>
            <h3>Petpals</h3>
        </div>
        <div>
            <nav id='navbar'>
                <a href=''>Home</a>
                <a href=''>Browse Pet</a>
                <a href=''>Dashboard</a>
                <a href=''>Services</a>
                <a href=''>About</a>
                <a href=''>Contact</a>
            </nav>
        </div>
    </div>
  )
}

export default Header