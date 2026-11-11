import React from 'react'
import { useState } from 'react';

export default function Darkmode() {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <div  style={{ backgroundColor: darkMode ? 'white' : 'black', color: darkMode ? 'black' : 'white',height:'200px',width:'100vw',alignItems:'center',display:'flex',justifyContent:'center'}}> 
        <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
    </div>
  )
}
