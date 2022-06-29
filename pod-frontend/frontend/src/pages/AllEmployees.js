import React, { useEffect, useState } from 'react'
import { getEmployees } from '../apicalls';
import ViewEmployees from '../components/ViewEmployees';

const AllEmployees = () => {
    const [employees, setemployees] = useState([]);
    const getallemployees=()=>{
        getEmployees().then(values=>{
            setemployees(values);
        })
    }
    useEffect(() => {
      getallemployees();
    
      
    }, [])
    
  return (
    <ViewEmployees employees={employees} />
  )
}

export default AllEmployees