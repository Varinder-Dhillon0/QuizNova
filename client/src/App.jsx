import React from 'react'
import Navbar from './components/navbar'
import LandingPage from './components/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App