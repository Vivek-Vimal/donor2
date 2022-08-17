import React from 'react'
import styled from 'styled-components'
import { Line } from 'rc-progress'
import Card from './Card'

const StyledRaiser = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
   // justify-content: center;
    flex-direction: column;
    height: 100%;
`

const Head = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0 0 0;
`
const T = styled.p``

const CardContainer = styled.div``


const Raiser = () => {
  return (
    <StyledRaiser>
        <Head>
            <T>Name</T>
            <T>About</T>
            <T>Donor</T>
        </Head>
        <CardContainer>
            <Card />
            <Card />
            <Card />
            <Card />
        </CardContainer>
    </StyledRaiser>
  )
}

export default Raiser