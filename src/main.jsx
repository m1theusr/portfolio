import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './app/App'
import Footer from './shared/Footer'
import Projects from './app/Projects'
import AboutMe from './app/About'
import Resume from './app/Resume'
import Navbar from './shared/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <HomePage />
    <AboutMe />
    <Projects />
    <Footer />
  </StrictMode>,
)