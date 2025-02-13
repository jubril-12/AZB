import React from "react";
import "../Company/fly.css";
import darn from "../assets/darn.png";
const Fly = () => {
  return (
    <div className="aqw">
      <div className="faze">
        <img src={darn} alt="" />
      </div>
      <div className="fly">
        <h3>Come Fly With Us</h3>
        <p>
          Stretch World Designs is a full-service creative studio focusing on
          conscious branding, marketing, content production, website design, and
          social change. We are seeking warm, enthusiastic, and ambitious
          Designers to support our growing team. In this role, you will be given
          the opportunity to gain first-hand experience in the exciting and
          fast-paced world of entrepreneurship. <br />
          <br /> If you are hardworking, professional, a kind communicator,
          detail-oriented, and have a strong interest in technical, visual
          design — we want to talk to you!
        </p>
      </div>
    </div>
  );
};

export default Fly;
