import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/Navbar.css'

export default function Navbar() {
    const [active, setActive] = useState(false)

    const handleMenu = () => {
        setActive(!active)
        console.log(active)
    }

  return (
    <div>
        <nav className='container'>
            <div className='nav-brand'>VALID</div>
            <div className="nav-menu">
            <ul className={active? 'show': 'hide'}>
               <li>
               <div className="cancel-btn">
                    <button onClick={()=>setActive(!active)}>cancel</button>
                </div>
               </li>
                <li className='nav-item'>
                    <Link to='/'  className='nav-link'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about'  className='nav-link'>About</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services'  className='nav-link'>Services</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-link'>Contact</Link>  
                </li>
                <li>
                    {active}
                </li>
            </ul>
            </div>
            <div className='nav-btn'>
                <button onClick={handleMenu}>Menu</button>
            </div>
        </nav>
    </div>

  )
}
