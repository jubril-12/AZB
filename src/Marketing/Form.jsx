import React from "react";
import "../Marketing/form.css";
import www1 from "../assets/7.png";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="inp">
      <div className="mail">
        <div className="sign">
          <img src={www1} alt="" />
          <h6>Marketing Professional</h6>
          <div className="clarl"></div>
          <p>Let take your company to the top</p>
        </div>
        <div className="si">
          <h2>Sign Up</h2>
          <form action="" className="up">
            <label htmlFor="firstname">First Name</label>
            <input id="fistname" type="text" />
            <label htmlFor="lastname"> Last Name</label>
            <input type="text" id="lastname" />
            <label htmlFor=""></label>
            <label htmlFor="email"> Email*</label>
            <input type="email" id="email" />
            <label htmlFor="company">Company</label>
            <input type="text" id="company" />
            <label htmlFor="message">Message</label>
            <input id="message" type="text" />
          </form>
          <Link className="onclic" onClick="window.location.reload();">
          <button >Submit</button>
        
          </Link>
          </div>
      </div>
      
    </div>
  );
};

export default Form;
