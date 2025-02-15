import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Marketing/form.css";
import www1 from "../assets/7.png";
import { Link } from "react-router-dom";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_e2hli6s", "template_ta91pkj", form.current, {
        publicKey: "dqhXeFTON1mXbRpjH",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
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
          <form className="up" ref={form} onSubmit={sendEmail}>
            
            <input type="text" name="user_name" required placeholder="enter fullname" />
            <input type="email" name="user_email" required placeholder="enter email" />
           
            <input type="text" name="user_company" required placeholder="Enter company's name"/>
            
            <textarea name="message" placeholder="enter your message" />
            <button onClick="window.location.reload();" className="dalza" type="submit" value="Send">
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
