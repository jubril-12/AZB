import React from "react";
import "../Marketing/card.css";
import { Link } from "react-router-dom";
const Cards = () => {
  return (
    <div className="whip">
      <div className="lka">
        <div className="drac">
          <img src="" alt="" />
          <h6>Design</h6>
          <p>
            We will help you build your brand with options available for
            marketing designs, from banner ads, emails, logos, flyers, and
            postcards.
          </p>
          <Link onClick="window.location.reload();" to="/cont">
            <button>Book Now</button>
            </Link>
        </div>
        <div className="drac">
          <img src="" alt="" />
          <h6>Social Media Posting</h6>
          <p>
            Stretch World Designs has social media experts ready to create
            interesting and appealing social media posts. Let us create and post
            to all your social media platforms.
          </p>
          <Link onClick="window.location.reload();" to="/cont">
            <button>Book Now</button>
            </Link>
        </div>
        <div className="drac">
          <img src="" alt="" />
          <h6>Email Marketing</h6>
          <p>
            We will create and manage your email marketing campaigns for you and
            effectively launch them to your designated database
          </p>
          <Link onClick="window.location.reload();" to="/cont">
            <button>Book Now</button>
            </Link>
        </div>
      </div>
      <div className="lka">
        <div className="drac">
          <img src="" alt="" />
          <h6>Content Creation</h6>
          <p>
            Our graphics and social media experts will create visually appealing
            content for your online presence and/or marketing collateral pieces
          </p>
          <Link onClick="window.location.reload();" to="/cont">
            <button>Book Now</button>
            </Link>
        </div>
        <div className="drac">
          <img src="" alt="" />
          <h6>Paid Advertising</h6>
          <p>
            Digital media banners will be made for your business, followed by
            launching paid ad campaigns .
          </p>
          <Link onClick="window.location.reload();" to="/cont">
            <button>Book Now</button>
            </Link>
        </div>
        <div className="drac">
          <img src="" alt="" />
          <h6>Website Design</h6>
          <p>
            We will create a website tailored to your business and needs. If you
            have a domain, we are able to link your new website.
          </p>
          <Link onClick="window.location.reload();" to="/cont">
            <button>Book Now</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
