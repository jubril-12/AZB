import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div  className="pa">
      <div id="foot">
        <div className="foot">
          <h6 className="name">
            AZB<span>GRAPHICS</span>LLC
          </h6>
          <p>
            We go above and beyond standard marketing by emphasizing connection
            building. Assisting our customers in fostering true connection and
            brand loyalty among their target audiences.
          </p>
          <img src="" alt="" />
          <p>2021 by AZB GRAPHICS LLC</p>
        </div>
        <div className="foot">
          <h6 className="nak">Contact</h6>
          <p>AZB GRAPHICS LLC</p>
          <p>3201 San Carlos Way B Sacramento, CA 95817</p>
          <p>abrown@azbgraphics.com</p>
          <p>Tel: <a className="number" href="tel:+1-916-282-7816"> (916)-282-7816</a></p>
        </div>
        <div className="foot">
          <h6 className="nak">Quick Menu</h6>
          <div className="darkx">
          <Link onClick="window.location.reload();" id="darkxx" to="/">
            <p>Home </p>
          </Link>
          <Link onClick="window.location.reload();" id="darkxx"  to="/ser">
            <p>Services</p>
          </Link>
          <Link onClick="window.location.reload();" id="darkxx"  to="/cont">
            <p>Contact</p>
          </Link>
          <Link onClick="window.location.reload();" id="darkxx"  to="/comp">
            <p>Company</p>
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
