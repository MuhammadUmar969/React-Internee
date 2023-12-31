import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero2 from '../Components/Hero2'
import PricingCard from '../Components/PricingCard'
import Work from '../Components/Work'

const Project = () => {
  return (
    <>
     <Navbar />
     <Hero2 heading = "PROJECTS." text = "Some of my most recent works" />
     <Work />
     <PricingCard />
     <Footer />
    </>
  )
}

export default Project
