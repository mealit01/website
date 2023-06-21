import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Profile() {
    const { userInfo } = useSelector((state) => state.user )
  return (
    <div>
        <Navbar />
    </div>
  )
}

export default Profile