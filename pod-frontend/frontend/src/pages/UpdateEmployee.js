import React from 'react'
import { useLocation } from 'react-router'
import UpdateEmployeeForm from '../components/UpdateEmployeeForm'
const UpdateEmployee = (props) => {
    const location = useLocation()
    const { user } = location.state ? location.state : {}
  
  return (
    <UpdateEmployeeForm employee={user} />	
  )
}

export default UpdateEmployee