import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/layouts/Home'
import Login from './components/layouts/Login'
function Approuter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>   
    </Router>
  )
}

export default Approuter