import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomeDefault from './Page/Home/Home'
import Fundraiser from './Page/Campaing/Fundraiser'
import Footer from './Page/Foot/Footer'
import { Routes, Route } from 'react-router-dom'
import RegisterationHome from './Page/Registration/RegisterationHome'
import Work from './Page/HowItWork/Work'
import FundraiseHome from './Page/Fundraise/FundraiseHome'
import Profile1 from './Page/Profile/Profile1'

const App = () => {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomeDefault />} />
          <Route path='/fundraiser' element={ <Fundraiser />} />
          <Route path='/fundraise' element={ <FundraiseHome /> } />
          <Route path='/docs' element={<RegisterationHome /> } />
          <Route path='/work' element={<Work />} />
          <Route path='/profile' element={<Profile1 />} />
        </Routes>
      <Footer />
   </>
  )
}

export default App
