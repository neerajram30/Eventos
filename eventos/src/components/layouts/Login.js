import React from 'react'
import Graphic from '../assets/Graphic'
import LoginForm from '../Login/LoginFrom'

function Login() {
  return (
    <main className='flex md:flex-row flex-col items-center h-screen md:justify-between w-screen'>
        <Graphic/>
        <LoginForm/>
    </main>
  )
}

export default Login