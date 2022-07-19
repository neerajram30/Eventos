import React,{useState} from 'react'

function LoginFrom() {
  const [formData,setformData] = useState({email:'', password:''});
  const {email,password} = formData;

  const formOnChange = (e)=>{
    setformData((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  } 

  const formOnSubmit = (e)=>{
    e.preventDefault();
    console.log(e.target);
  }

  return (
    <div className='md:mr-32 mr-0 pl-3 pr-3 md:pl-0 md:pr-0'>
      <div className='font-sora md:text-4xl text-2xl md:mt-0 mt-10'>
        <h2>Login</h2>
      </div>
      <form className='md:mt-10 mt-6 md:w-80 w-full' onSubmit={formOnSubmit}>
      <input 
      type="text" 
      placeholder='Email' 
      name="email" 
      className='pl-4 pr-4 h-10 md:w-80 w-full shadow-[#000000c9] shadow-formbox text-sm rounded-sm'
      value={email}
      onChange={formOnChange}    
      /><br/>
      <input 
      type="password"  
      placeholder='Password' 
      name="password" 
      className='pl-4 pr-4 mt-5 h-10 md:w-80 w-full shadow-[#000000c9] shadow-formbox text-sm rounded-sm'
      value={password}
      onChange={formOnChange} 
      /><br/>
      <input type="submit" name="submit" value="Login" className='md:w-80 w-full h-10 text-sm bg-blue text-white mt-10 rounded-sm font-extrabold'/>
      </form>
    </div>
  )
}

export default LoginFrom