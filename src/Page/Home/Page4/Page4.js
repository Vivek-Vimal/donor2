import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import theme from 'styled-theming';
import { H, T } from '../Page2/Page2'
import { FactionData } from '../../config/config'
import FactionCard from '../../../components/card/FactionCard'
import bg from './CATEGORY.png'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import { TiArrowLeftOutline, TiArrowRightOutline } from 'react-icons/ti'

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });

const Width = styled.div`
  width: 1300px;
  display: flex;
  flex-direction: column;
  padding: 2rem 0 0 0;
     
    @media only screen and (max-width: 1300px) {
        width: 98%;
    }
  
`;

const StyleCard = styled.div`
    width: 70%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
 
      @media only screen and (max-width: 1600px) {
        width: 98%;
      }

      @media only screen and (max-width: 510px) {
    
        width: 100%;
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
      }
`

const Heading = styled.div`
    color: rgba(2, 169, 92, 1);
    font-size: 2.5rem;
      margin: 0.5rem 0 2rem 0;
      font-weight: bold;
     text-align: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
      
      }
`;

const Background = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;

      @media only screen and (max-width: 1200px) {
        flex-direction: column;
     
      }
`;

const Category = styled.div`
    background-color: #082F37;
    display: flex;
    flex-direction: column;
    justify-content: center;
    //align-items: center;
    width: 25rem;
    height: 100%;
    padding: 2rem 1rem;
    margin: 2rem 0 0 0;
    border-radius: 0 1.2rem 1.2rem 0;

    @media only screen and (max-width: 510px) {
      width: 95%;
    }
`;

const Line = styled.div`
    background: rgba(196, 196, 196, 0.3);
    width: 100%;
    height: 1px;
    margin: 1rem 0 0 0;
    @media only screen and (max-width: 1350px) {
      //width: 20rem;
    }
`

const resposive =  {
  0:{
    items: 1,
  },
  650: {
      items: 2,
  },
  1335:{
      items: 3,
  },
 
}

const HeadingContainer = styled.div`
  width: 14rem;
 // background: red;
`
const Head = styled.div`
    color: #fff;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;
    // width: 10rem;
    //  background: red;
    background-image: url(${bg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
       
      }
`;

const Page4 = (props) => {

  const Sec = styled.section`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(249, 232, 202, 1);
    // background-image: url(${bg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    flex-direction: column;
    padding: ${props.big ? '6rem 0 10rem 0' : '2rem 0'};

    @media only screen and (max-width: 998px) {
        min-height: 100vh;
        width: 100%;
        padding: 2rem 0;
        flex-direction: column;
        background-size: auto 100%;
      }
`;

    return (
        <Sec id="fund">
          <Width>
            <Heading>
              You can search by category or <div/>donate directly to a fundraiser of your option
            </Heading>
            
          </Width>

          <Background>

            <Category>
              <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
              
                <HeadingContainer>
                  <Head>
                    CATEGORY
                  </Head> 
                  <Line /> 
                
                </HeadingContainer>

              </div>

              <T style={{color:'#02A95C',margin:'1rem 0 0 1rem'}}>All Categories</T>

              <T style={{color:'#FFF',margin:'0 0 0 1rem'}}>Animals</T>
              <T style={{color:'#FFF',margin:'0 0 0 1rem'}}>Business</T>
              <T style={{color:'#FFF',margin:'0 0 0 1rem'}}>Community</T>
              <T style={{color:'#FFF',margin:'0 0 0 1rem'}}>Education</T>
              <T style={{color:'#FFF',margin:'0 0 0 1rem'}}>Faith</T>
              <T style={{color:'#FFF',margin:'0 0 0 1rem'}}>Family</T>
              <T style={{color:'#FFF',margin:'0 0 0 1rem'}}>Medical</T>
              <T style={{color:'#FFF',margin:'0 0 0 1rem'}}>Other</T>
              <T style={{color:'#FFF',margin:'0 0 0 1rem'}}>Relief</T>
              <T style={{color:'#FFF',margin:'0 0 0 1rem'}}>Works</T>
              <T style={{color:'#FFF',margin:'0 0 0 1rem'}}>Sports</T>
              <T style={{color:'#FFF',margin:'0 0 0 1rem'}}>Animals</T>
              <T style={{color:'#FFF',margin:'0 0 0 1rem'}}>Travel</T>
              <T style={{color:'#FFF',margin:'0 0 0 1rem'}}>Animals</T>
                        
            </Category>

            <StyleCard>

          

                {FactionData?.map(e => (

                    <FactionCard img={e.img} name={e.name} desc={e.desc}/>

                ))}

            

            </StyleCard>

          </Background>

        </Sec>
    )
}

export default Page4
