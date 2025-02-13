import React from "react";
import "../Subpages/work.css"
import one from "../assets/1.jpeg"
import two from "../assets/2.jpeg"
import three from "../assets/3.jpeg"
import eight from "../assets/8.jpeg"
import twelve from "../assets/12.jpg"
import fifteen from "../assets/15.jpg"
import ten from "../assets/10.jpeg"
import four from "../assets/4.jpeg"
const Ourworks = () => {
  return (
    <div className="alt">
    <div>
      <div className="word">
        <h1>Our Work</h1>
        <p>
          Providing high levels of accuracy in design and user experience
          remains the top priority of our development team. Click on images to
          see more designs.
        </p>
          </div>
          <div className="give">
              <img  src={one} alt="" />
              <img src={two} alt="" />
          </div>
          <div className="give">
              <img src={three} alt="" />
              <img src={eight} alt="" />
          </div>
          <div className="give">
              <img src={twelve} alt="" />
              <img src={fifteen} alt="" />
          </div>
          <div className="give">
              <img src={ten} alt="" />
              <img src={four} alt="" />
        </div>
          
      </div>
      </div>
  );
};

export default Ourworks;
