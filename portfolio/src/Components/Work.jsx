import React from 'react'
import robo from "../images/robo.png"
import hotel from "../images/hotel.png"
import estate from "../images/estate.png"
import { NavLink } from "react-router-dom"
import "./Work.css"
import WorkCard from './WorkCard'

const Work = () => {
  return (
    <>
      <div className="work-container">
        <h1 className="project-heading">
            Projects
        </h1>
        <div className="project-container">
            <WorkCard />
        </div>
      </div>
    </>
  )
}

export default Work
