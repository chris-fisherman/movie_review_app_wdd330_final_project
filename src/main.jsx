import React from 'react'
import ReactDOM from 'react-dom/client'

import { Header } from './components/header/Header.jsx'
import App from './App.jsx'

import './css/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    
    <App />
  </React.StrictMode>,
)
