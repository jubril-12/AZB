import React from 'react'
import Homebanner from '../Homepage/Homebanner'
import Featured from '../Homepage/Featured'
import Moreservices from '../Homepage/Moreservices'
import Miniabout from '../Homepage/Miniabout'
import Build from '../Homepage/Build'
const Home = () => {
  return (
    <div>
      <Homebanner />
      <Featured />
      <Moreservices />
      <Miniabout />
      <Build/>
    </div>
  )
}

export default Home