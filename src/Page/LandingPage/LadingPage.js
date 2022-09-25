import React from 'react'
import FrontPage from './FrontPage/FrontPage'
import Different from './Different/Different'
import BlockChain from './BlockChain/BlockChain'
import FundraiseCard from './FundraiseCard/FundraiseCard'
import DonateCard from './DonateCard/DonateCard'
import Community from './Community/Community'
import Feature from './Feature/Feature'

const LadingPage = () => {
  return (
    <>
      <FrontPage />
      <BlockChain />
      <FundraiseCard />
      <Different />
      <DonateCard />
      <Community />
      <Feature />
    </>
  )
}

export default LadingPage