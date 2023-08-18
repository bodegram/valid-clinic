import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import '../assets/styles/Home.css'
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'
import Faqs from '../components/Faqs'

export default function Home() {
 
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Reviews/>
        <Faqs/>
        <Footer/>
        
      
    </div>
  )
}
