import React from 'react'
import styled from 'styled-components'
import bg from './News.png'
import { H,T } from '../Different/Different'
import { CardData } from '../../config/config'
import TeamCard from '../../../components/card/TeamCard'


const Sec = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 100vh;
    width: 100%;
    background-color: rgba(249, 232, 202, 1); 
    padding: 5rem 0.5rem ;
    @media only screen and (max-width: 768px) {
        min-height: 60rem;
        width: 100%;
        padding: 5rem 0.5rem ;
    }
`
const GridAuto = styled.div`
    display: grid;
    width: 1300px;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));


@media only screen and (max-width: 1300px) {
  width: 90%;
}
@media only screen and (max-width: 768px) {
  width: 95%;
  grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));
}
@media only screen and (max-width: 330px) {
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));
 
}
`

const Hs = styled(H)`
   text-align: center;
    font-size: 2rem;
    margin: 1.2rem 0;
color: #000000;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
      }
`;

const Heading = styled.div`
    color: rgba(2, 169, 92, 1);
    font-size: 1.4rem;
    font-weight: bold;
      text-align: left;
    background-image: url(${bg});
    background-size: 50% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
       
      }
`;

const Feature = () => {
    return (
        <Sec id="roadmap">
            
            <Heading>
            Where you can help
                    </Heading>
                    <Hs>
                      Featured Specials
                    </Hs>

            <GridAuto>

              {CardData?.map(e => (
                          
                <TeamCard img={e.img}/>
                          
              ))}
            
            </GridAuto>

        </Sec>
    )
}

export default Feature
