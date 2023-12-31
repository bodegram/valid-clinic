import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/Navbar.css'
import { FaAlignRight, FaWindowClose } from 'react-icons/fa'

export default function Navbar() {
    const [active, setActive] = useState(false)

    const handleMenu = () => {
        setActive(!active)
       
    }

  return (
    <div>
        <nav className='container'>
            <div className='nav-brand'>GMC</div>
            <div className="nav-menu">
            <ul className={active? 'show': 'hide'}>
               <li>
               <div className="cancel-btn">
                    <button onClick={()=>setActive(!active)} className='cancel-icon'><FaWindowClose size={25}/></button>
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
                <li className='nav-item'>
                    <Link to='/gallery' className='nav-link'>Gallery</Link>  
                </li>
               
            </ul>
            </div>
            <div className='nav-btn'>
                <button onClick={handleMenu} className='nav-icon'><FaAlignRight size={25}/></button>
            </div>
        </nav>
    </div>

  )
}
