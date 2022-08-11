import React from 'react'
import Register1 from './Registeration1'
import Register2 from './Registration2/Registration2'
import Register3 from './Registration3/Registration3'
import Register4 from './Registration4'
import Register5 from './Registration5/Registration5'
import Register6 from './Registration6/Registration6'
import Register9 from './Registration9/Registration9'
import { useSelector } from 'react-redux'

const RegisterationHome = () => {

  let PathName = useSelector( (state) => state.path)

 // console.log(PathName)

  return (
  
    <>
      {
          PathName === 'Registration2' ? <Register2 /> :
          PathName === 'Registration3' ? <Register3 /> :
          PathName === 'Registration4' ? <Register4 /> :
          PathName === 'Registration5' ? <Register5 /> :
          PathName === 'Registration6' ? <Register6 /> :
          PathName === 'Registration7' ? <Register9 /> : 
          PathName === 'Back1' ? <Register1 /> :
          PathName === 'Back2' ? <Register2 /> :
          PathName === 'Back3' ? <Register3 /> :
          PathName === 'Back4' ? <Register4 /> :
          PathName === 'Back5' ? <Register5 /> :
          PathName === 'Back6' ? <Register6 /> :
          <Register1 />
      } 
    </>
  )
}

export default RegisterationHome