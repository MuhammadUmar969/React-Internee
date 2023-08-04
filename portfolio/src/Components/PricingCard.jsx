import React from "react";
import { Link } from "react-router-dom";
import Data from "../Api/Card";
import "./PricingCard.css";

const PricingCard = () => {
  return (
    <>
      <div className="pricing">
        <div className="card-container">
          {Data.map((currElem, indx) => {

            const {tag, Pay, Days, Featured, Design, Pages} = currElem;

            return (
              <div className="card" key={indx}>
                <h3>{tag}</h3>
                <span className="bar"></span>
                <p className="btc">{Pay}</p>
                <p> {Days} </p>
                <p> {Pages} </p>
                <p> {Featured} </p>
                <p> {Design} </p>
                <Link to="/contact" className="btn">
                  Purchase Now
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PricingCard;
