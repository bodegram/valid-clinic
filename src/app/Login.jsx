import React, { useState } from 'react'
import '../assets/styles/Login.css'
import { FaTimes } from 'react-icons/fa'
import { Link, useNavigate} from 'react-router-dom'
import { toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'



export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
 

  const handleSumbit = (e) => {
    e.preventDefault()

    if(email == "" || password == ""){
      toast.error('Field is blank')
    }

    fetch('http://localhost:8000/api/login', {

        method: 'POST',
        body: JSON.stringify({email: email, password:password}),
        headers: {
            'content-type': 'application/json'
        }
    
    }).
    then(response => response.json()).
    then(data => 
      {
        if(data.status == "success"){
            toast.success(data.message)
            sessionStorage.setItem('token', data.token)
            dispatch({type: "login", payload: "ola"})
           
            navigate('/dashboard')

            
            
        }
        else{
            toast.error(data.message)
        }
    }
   
    
    )
}

    const loginImage = require('../assets/images/3.png')
   
  return (
    <div>
       <div className="row">
        <div className="col">
          <div className="login-1">
          <img src={loginImage} className='login-image' alt="" />
          </div>
        </div>
        <div className="col">
        <div className="login-cancel">
        <Link to='/'>
        <FaTimes size={30} color='black'/>
        </Link>
         </div>
           <div className="container-fluid">
           <div className="login-2">
                  <div className="login-card">
                   
                    <div className="login-card-header">
                        <h3>WELCOME BACK!!!</h3>
                    </div>
                    <form onSubmit={handleSumbit}>
                        <div className="mb-3">
                            <label htmlFor="">Email</label><br />
                            <input type="email" className='login-input' onChange={(e)=> setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Password</label><br />
                            <input type="password" className='login-input'  onChange={(e)=> setPassword(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <button type="submit" className='login-btn'>Login</button>
                        </div>
                    </form>
                  </div>
            </div>
           </div>
        </div>
       </div>
       <ToastContainer/>
    </div>
  )
}
