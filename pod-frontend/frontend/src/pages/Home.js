import React from 'react'
import { Navigate } from 'react-router'
import Profile from '../components/Profile'
import { isAuthenticated, isAuthorized } from '../utilities/utilityfunctions'


const Home =  () => {  
  const user = isAuthenticated();
  console.log(isAuthorized());
  
  
  return (
    
    <div className="h-100 mx-auto">
    {user && <Profile user={user}/>}
  
  </div>

  )
}

export default Home