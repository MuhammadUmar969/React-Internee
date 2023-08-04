import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero2 from '../Components/Hero2'
import Form from '../Components/Form'

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero2 heading="CONTACT." text="Let's have a chat" />
      <Form />
      <Footer />
    </>
  )
}

export default Contact
