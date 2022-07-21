import axios from 'axios'

const API_URL = 'http://localhost:5000/api/events/';

const create = async (eventData, token) =>{
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    const response = await axios.post(API_URL + 'create', eventData, config)

    if(response.data){
        localStorage.setItem('event',JSON.stringify(response.data))
    }

}

const eventService = {
    create,
}

export default eventService