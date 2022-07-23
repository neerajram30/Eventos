import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {logout, reset} from '../../features/auth/authSlice'
import {Link} from 'react-router-dom'
import Profile from '../assets/icons/Profile'
import Dropdown from '../assets/icons/Dropdown'

function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state)=> state.auth)

  const clickHandle = ()=>{
    dispatch(logout());
    dispatch(reset())
    navigate('/')
  }

  return (
    <nav className='bg-nvbg h-14 font-montserrat w-screen'>
        <div className='flex justify-between'>
            <div className='pt-2 ml-5 font-inter text-xl'>
              <Link to='/'>
                Eventos
              </Link>
            </div>
            {
              user && <button onClick={clickHandle}>logout</button>
            }
            {user && 
            <Link to='/create'>create</Link>
            }    
            <div className='pt-2 mr-5'>
              <Dropdown/>
            </div>
            
            
        </div>
    </nav>
  )
}

export default Navbar