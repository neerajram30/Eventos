import React from 'react'
import Graphic from '../assets/Graphic'
import LoginForm from '../Login/LoginFrom'

function Login() {
  return (
    <main className='flex justify-between'>
        <Graphic/>
        <LoginForm/>
    </main>
  )
}

export default Login