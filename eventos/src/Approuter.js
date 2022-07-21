import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Create from './components/layouts/Create'
import Home from './components/layouts/Home'
import Login from './components/layouts/Login'
import Signup from './components/layouts/Signup'
import PrivateRoutes from './components/Route/PrivateRoutes'


function Approuter() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        {/* <Route path='/create' element={<Create/>}/> */}
        <Route element={<PrivateRoutes/>}>
              <Route path='/create' element={<Create/>} />
        </Route>
      </Routes>   
    </Router>
  )
}

export default Approuter