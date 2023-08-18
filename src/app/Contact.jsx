import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import '../assets/styles/Contact.css'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import {FaEnvelope, FaMap, FaPhone, FaFacebookF, FaTwitch, FaInstagram, FaTwitter} from 'react-icons/fa'
import Footer from '../components/Footer'

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [telephone, setTelephone] = useState("")
  const [message, setMessage] = useState("")
  const inputRef = useRef()

  useEffect(()=>{
    inputRef.current.focus()
  }, [])

  console.log(name)

  const handleSubmit = (e) =>{
        e.preventDefault()
  }
  return (
    <div>
         <Navbar/>
         <div className="row container" style={{marginTop: '30px'}}>
          <div className="col">
              <div>
                <h3>Contact us</h3>
              </div>
              <div className='contact-info'>
                <div className='contact-element'><FaMap/> Benin city, Edo State</div>
                <div className='contact-element'><FaPhone/> +2349155104851</div>
                <div className='contact-element'><FaEnvelope/> samuelawofisan1@gmail.com</div>
              </div>
          </div>
          <div className="col">
            <div>
              <div><h3>Send us a message</h3></div>
            </div>
            <div className='form'>
               <form action="" onSubmit={handleSubmit}>
               <div className="input-field">
                  <label htmlFor="">Name</label><br />
                  <input type="text" name="" id="" ref={inputRef} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input-field">
                  <label htmlFor="">Email Address</label><br />
                  <input type="text" name="" id=""  onChange={(e) => setTelephone(e.target.value)} />
                </div>
                <div className="input-field">
                  <label htmlFor="">Telephone</label><br />
                  <input type="text" name="" id=""  onChange={(e) => setTelephone(e.target.value)} />
                </div>
                <div className="input-field">
                  <label htmlFor="">Message</label><br />
                  <textarea name="" id="" cols="30" rows="4"  onChange={(e) => setMessage(e.target.value)} ></textarea>
                </div>
                <div className="input-field">
                 <button className='contact-btn'>Submit</button>
                </div>
               </form>
            </div>
          </div>
          <div className="col">
              <div>
                <div><h3>Social Handles</h3></div>
                <div className='icons'>
                 <div className="social-element">
                  <Link to=''><FaFacebookF color='blue' size={20}/></Link>
                 </div>
                 <div className="social-element">
                  <Link to=''><FaTwitter color='blue' size={20}/></Link>
                 </div>
                 <div className="social-element">
                  <Link to=''><FaInstagram color='red' size={20}/></Link>
                 </div>
                 
                </div>
              </div>
          </div>
         </div>
         <Footer/>
    </div>
  )
}
