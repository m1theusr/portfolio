import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './app/App'
import Footer from './shared/Footer'
import About from './app/Resume'
import Projects from './app/Projects'
import Resume from './app/Resume'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
    <About />
    <Projects />
    <Footer />
  </StrictMode>,
)