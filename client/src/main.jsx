import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import LoginProvider from './context/loginContext.jsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <LoginProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LoginProvider>
    </QueryClientProvider>

  </StrictMode>,
)
