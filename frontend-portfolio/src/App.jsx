import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ProfileLookup from './components/ProfileLookup'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header/>
    <ProfileLookup/>
    <About/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
