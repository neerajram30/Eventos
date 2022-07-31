import React from 'react'
import { Link } from 'react-router-dom'
import {CalendarIcon, LocationMarkerIcon, TrashIcon, PencilAltIcon} from '@heroicons/react/solid'

function Event({event,i}) {
  return (

    <div  key={i} className='shadow-[#ada6a63d] shadow-eventbox rounded-md p-6 h-64 mt-5'>
      <Link to={event._id}>
              <h2 className='text-2xl font-montserrat font-[700]'>{event.title}</h2>
              <div className='mt-2 w-3/4 break-words'>
              <p className='font-thin text-sm'>{event.description}</p>
              </div>
              <div className='md:flex block pt-8'>
                <div className='flex text-[#647377]'>
                 <div className='flex w-8'><CalendarIcon/></div>
                <p className='mt-2 pl-2 text-sm font-[600]'>From <span className='text-[0.9em] font-[400]'> {event.startDate} </span>to <span className='text-[0.9em] font-[400]'> {event.endDate}</span></p>
                </div>
                <div className='flex ml-10 text-[#647377]'>
                    <div className='w-8'><LocationMarkerIcon/></div>
                    <p className='text-sm font-[600] pt-[7px] pl-1'>{event.venue}</p>
                </div>
              </div>
              <div className='flex  justify-end items-end pr-12 pt-10'>
                <div className='flex text-blue'>
                <button className='w-7'><PencilAltIcon/></button>
                <button className='w-7 ml-5'><TrashIcon/></button>
                </div>
              </div>
      </Link>
    </div>
  )
}

export default Event