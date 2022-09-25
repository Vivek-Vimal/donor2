import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import FundraiserHome from './Page/FundraiserHome/FundraiserHome'
import Footer from './Page/Foot/Footer'
import { Routes, Route } from 'react-router-dom'
import RegisterationHome from './Page/Registration/RegisterationHome'
import Work from './Page/HowItWork/Work'
import Profile1 from './Page/Profile/Profile1'
import Vault from './Page/Vault/Vault'
import Payment from './Page/Campaing/Payment/Payment'
import Page5 from './Page/Campaing/Page5'
import LadingPage from './Page/LandingPage/LadingPage'
import ComingSoon from './Page/ComingSoon/ComingSoon'

const App = () => {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={ <LadingPage/>  } />
          <Route path='/fundraiser' element={ <FundraiserHome />} />
          <Route path='/fundraise' element={ <RegisterationHome /> } />
          <Route path='/work' element={<Work />} />
          <Route path='/profile' element={<Profile1 />} />
          <Route path='/vault' element={<Vault />} />
          <Route path='/payment' element = {<Payment />} />
          <Route path='/fund' element ={ <Page5 /> } />
          <Route path='/docs' element= { <ComingSoon/> } />
        </Routes>
      <Footer />
   </>
  )
}

export default App
