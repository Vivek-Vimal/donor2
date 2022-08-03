import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomeDefault from './Page/Home/Home'
import Page3 from './Page/Page3/Page3'
import Page3a from './Page/Page3a/Page3a'
import Page5 from './Page/Page5/Page5'
import Page6 from './Page/Page6/Page6'
import Page6a from './Page/Page6a/Page6a'
import Page6b from './Page/Page6b/Page6b'
import Footer from './Page/Foot/Footer'
import Fourm from './Page/Fourm/Fourm'
import { Routes, Route } from 'react-router-dom'
import FourmPage1 from './Page/Fourm/FourmPage1'
import FourmPage2 from './Page/Fourm/FourmPage2'
import FourmPage3 from './Page/Fourm/FourmPage3'
import FourmPage4 from './Page/Fourm/FourmPage4'
import Page1 from './Page/HowItWork/Page1/Page1'
import Page2H from './Page/HowItWork/Page2/Page2'
import Page3H from './Page/HowItWork/Page3/Page3W'
import Page4H from './Page/HowItWork/Page4/Page4H'
import Register from './Page/Fourm/Register'
import Page6aa from './Page/Page6aa/Page6aa'

const App = () => {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomeDefault />} />
          
          <Route path='/donate' element={
            <>
              <Register />
            <Page6a />
            <Page6aa />
            <Page6b />
            <Fourm /> 
            <FourmPage1 />
            <FourmPage2 />
            <FourmPage3 />
            <FourmPage4 />
            </>
          } />
          <Route path='/docs' element={<>
            <Page5 />
            
          </>} />
          <Route path='/fund' element={<Page3 big />} />
          {/* <Route path='/docs' element={<Page3a />} /> */}
          <Route path='/work' element={
                <>
                    <Page1 />
                    <Page2H />
                    <Page3H />
                    <Page4H />
                </>
        } />
        </Routes>
      <Footer />
   </>
  )
}

export default App
