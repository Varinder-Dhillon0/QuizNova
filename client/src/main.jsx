import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/globals.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import ToastProvider from './context/toastContext.jsx'
import AuthProvider from './context/AuthContext.jsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <AuthProvider>
            <App />
        </AuthProvider>
      </ToastProvider>
    </QueryClientProvider>

  </StrictMode>,
)
