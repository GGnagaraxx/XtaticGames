import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/index.css'
import './assets/styles/reset.css'
import './assets/styles/breakpoints.css'
import './assets/styles/fancyFuturistic.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/XtaticGames/'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
