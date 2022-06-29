import React from 'react'
import { useLocation } from 'react-router'
import UpdateProfileForm from '../components/UpdateProfileForm'

const UpdateProfile = (props) => {
    const location = useLocation()
    const { user } = location.state
  
  return (
    <UpdateProfileForm employee={user} />
  )
}

export default UpdateProfile