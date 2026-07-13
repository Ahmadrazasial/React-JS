import React, { useEffect } from 'react'

const Navbar = ({ color }) => {

  // Runs on every render
  useEffect(() => {
    alert("Hey I will run on every render");
  })

  // Runs only on first render
  useEffect(() => {
    alert('Hey I will run only on first render');
    return () => {
      alert("Hey Navbar was unmounted");
    }
  }, [])

// Runs only when the color prop changes
  useEffect(() => {
    alert("Color changed to " + color);
  }, [color]);



  return (
    <div>
      <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around', backgroundColor: "#874CC0", padding: '1rem' }}>
        <li style={{ color }}>Home</li>
        <li style={{ color }}>About</li>
        <li style={{ color }}>Services</li>
        <li style={{ color }}>Contact</li>
        <li style={{ color }}>Login</li>
      </ul>
    </div>
  )
}

export default Navbar
