import React from 'react'
import Review from './Review'
import '../assets/styles/Reviews.css'
import { FaStar } from 'react-icons/fa'

export default function Reviews() {
  return (
   <div className="container">
     <div className='reviews'>
         <div className='reviews-header'><h3>Reviews</h3></div>
         <div className="reviews-body">
         <Review name='James bond' rating={<><FaStar/> <FaStar/></>} text='Best services offer at valid...A trial will convince you'/>
         <Review name='James bond' rating={<FaStar/>} text='Best services offer at valid...A trial will convince you' />
         <Review name='James bond' rating={<FaStar/>} text='Best services offer at valid...A trial will convince you' />
         </div>
    </div>
   </div>
  )
}
