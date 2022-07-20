import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {logout, reset} from '../../features/auth/authSlice'
import {Link} from 'react-router-dom'

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
    <nav className='bg-nvbg h-14'>
        <div className='flex justify-between'>
            <div>
                Eventos
            </div>
            {
              user && <button onClick={clickHandle}>logout</button>
            }
            <div>
                profile
            </div>
            {user && 
            <Link to='/create'>create</Link>
            }    
        </div>
    </nav>
  )
}

export default Navbar