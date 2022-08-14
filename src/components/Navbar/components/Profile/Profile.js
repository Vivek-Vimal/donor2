import React from 'react'
import styled from 'styled-components'
import pro from './pro.png'
import { Link } from 'react-router-dom'

const StyledProfile = styled(Link)`
    position: absolute;
    right: 1rem;
    cursor: pointer;
`

const Profile = () => {
  return (
    <StyledProfile to='/profile'
    >
        <img src={pro} alt='' style={{height:'3rem',width:'3rem',borderRadius:'50%'}} />
    </StyledProfile>
  )
}

export default Profile