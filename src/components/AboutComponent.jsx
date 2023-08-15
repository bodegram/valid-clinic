import React from 'react'
import { FaArrowCircleRight, FaHandHoldingMedical } from 'react-icons/fa'

export default function AboutComponent() {
    const aboutImage = require('../assets/images/a.avif')
  return (
    <div>
      <div className='container'>
      <h3 className='about-title'>About Us</h3>
      <div className="row">
        <div className="col">
            <div className="about-text">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reprehenderit dolorum labore asperiores. Dignissimos minus incidunt iusto odio consequuntur facere perspiciatis tempore laboriosam voluptas sit error veritatis, quo veniam nesciunt?</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reprehenderit dolorum labore asperiores. Dignissimos minus incidunt iusto odio consequuntur facere perspiciatis tempore laboriosam voluptas sit error veritatis, quo veniam nesciunt?</div>

            </div>
        </div>
        <div className="col">
              <img src={aboutImage} className='about-image' alt="" />
        </div>
      </div>
      </div>    
    </div>
  )
}
