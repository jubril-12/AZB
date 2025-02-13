import React from 'react'
import sixteen from "../assets/16.jpg"
import seventeen from "../assets/17.jpg"
import eighteen from "../assets/18.jpg"
import nineteen from "../assets/19.jpeg"
import one from "../assets/1.jpeg"
import eleven from "../assets/11.jpg"
import twelve from "../assets/12.jpg"
import "../Subpages/website.css"
const Website = () => {
  return (
      <div className='tived'>
          <div className='cunt'>
              <h1>Veiw Our Website Designs</h1>
              <p>AZB GRAPHICS LLC: Professional Websites, Logos, Social Media, and Branding Solutions.</p>
      </div>
      <div className='draxp'>
        <img src={sixteen} alt="" />
        <img src={seventeen} alt="" />
        <img src={eighteen} alt="" />
      </div>
      <div className='draxp'>
        <img src={nineteen} alt="" />
        <img src={one} alt="" />
        <img src={eleven} alt="" />
      </div>
      <div className='draxp'>
        <img src={twelve} alt="" />
      </div>
    </div>
  )
}

export default Website