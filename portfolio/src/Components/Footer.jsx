import React from "react";
import Data from "../Api/FootApi";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            {Data.map((currElem, indx) => {
              return (
                  <div className="location" key={indx}>
                  {currElem.icon}
                  <div>
                    <p>{currElem.content}</p>
                    <p>{currElem.country}</p>
                  </div>
                  </div>
              );
            })}
          </div>

          <div className="right">
            <h4>About Me</h4>
            <p>
              This is Muhammad Umar Aziz Khan a Frontend Developer. I enjoy
              discussing new projects and design challenges.
            </p>

            <div className="social">
              <FaFacebook
                size={30}
                style={{
                  color: "#fff",
                  marginRight: "1rem",
                }}
              />
              <FaTwitter
                size={30}
                style={{
                  color: "#fff",
                  marginRight: "1rem",
                }}
              />
              <FaLinkedin
                size={30}
                style={{
                  color: "#fff",
                  marginRight: "1rem",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
