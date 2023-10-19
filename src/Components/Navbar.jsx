import React from 'react'

function Navbar() {
  return (
    <div>
      <nav>
        <div className='logo'>
            <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
            <li href="/">Home</li>
            <li href="/">About</li>
            <li href="/">Location</li>
            <li href="/">Contact</li>
        </ul>
        <button>LOGIN</button>
      </nav>
    </div>
  )
}

export default Navbar
