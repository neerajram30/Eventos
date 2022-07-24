import React from 'react'
import Create from '../assets/icons/Create'
import Myevents from '../assets/icons/Myevents'

function Sidenav() {
  return (
    <nav className='p-2 flex md:flex-col fixed mt-[90vh] md:mt-5 justify-center md:ml-10 pt-10'>
        <div >
          <Myevents/>
        </div>
        <div className='pt-20'>
          <Create/>
        </div>
    </nav>
  )
}

export default Sidenav