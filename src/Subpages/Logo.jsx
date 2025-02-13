import React from 'react'
import twentythree from "../assets/23.jpg"
import twentyfour from "../assets/24.jpeg"
import twentyfive from "../assets/25.png"
import twentysix from "../assets/26.jpeg"
import twentyseven from "../assets/27.jpeg"
import twentyeight from "../assets/28.png"
import twentynine from "../assets/29.jpeg"
import eightt from "../assets/8.jpeg"
import "../Subpages/website.css"

const Logo = () => {
  return (
      <div className='tived'>
                <div className='cunt'>
                    <h1>Veiw Our Logo Designs</h1>
                    <p>AZB GRAPHICS LLC: Professional Websites, Logos, Social Media, and Branding Solutions.</p>
            </div>
            <div className='draxp'>
              <img src={twentythree} alt="" />
              <img src={twentyfour} alt="" />
              <img src={twentyfive} alt="" />
            </div>
            <div className='draxp'>
              <img src={twentysix} alt="" />
              <img src={twentyseven} alt="" />
              <img src={twentyeight} alt="" />
            </div>
            <div className='draxp'>
              <img src={twentynine} alt="" />
              <img src={eightt} alt="" />
            </div>
          </div>
  )
}

export default Logo