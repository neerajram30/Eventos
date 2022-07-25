import React from 'react'
import { PencilAltIcon } from '@heroicons/react/outline'

function Create() {
  


  return (
    <div>
      <a href='/create'>
      <button  
      className='hover:bg-nvbg w-24 text-center items-center flex flex-col p-1 hover:rounded-lg'
      >

        <PencilAltIcon className='text-blue stroke-1 w-10'/>
        <p className='text-sm' >create</p>
      </button>
    </a>
    </div>
  )
}

export default Create