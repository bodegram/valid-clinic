import React, {useEffect} from 'react'
import SideBar from '../components/SideBar'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router'

export default function Dashboard() {
    const auth = sessionStorage.getItem('token')
    const navigate = useNavigate()
  useEffect(()=>{
    if(!auth){
        return navigate('/login')
    }
  }, [])
  return (
    <div>   
       <SideBar/>
    </div>
  )
}
