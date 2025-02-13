import React from "react";
import "../styles/miniabout.css"
import { Link } from "react-router-dom";

const Miniabout = () => {
  return (
    <div id="bal" >
      <div className="bal" >
        <h3>About Us</h3>
        <p>
          For us, it’s More than just ink on paper. A creative graphic design
          project begins with understanding the client's objective, the target
          market, the competition, the plan for the company's branding, and a
          talent for creating a pleasing design that gets results
              </p>
              <Link onClick="window.location.reload();" to="comp">
                  <button>Learn More</button>
              </Link>
        
      </div>
    </div>
  );
};

export default Miniabout;
