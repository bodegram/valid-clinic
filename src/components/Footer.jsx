import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/Footer.css'

export default function Footer() {
  return (
    <div>
        <footer>
        <div className="container">
            <div className="row">
                <div className="col">
                   <div className="footer-one">
                   <div className='footer-one-header'><h5>VALID CLINIC</h5></div>
                    <div className='footer-one-text'>Valid clinic is one of the best hospital in Benin city, Edo State, Nigeria.</div>
                   </div>
                </div>
                <div className="col">
                     <div className='footer-two'>
                        <div className='footer-two-header'><h5>COMPANY</h5></div>
                        <ul className='footer-two-items'>
                            <li><Link to='/'  className='footer-link'>Home</Link></li>
                            <li><Link to='/'  className='footer-link'>Doctors</Link></li>
                            <li><Link to='/'  className='footer-link'>FAQs</Link></li>
                            <li><Link to='/'  className='footer-link'>Privacy Policies</Link></li>
                        </ul>
                     </div>
                </div>
                <div className="col">
                <div className='footer-three'>
                        <div className='footer-three-header'><h5>COMPANY</h5></div>
                        <ul className='footer-three-items'>
                            <li><Link to='/' className='footer-link'>Home</Link></li>
                            <li><Link to='/'  className='footer-link'>Doctors</Link></li>
                            <li><Link to='/'  className='footer-link'>FAQs</Link></li>
                            <li><Link to='/'  className='footer-link'>Privacy Policies</Link></li>
                        </ul>
                     </div>
                </div>
            </div>
            <div className='footer-bottom'>Copyright 2023. All Rights Reserved | Valid Clinic. </div>
        </div>
        </footer>
    </div>
  )
}
