import React from 'react'

function EventForm() {
  return (
    <main className='pb-10'>
      <div className='ml-5'>
        <h1>Create Event</h1>
      </div>
      <div className='ml-20 bg-formbg w-fit rounded-md shadow-[#ada6a63d] shadow-createform mt-10'>
        <form className='pt-5 pl-20 pr-20 pb-10'>
          <div className='flex flex-col'>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder='Title here'
              name="title"
              className='pl-4 pr-4 mt-2 h-10 md:w-96 w-full shadow-[#868383c9] shadow-formbox text-sm rounded-sm'
            /><br />
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor="">Start date</label>
            <input
              type="date"
              name="startDate"
              className='pl-4 pr-4 mt-2 h-10 md:w-96 w-full shadow-[#868383c9] shadow-formbox text-sm rounded-sm'
            /><br />
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor="">End date</label>
            <input
              type="date"
              name="startDate"
              className='pl-4 pr-4 mt-2 h-10 md:w-96 w-full shadow-[#868383c9] shadow-formbox text-sm rounded-sm'
            /><br />
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor="">Location</label>
          <input
            type="text"
            placeholder='venue'
            name="password"
            className='pl-4 pr-4 mt-2 h-10 md:w-96 w-full shadow-[#868383c9] shadow-formbox text-sm rounded-sm'
          /><br />
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor="">Description</label>
          <textarea name="description" cols="30" rows="5" className='pl-4 pr-4 mt-2 md:w-96 w-full shadow-[#868383c9] shadow-formbox text-sm rounded-sm'></textarea>
          </div>
          <input type="submit" name="submit" value="Create" className='md:w-80 w-full h-10 text-sm bg-blue text-white mt-10 rounded-sm font-extrabold' />
        </form>
      </div>
    </main>
  )
}

export default EventForm