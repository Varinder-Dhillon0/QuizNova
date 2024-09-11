import React from 'react'
import Home from "./pages/home"
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Admin from './pages/admin'
import Layout from './components/layout/layout'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}></Route>
        </Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
      </Routes>
    </>
  )
}

export default App