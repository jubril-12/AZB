import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Contact from './components/Contact'
import Services from './components/Services'
import Company from './components/Company'
import Footer from "./components/Footer"
import Marketing from './components/Marketing'
import Ourworks from './Subpages/Ourworks'
import Branding from './Subpages/Branding'
import Website from './Subpages/Website'
import Logo from './Subpages/Logo'

function App() {
  

  return (
    <div>
      <Router>
        <Header/>
          <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/ser" element={<Services/>} />
          <Route path="/comp" element={<Company />} />
          <Route path='/mart' element={<Marketing />} />
          <Route path='/work' element={<Ourworks />} />
          <Route path='/branding' element={<Branding />} />
          <Route path='website' element={<Website />} />
          <Route path='/logo' element={<Logo />} />
          <Route path='/cont' element={ <Contact/>} />
        </Routes>
        < Footer id="contact"/>
      </Router>
    </div>
  )
}

export default App
