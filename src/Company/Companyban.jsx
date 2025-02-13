import React from "react";
import "../Company/companyban.css";
import www from "../assets/www1.jpeg"

const Companyban = () => {
  return (
    <div className="yap">
      <div className="app">
        <h1>Company</h1>
        <p>
          We design websites and applications that are suited to your company's,
          industry's, and, of course, your consumers' demands.
        </p>
      </div>
      <div className="pow">
        <div id="palk">
          <h2>What We Do</h2>
          <p>
            We are a graphic design firm that is enthusiastic about providing
            exceptional outcomes and is devoted to doing so. We take pleasure in
            our excellent communication abilities and strive to go above and
            beyond for our clients. <br /> <br />We started operations in Sacramento in
            2016, and we know that delivering unique online experiences is the
            greatest approach to attract and keep clients. <br /> <br />We understand that
            the internet world is always changing, which is why we take the
            effort to stay up to date on the newest trends and technology.
          </p>
        </div>
        <div id="palk">
          <img src={www} alt="" />
        </div>
        <div id="palk">
          <h2>Our Vision</h2>
          <p>
            We attentively listen to your needs and then develop a website or
            app that excels in areas like branding, design, and overall user
            experience. All of the websites and applications we design are fully
            customizable and mobile-friendly. This allows our clients to reach
            out to a larger audience. <br /> <br />We follow a straightforward and open
            method, so you always know where your project stands. Our
            customer-centric strategy guarantees that we focus our efforts on
            developing unique websites and applications that achieve the
            intended results, whether it's generating leads or increasing
            revenue.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Companyban;
