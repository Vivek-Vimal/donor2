import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomeDefault from './Page/Home/Home'
import Page3 from './Page/Page3/Page3'
import Page5 from './Page/Campaing/Page5'
import Footer from './Page/Foot/Footer'
import { Routes, Route } from 'react-router-dom'
import RegisterationHome from './Page/Registration/RegisterationHome'
import Work from './Page/HowItWork/Work'
import FundraiseHome from './Page/Fundraise/FundraiseHome'

const App = () => {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomeDefault />} />
          <Route path='/campaigns' element={ <Page5 />} />
          <Route path='/fundraise' element={ <FundraiseHome /> } />
          <Route path='/docs' element={<RegisterationHome /> } />
          <Route path='/work' element={<Work />} />
        </Routes>
      <Footer />
   </>
  )
}

export default App
