import React from 'react'
import { useLocation } from 'react-router'
import EmployeeComp from '../components/EmployeeComp'
const Employee = () => {
    const location = useLocation()
    const { user } = location.state
  return (
    <EmployeeComp employee={user}/>
  )
}

export default Employee