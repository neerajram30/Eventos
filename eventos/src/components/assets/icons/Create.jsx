import React from 'react'
import { PencilAltIcon } from '@heroicons/react/outline'
import {useNavigate} from 'react-router-dom'


function Create() {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate('/create')

  }



  return (
    <div>
      <button  
      className='hover:bg-nvbg w-24 text-center items-center flex flex-col p-1 hover:rounded-lg'
      onClick={handleClick}
      >
        <PencilAltIcon className='text-blue stroke-1 w-10'/>
        <p className='text-sm' >create</p>
      </button>
    </div>
  )
}

export default Create