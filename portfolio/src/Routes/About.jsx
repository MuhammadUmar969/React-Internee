import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero2 from '../Components/Hero2'
import AboutComponent from '../Components/AboutComponent'

const About = () => {
  return (
    <>
      <Navbar />
      <Hero2 heading="ABOUT." text = "I'm a friendly Front-End Developer" />
      <AboutComponent />
      <Footer />
    </>
  )
}

export default About
