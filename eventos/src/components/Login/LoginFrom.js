import React from 'react'

function LoginFrom() {
  return (
    <div className='md:mr-32 mr-0 pl-3 pr-3 md:pl-0 md:pr-0'>
      <div className='font-sora md:text-4xl text-2xl md:mt-0 mt-10'>
        <h2>Login</h2>
      </div>
      <form className='md:mt-10 mt-6 md:w-80 w-full'>
      <input type="text" placeholder='Email' name="username" className='pl-4 pr-4 h-10 md:w-80 w-full shadow-[#000000c9] shadow-formbox text-sm rounded-sm'/><br/>
      <input type="password"  placeholder='Password' name="password" className='pl-4 pr-4 mt-5 h-10 md:w-80 w-full shadow-[#000000c9] shadow-formbox text-sm rounded-sm'/><br/>
      <input type="submit" name="submit" value="Login" className='md:w-80 w-full h-10 text-sm bg-blue text-white mt-10 rounded-sm font-extrabold'/>
      </form>
    </div>
  )
}

export default LoginFrom