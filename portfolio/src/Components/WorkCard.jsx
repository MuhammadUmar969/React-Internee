import React from "react";
import { NavLink } from "react-router-dom";
import Data from "./WorkCardData"
import "./Work.css";

const WorkCard = (props) => {
  return (
    <>
      {
        Data.map((currElem,indx) => {
            const { imgsrc , title , text , view, source} = currElem;
            return(
                <div className="project-card" key={indx}>
                   <img src={imgsrc} alt="img" />
                 <h2 className="project-title">{title}</h2>
                <div className="pro-details">
               <p>{text}</p>
                <div className="pro-btns">
                  <NavLink to={view} className="btn">
              View
            </NavLink>
            <NavLink to={source} className="btn">
              Source
            </NavLink>
          </div>
        </div>
      </div>
            )
        })
      }
    </>
  );
};

export default WorkCard;
