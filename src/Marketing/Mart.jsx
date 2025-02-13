import React from "react";
import "../Marketing/mart.css";
import fly from "../assets/fly.png";
import { Link } from "react-router-dom";
const Mart = () => {
  return (
    <div id="od">
      <div className="shant">
        <h1>MARKETING SERVICES</h1>
      </div>
      <div className="bert">
        <div className="mart">
          <h4>Starter Parkage</h4>
          <p>
            Our beginner plan, which covers account setup on all platforms and
            basic content, is ideal for new businesses or entrepreneurs who need
            help building up their businesses.
          </p>
        <Link onClick="window.location.reload();" to="/cont">
            <button>Sign up</button>
          </Link>
          
        </div>
        <div className="mart">
          <h4>Silver Parkage</h4>
          <p>
            Select three monthly services from a range of marketing offerings,
            such as farming services, graphic design, photo content, social
            media, email marketing, and direct mail.
          </p>
          <Link onClick="window.location.reload();" to="/cont">
            <button>Sign up</button>
          </Link>
        </div>
        <div className="mart">
          <h4>Gold Parkage</h4>
          <p>
            Choose five marketing services from a range of offerings, such as
            direct mail, social media, email marketing, farming services,
            graphic design, and photo content.
          </p>
          <Link onClick="window.location.reload();" to="/cont">
            <button>Sign up</button>
          </Link>
        </div>
      </div>
      <div className="select">
        <div className="selec">
          <h1>Pick Your Services</h1>
          <p>
            Select one of the specified monthly services from the list of
            choices below. You will receive three services per month with our
            Silver Package, and you can select five services with our Gold
            Package. Feel free to change these from month to month as necessary
            to help your business grow.
          </p>
              </div>
              <div>
                <img src={fly} alt="" />
              </div>
      </div>
    </div>
  );
};

export default Mart;
