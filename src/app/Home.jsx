import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import '../assets/styles/Home.css'
import Footer from '../components/Footer'

export default function Home() {
 
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Footer/>
        
      
    </div>
  )
}
