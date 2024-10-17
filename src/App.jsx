import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signupform from './components/Signupform'
import Loginform from './components/Loginform'
import Welcome from './components/Welcome'
import AddProducts from './components/AddProducts'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/login" element={<Loginform/>} />
        <Route path="/signup" element={<Signupform/>} />
        <Route path='/addproduct' element={<AddProducts/>} />
       </Routes>
    </>
  )
}

export default App
