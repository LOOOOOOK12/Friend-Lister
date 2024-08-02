import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Login from './pages/Login.tsx'
import Routes from './Routes/routes.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
)
