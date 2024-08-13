import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
