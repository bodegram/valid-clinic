import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className="container">
       <div className="hero-section">
        <div className="hero-top">
        <div className="row">
            <div className="col">
              <div className="hero-col-1">
              <div className='hero-col-1-text'><h3>Over a long period of work we have provided hundreds of thousands of health care services</h3></div>
              </div>
            </div>
            <div className="col">
                <div className="hero-col-2">
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
  )
}
