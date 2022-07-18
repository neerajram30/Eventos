import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Event from './Event'

function Events() {
    const [data,setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/api/events')
        .then((response)=>setData(response.data.events))
        .catch((err)=>console.log(err))
        
    }, [])
    

  return (
      <main className='flex justify-center mt-10 font-montserrat'>
        {console.log(data)}
        <div className='w-2/3'>
         {data.map((event,i)=>
           <Event event={event} key={i}/>
          )} 
        </div>
      </main>
  )
}

export default Events