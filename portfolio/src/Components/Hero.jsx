import React from 'react'
import './Hero.css'
import laptop from '../images/laptop.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="mask">
            <img className="lapi-img" src={laptop} alt="laptop" />
        </div>
        <div className="content">
            <p>HI, I'M UMAR AZIZ</p>
            <h1>React Developer.</h1>
         <div>
            <Link to='/project' className="btn">
              Project
            </Link>
            <Link to='/contact' className="btn btn-light">
              Contact
            </Link>
         </div>
        </div>
      </div>
    </>
  )
}

export default Hero
