import React from 'react'
import { Navigate } from 'react-router';
import LoginForm from '../components/LoginForm'
import { isAuthenticated } from '../utilities/utilityfunctions';

const Login = () => {
    const user = isAuthenticated();
    return (
        <div className='h-100'>
            {user && <Navigate to="/" />}   
            <LoginForm/>
        </div>
    
  ) 
}

export default Login