import React from 'react'
import '../assets/styles/SideBar.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaPersonBooth, FaGrid } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
export default function SideBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state)=>state.username)
    console.log(user)
    const logout = ()=> {
        dispatch({type: 'logout'})
        navigate('/login')
    
        

    }

  return (
    <div>
        <div className="nav">
            <div className="sidebar-nav">       
               <div className="sidebar-header">
                    <h3>VALID CLINIC</h3>
                </div>
                <div className="sidebar-menu">
                    <ul className='sidebar-items'>
                         <li className='sidebar-item'>
                              <Link className='sidebar-link'>Overview</Link>
                         </li>
                         <li className='sidebar-item'>
                              <Link className='sidebar-link'><FaPersonBooth/>Home</Link>
                         </li>
                         <li className='sidebar-item'>
                              <Link className='sidebar-link'>Profile</Link>
                         </li>
                         <li className='sidebar-item'>
                              <Link className='sidebar-link'>Edit Profile</Link>
                         </li>
                         <li className='sidebar-item'>
                              <Link className='sidebar-link'>Logout</Link>
                         </li>
                    </ul>
                </div>
            
            </div>
            <div className="navbar-nav">
                    <div className='navbar-nav-left'>
                        <div onClick={logout}>Logout</div>
                    </div>
            </div>
        </div>
        <main>
            <h3>Welcome Back {user}</h3>
        </main>
    </div>
  )
}
