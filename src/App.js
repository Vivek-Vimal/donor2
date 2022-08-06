import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomeDefault from './Page/Home/Home'
import Page3 from './Page/Page3/Page3'
import Page5 from './Page/Page5/Page5'
import Footer from './Page/Foot/Footer'
import { Routes, Route } from 'react-router-dom'
import RegisterationHome from './Page/Registration/RegisterationHome'
import Work from './Page/HowItWork/Work'

const App = () => {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomeDefault />} />
          <Route path='/campaigns' element={ <Page5 />} />
          <Route path='/register' element={ <RegisterationHome /> } />
          <Route path='/fund' element={<Page3 big />} />
          <Route path='/work' element={<Work />} />
        </Routes>
      <Footer />
   </>
  )
}

export default App
