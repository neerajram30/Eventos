import axios from 'axios'

const API_URL = 'http://localhost:5000/api/user/register';

const register = async (userData) =>{
    const response = await axios.post(API_URL, userData)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }

}

const authService ={
    register
}

export default authService
