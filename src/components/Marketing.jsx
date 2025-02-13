import React from 'react'
import Mart from '../Marketing/Mart'
import Cards from '../Marketing/Cards'
import Form from '../Marketing/Form'
import Exclusive from '../Marketing/Exclusive'
import "../Marketing/exclusive.css"

const Marketing = () => {
  return (
      <div className='ing'>
      <Mart />
      <Cards />
      {/* <Form id="signup" /> */}
      <Exclusive/>
    </div>
  )
}

export default Marketing