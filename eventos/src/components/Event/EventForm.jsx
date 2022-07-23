import React,{useState,useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {create, reset} from '../../features/event/eventSlice'
function EventForm() {

  const [formData,setformData] = useState({title:'', startDate:'', endDate:'', venue:'', description:''});
  const {title,startDate,endDate,venue,description} = formData;
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {event, isLoading, isError, isSuccess, message} = useSelector(
    (state)=>state.event
)
useEffect(()=>{
  console.log(isSuccess);
  if(isError){
      console.log(message);
  }
  if(isSuccess == true){
      navigate('/')
      console.log('success');
  }
  dispatch(reset())
},[event, isError, isSuccess, message, navigate, dispatch])


  const formOnChange = (e)=>{
    setformData((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  } 


  const formOnSubmit = (e)=>{
    e.preventDefault();
    const eventData = {
      title,
      startDate,
      endDate,
      venue,
      description
  }

  dispatch(create(eventData))
    
  }

  if (isLoading){
    console.log('loading')
}
  return (
    <main className='pb-10 font-montserrat'>
      <div className='ml-5'>
        <h1>Create Event</h1>
      </div>
      <div className='ml-20 bg-formbg w-fit rounded-md shadow-[#ada6a63d] shadow-createform mt-10'>
        <form className='pt-5 pl-20 pr-20 pb-10' onSubmit={formOnSubmit}>
          <div className='flex flex-col'>
            <label htmlFor="title" className='text-sm font-black'>Title</label>
            <input
              type="text"
              placeholder='Title here'
              name="title"
              className='pl-4 pr-4 mt-2 h-10 md:w-96 w-full shadow-[#868383c9] shadow-formbox text-sm rounded-sm'
              value={title}
              onChange={formOnChange} 
            /><br />
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor="" className='text-sm font-black'>Start date</label>
            <input
              type="date"
              name="startDate"
              className='pl-4 pr-4 mt-2 h-10 md:w-96 w-full shadow-[#868383c9] shadow-formbox text-sm rounded-sm'
              value={startDate}
              onChange={formOnChange}
            /><br />
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor="" className='text-sm font-black'>End date</label>
            <input
              type="date"
              name="endDate"
              className='pl-4 pr-4 mt-2 h-10 md:w-96 w-full shadow-[#868383c9] shadow-formbox text-sm rounded-sm'
              value={endDate}
              onChange={formOnChange}
            /><br />
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor="" className='text-sm font-black'>Location</label>
          <input
            type="text"
            placeholder='venue'
            name="venue"
            className='pl-4 pr-4 mt-2 h-10 md:w-96 w-full shadow-[#868383c9] shadow-formbox text-sm rounded-sm'
            value={venue}
            onChange={formOnChange}
          /><br />
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor="" className='text-sm font-black'>Description</label>
          <textarea 
          name="description" 
          cols="30" 
          rows="5" 
          className='pl-4 pr-4 pt-2 pb-2 mt-2 md:w-96 w-full shadow-[#868383c9] shadow-formbox text-sm rounded-sm'
          value={description}
          onChange={formOnChange}
          >he
          </textarea>
          </div>
          <input type="submit" name="submit" value="Create" className='md:w-80 w-full h-10 text-sm bg-blue text-white mt-10 rounded-sm font-extrabold' />
        </form>
      </div>
    </main>
  )
}

export default EventForm