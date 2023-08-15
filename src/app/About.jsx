import React from 'react'
import Navbar from '../components/Navbar'
import AboutComponent from '../components/AboutComponent'
import '../assets/styles/About.css'
import Footer from '../components/Footer'


export default function About() {
  return (
    <div>
         <Navbar/>
         <AboutComponent/>
         <Footer/>
    </div>
  )
}
