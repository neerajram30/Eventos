import React from 'react'
import { Link } from 'react-router-dom'

function Event({event,i}) {
  return (

    <div  key={i} className='shadow-[#ada6a63d] shadow-eventbox rounded-md p-6 h-64 mt-5'>
      <Link to={event._id}>
              <h2 className='text-2xl font-sora'>{event.title}</h2>
              <div className='mt-2 w-3/4 break-words'>
              <p className='font-thin text-sm'>{event.description}</p>
              </div>
              <div className='md:flex justify-between block pt-8'>
                <div className='flex'>
                <p>Date: </p>
                <p>{event.startDate} - {event.endDate}</p>
                </div>
                <div >
                    <p>{event.venue}</p>
                </div>
              </div>
              <div className='flex justify-end mt-10 '>
                <button className=' p-2 text-white text-sm'>Register</button>
              </div>
      </Link>
    </div>
  )
}

export default Event