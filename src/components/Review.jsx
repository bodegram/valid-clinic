import React from 'react'
import '../assets/styles/Review.css'

export default function Review(props) {
    const img = require('../assets/images/a.avif')
  return (
    <div>
        <div className="review-card">
            <div className="review-card-header">
                <div className='review-card-title'><span className='review-card-img'><img src={img} alt="img" width={20} /></span>{props.name}</div>
                <div className='review-rating'>{props.rating}</div>
            </div>
            <div className="review-card-body">
                <div className="review-card-text">{props.text}</div>
            </div>
        </div>
    </div>
  )
}
