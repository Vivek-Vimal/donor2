import React from 'react'
import Register1 from './Registeration1'
import Register2 from './Registration2/Registration2'
import Register3 from './Registration3/Registration3'
import Register4 from './Registration4'
import Register5 from './Registration5/Registration5'
import Register6 from './Registration6/Registration6'
import Register9 from './Registration9/Registration9'
import Fourm from './Fourm'
import FourmPage1 from './FourmPage1'
import FourmPage2 from './FourmPage2'
import FourmPage3 from './FourmPage3'
import FourmPage4 from './FourmPage4'
import { useSelector } from 'react-redux'

const RegisterationHome = () => {

  let PathName = useSelector( (state) => state.path)

  return (
  
    <>
      <Register1 />
      {
        PathName === 'Registration3' ? 
          <Register3 /> : PathName === 'Registration4' ? <Register4 /> :
          PathName === 'Registration5' ? <Register5 /> :
          PathName === 'Registration6' ? <Register6 /> :
          PathName === 'Registration7' ? <Register9 /> : <Register2 />
      } 
    </>
  )
}

export default RegisterationHome