import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Signup from '../Components/Signup'

const AppRouter = () => {
  return (
    <div>
  <BrowserRouter>
  <Routes>
    <Route path = 'loginpage' element = {<Login/>}/>
    <Route path = '' element = {<Signup/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default AppRouter