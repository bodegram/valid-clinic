import React from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  const imgOne = require('../assets/images/b.avif')
  const imgTwo = require('../assets/images/c.jpg')
  const imgThree = require('../assets/images/d.avif')
  return (
   <div style={{background: 'black'}}>
     <div className="container">
       <div className="hero-section">
        <div className="hero-top">
        <div className="row">
            <div className="col">
              <div className="hero-col-1">
              <div className='hero-col-1-text'><h6>
              <TypeAnimation
  sequence={['It is no measure of health to be well adjusted to a profoundly sick society.', 500, 'When wealth is lost, nothing is lost; when health is lost, something is lost; when character is lost, all is lost.', 500, 'Prevention is better than cure.', 500]}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/>
                </h6></div>
              </div>
            </div>
            <div className="col">
                <div className="hero-col-2">
                <div className="hero-col-2-img">
                  <img src={imgOne} width={35} alt="" style={{borderRadius: '3px', marginRight: '3px'}} />
                  <img src={imgTwo} width={35} alt="" style={{borderRadius: '3px', marginRight: '3px'}}  />
                  <img src={imgThree} width={35} alt="" style={{borderRadius: '3px', marginRight: '3px'}}  />
                </div>
                <div className='hero-col-2-header'>100k+</div>
                <div className='hero-col-2-text'>Satisfied customer</div>
                </div>
            </div>
        </div>
        </div>
        <div className="hero-bottom">
             <div className="row">
                <div className="col">
                    <div className='fact'>Facts</div>
                </div>
                <div className="col">
                   <div className="fact-texts">
                   <div >
                      <div className='fact-text'>Premium equipment that needs the state of the art in the health market</div>
                    </div>
                    <hr />
                    <div>
                    <div className='fact-text'>Premium equipment that needs the state of the art in the health market</div>
                    </div>
                   </div>
                </div>
                <div className="col">
                     <div className="hero-card">
                        <div className='hero-card-top-text'>Take the discount for the first visit to the clinic</div>
                        <div className="hero-card-bottom">
                            <div className="hero-card-bottom-1">
                                <div><h3>20%</h3></div>
                            </div>
                            <div className="hero-card-bottom-2">
                                <Link className='hero-card-btn'>Make an appointment</Link>
                            </div>
                        </div>
                     </div>
                </div>
             </div>
        </div>
       </div>
    </div>
   </div>
  )
}
