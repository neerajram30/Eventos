import React from 'react'

function LoginFrom() {
  return (
    <div className='md:mr-32 mr-0'>
      <div className='font-sora md:text-4xl text-2xl'>
        <h2>Login</h2>
      </div>
      <form className='mt-10 md:w-80'>
      <input type="text" placeholder='Email' name="username" className='pl-4 pr-4 h-10 md:w-80 w-3/4 shadow-[#000000c9] shadow-formbox text-sm rounded-sm'/><br/>
      <input type="password"  placeholder='Password' name="password" className='pl-4 pr-4 mt-5 h-10 md:w-80 w-3/4 shadow-[#000000c9] shadow-formbox text-sm rounded-sm'/><br/>
      <input type="submit" name="submit" value="Login" className='md:w-80 w-3/4 h-10 text-sm bg-blue text-white mt-10 rounded-sm font-extrabold'/>
      </form>
    </div>
  )
}

export default LoginFrom