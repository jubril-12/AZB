import React from "react";
import "../styles/featured.css";
import logo from "../assets/7.png"
import { Link } from "react-router-dom";
import stuff from "../assets/aws.jpg";
const Featured = () => {
  return (
    <div id="fea">
      <div className="mob">
        <div className="mobs">
          <img src={logo} alt="logo" />

          <h5>OUR WEB DESIGNS ARE STUNNING AND CREATIVE</h5>
          <p>
            We analyze your business to design a website which increases
            conversion rates and produces positive results
          </p>
        </div>
      </div>
      <div className="lard">
        <img src={stuff} alt="" />
        <h4>Stretch World Designs</h4>
        <p>
          Take your brand to new heights with our Branding Package! Stand out
          from the competition and attract your ideal audience. Ready to make
          your mark? <br />
          <Link id="cli">
            <span>(916) 282-7816</span>
          </Link>
        </p>
        <Link >
          <button onClick="window.location.reload();">Learn More</button>
        </Link>
        
      </div>
    </div>
  );
};

export default Featured;
