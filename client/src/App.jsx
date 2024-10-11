import React from 'react'
import Home from "./pages/landing/home"
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import Admin from './pages/admin'
import Layout from './components/layout/layout'
import Editor from './components/admin/editor'
import ProtectedRoute from './routes/protectedRoutes'
import { AppRoutes } from './routes'

const router = createBrowserRouter(AppRoutes);

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App