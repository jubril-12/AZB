import React from "react";
import "../Service style/serv.css";
import grid from "../assets/grid 1.png";
import grid2 from "../assets/grid 2.png";
import grid3 from "../assets/grid 3.jpeg";

const Servc = () => {
  return (
    <div>
      <div >
        <div id="lev">
          <h1>Our Services</h1>
          <p>
            Providing high levels of accuracy in design and user experience
            remains the top priority of our development team.
          </p>
        </div>
        <div className="car">
          <div className="pac">
            <h6>Logo Design</h6>
          </div>
          <div className="par">
            <h6>Website Design</h6>
          </div>
          <div className="pacr">
            <h6>Marketing</h6>
          </div>
        </div>
        <div className="lev">
          <div id="rac">
            <h1>Our Creative Services</h1>
            <p>
              We offer packages for both WordPress and Wix platforms, including
              functional websites with responsive design and content upload. Our
              branding bundle includes logo design, stationery designs, and
              social media kit, all with transparent and printable files.
              Additionally, we offer social media management packages to keep
              your online presence consistent and engaging. Let us help you make
              a lasting impression on the web and grow your business!
            </p>
          </div>
          <div id="desi">
            <h6>Logo Designs</h6>
            <img src={grid} alt="" />
          </div>
          <div id="desi">
            <h6>Website Design</h6>
            <img src={grid2} alt="" />
          </div>
          <div id="desi">
            <h6>Branding Bundle</h6>
            <img src={grid3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servc;
