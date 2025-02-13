import React from "react";
import "../styles/homebanner.css"
import { Link } from "react-router-dom";
const Homebanner = () => {
  return (
    <div>
      <div className="azb">
        <div className="azz">
        <h2>Join Our World</h2>
        <p>
          Here at AZB GRAPHICS LLC , we create meaningful designs that
          resonate, We help professionals (startups, corporations, and
          non-profits) develop a visual presence. Our expertise includes website
          design as well as logo, branding, and marketing design for clients who
          want to make a difference through their work as we do through ours.
        </p>
        <Link to="/work">
          <button>Explore</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Homebanner;
