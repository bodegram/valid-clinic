import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

export default function Service(props) {   
  return (
     <div>
        <div className="service-card">
           <div className="service-card-header">
            <div className='service-card-title'>{props.header}</div>
            <div className='service-card-icon'>
                <button className='service-card-btn' onClick={props.handleOpen}>{props.isOpen ? <FaMinus/> : <FaPlus/>}</button>
            </div>
           </div>
           <div className="service-card-body">
             <div className={props.isOpen ? 'show' : 'hide'}>
             <div className="service-card-text">{props.text}</div>
             </div>
           </div>

        </div>
     </div>
  )
}
