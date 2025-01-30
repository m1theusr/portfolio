import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './app/App'
import Footer from './shared/Footer'
import About from './app/About'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
    <About />
    <Footer />
  </StrictMode>,
)