import React from 'react'

export default function AboutComponent() {
    const aboutImage = require('../assets/images/3.png')
  return (
    <div>
        <div className="container">
           <div className="row">
           <div className="col">
                <div className='about-first-top'>
                <div className='about-title'>About us</div>
                </div>
                <div className="about-first-footer">
                    <div>icon</div>
                </div>
            </div>
            <div className="col">
            <div className='about-middle-top'>
                <h3 className='about-middle-top-text'>Valid Clinic and <br /> Maternity</h3>
                <div className='about-middle-top-subtext'>The modern Valid Clinic and Maternity is one of <br /> the best in Benin city</div>
                <div>
                    <button className='about-button'>Learn more</button>
                </div>
            </div>
            <div className='about-middle-footer'>
                <div className='about-middle-footer-text'>Laser vision correction  of any complexity at a fixed price.</div>
            </div>
            </div>
            <div className="col">
             <div className="about-last-top">
                <img src={aboutImage} className='about-last-top-image' alt="No image" />
             </div>
             <div className="about-last-middle">
                <div className="num-row">
                    <div className="num-col">
                        <div className="num-col-text">01</div>
                    </div>
                    <div className="num-col">
                      <div className="num-col-text">02</div>
                    </div>
                </div> <hr />
                <div className="num-row-2">
                    <div className="num-col-2">
                        <div className="num-col-text-2">We use modern <br /> equipments</div>
                    </div>
                    <div className="num-col-2">
                      <div className="num-col-text-2">The result surpasses all <br /> expectations</div>
                    </div>
                </div>

                <div className="num-row">
                    <div className="num-col">
                        <div className="num-col-text">03</div>
                    </div>
                    <div className="num-col">
                      <div className="num-col-text">04</div>
                    </div>
                </div> <hr />
                <div className="num-row-2">
                    <div className="num-col-2">
                        <div className="num-col-text-2">Individual contract <br /> with the client</div>
                    </div>
                    <div className="num-col-2">
                      <div className="num-col-text-2">We are certified</div>
                    </div>
                </div>

                <div className="num-row">
                    <div className="num-col">
                        <div className="num-col-text">05</div>
                    </div>
                    <div className="num-col">
                      <div className="num-col-text">06</div>
                    </div>
                </div> <hr />
                <div className="num-row-2">
                    <div className="num-col-2">
                        <div className="num-col-text-2">We have the best <br /> professionals working</div>
                    </div>
                    <div className="num-col-2">
                      <div className="num-col-text-2">we train our own <br /> specialists</div>
                    </div>
                </div>

             </div>
            </div>
           </div>
        </div>
    </div>
  )
}
