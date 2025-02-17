import React from "react";
import download from "../assets/download.png"
import { Link } from "react-router-dom";
import "../styles/Build.css"
const Build = () => {
  return (
    <div id="hall">
      <div className="hall">
        
        <div id="ball">
          <h3>Building an image of professionalism</h3>
          <p>
            We offer a wide range of design and development services that are
            all delivered using the latest and greatest technologies with a
            personal experience.
          </p>
          <Link to="/work">
          <button  onClick="window.location.reload();">Our work</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Build;
