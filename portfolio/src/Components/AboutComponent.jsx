import React from 'react'
import "./AboutComponent.css"
import { Link } from "react-router-dom"
import React1 from "../images/React1.webp"
import React2 from "../images/React2.jpg"

const AboutComponent = () => {
  return (
    <>
      <div className="about">
        <div className="left">
           <h1>Who Am I?</h1>
           <p>I am a react front end developer. I created responsive secure
            website for my clients </p>
            <Link to="/contact">
              <button className="btn">
                Contact
              </button>
            </Link>
        </div>

        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
                <img src={React1} className="img" alt="react" />
            </div>
            <div className="img-stack bottom">
                <img src={React2} className="img" alt="react" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutComponent
