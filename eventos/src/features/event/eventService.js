import axios from 'axios'

const API_URL = 'http://localhost:5000/api/events/';

const create = async (eventData, token) =>{
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    console.log(config);  
    const response = await axios.post(API_URL + 'create', eventData, config)

    if(response.data){
        localStorage.setItem('event',JSON.stringify(response.data))
    }

}

const getEvents = async ()=>{
  const response = await axios.get(API_URL);
  return response.data.events;
}

const getMyevents = async (token)=>{
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  
  const response = await axios.get(API_URL + 'myevent', config)
  return response.data;
}

 const getEventbyId = async (id) =>{
   const response = await axios.get(API_URL+'/'+id);
  
   return response.data;
 }

const eventService = {
    create,
    getEvents,
    getMyevents,
   getEventbyId,
}

export default eventService