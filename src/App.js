import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomeDefault from './Page/Home/Home'
import Page3 from './Page/Page3/Page3'
import Page3a from './Page/Page3a/Page3a'
import Page5 from './Page/Page5/Page5'
import Footer from './Page/Foot/Footer'
import Fourm from './Page/Registration/Fourm'
import { Routes, Route } from 'react-router-dom'
import Page1 from './Page/HowItWork/Page1/Page1'
import Page2H from './Page/HowItWork/Page2/Page2'
import Page3H from './Page/HowItWork/Page3/Page3W'
import Page4H from './Page/HowItWork/Page4/Page4H'
import RegisterationHome from './Page/Registration/RegisterationHome'
import { useSelector } from 'react-redux'

const App = () => {

  console.log(useSelector( (state) => state.path ) )

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomeDefault />} />

          <Route path='/campaigns' element={ <Page5 />} />
          
          <Route path='/register' element={ <RegisterationHome /> } />
        
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
