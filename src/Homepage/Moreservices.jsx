import React from "react";
import "../styles/moreservices.css";
import { Link } from "react-router-dom";
const Moreservices = () => {
  return (
    <div>
      <div className="lan">
        <h5>More Services</h5>
        <div className="hay">
          <div className="lar">
            <div className="barn">
              <h6>Logo Design</h6>
            </div>
            <p>
              If you are a new business start up, Then you'll need your printed
              material like brochures, letterhead and cards
            </p>
            <Link onClick="window.location.reload();" to="/logo">
            <button>Learn More</button>
            </Link>
            
          </div>
          <div className="lar">
            <div className="bark">
              <h6>Website Design</h6>
            </div>
            <p>
              If you are a new business start up, Then you'll need your printed
              material like brochures, letterhead and cards
            </p>
            <Link onClick="window.location.reload();" to="/website">
            <button>Learn More</button>
            </Link>
            
          </div>
          <div className="lar">
            <div className="bor">
              <h6>Marketing</h6>
            </div>
            <p>
              If you are a new business start up, Then you'll need your printed
              material like brochures, letterhead and cards
            </p>
            <Link onClick="window.location.reload();" to="/mart">
            <button>Learn More</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moreservices;
