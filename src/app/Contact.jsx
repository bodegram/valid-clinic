import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import '../assets/styles/Contact.css'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const inputRef = useRef()

  useEffect(()=>{
    inputRef.current.focus()
  }, [])
  return (
    <div>
         <Navbar/>
         <div className="row container">
          <div className="col">
              <div>
                <h3>Contact us</h3>
              </div>
              <div className='contact-info'>
                <div className='contact-element'>Benin city, Edo State</div>
                <div className='contact-element'>+2349155104851</div>
                <div className='contact-element'>samuelawofisan1@gmail.com</div>
              </div>
          </div>
          <div className="col">
            <div>
              <div><h3>SEND US A MESSAGE</h3></div>
            </div>
            <div className='form'>
               <form action="">
               <div className="input-field">
                  <label htmlFor="">Name</label><br />
                  <input type="text" name="" id="" ref={inputRef} />
                </div>
                <div className="input-field">
                  <label htmlFor="">Email Address</label><br />
                  <input type="text" name="" id="" />
                </div>
                <div className="input-field">
                  <label htmlFor="">Telephone</label><br />
                  <input type="text" name="" id="" />
                </div>
                <div className="input-field">
                  <label htmlFor="">Message</label><br />
                  <textarea name="" id="" cols="30" rows="4"></textarea>
                </div>
                <div className="input-field">
                 <button className='contact-btn'>Submit</button>
                </div>
               </form>
            </div>
          </div>
          <div className="col">
              <div>
                <div><h3>SOCIAL HANDLES</h3></div>
                <div className='icons'>
                 <div className="social-element">
                  <Link to=''>Facebook</Link>
                 </div>
                 <div className="social-element">
                  <Link to=''>Twitter</Link>
                 </div>
                 <div className="social-element">
                  <Link to=''>Instagram</Link>
                 </div>
                 
                </div>
              </div>
          </div>
         </div>
    </div>
  )
}
