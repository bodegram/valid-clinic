import React from 'react'
import '../assets/styles/NotFound.css'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <div className="container" style={{marginTop: '200px', textAlign: 'center'}}>
            <div className="error">
                <div className="error-header">
                    <div className="error-left">
                        <div><h3>Page Not Found</h3></div>
                        <div className='error-text'>An error occurred </div>
                    </div>
                    <div className="error-right">
                         <div><h3>404 Page</h3></div>
                    </div>
                </div>
                <div className='error-body'>
                    <div className='error-text'>Return to <Link to='/'>hompage</Link></div>
                </div>

            </div>
        </div>
    </div>
  )
}
