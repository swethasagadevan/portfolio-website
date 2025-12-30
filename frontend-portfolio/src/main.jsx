import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/project" element={<Project/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
  </BrowserRouter>
)
