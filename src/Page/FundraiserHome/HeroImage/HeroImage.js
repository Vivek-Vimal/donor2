import React,{ useState, useEffect} from 'react'
import styled from 'styled-components'
import './Bg.css'
import { motion } from 'framer-motion'
import img from './bg.png'
import { useSelector, useDispatch } from "react-redux";
import { BsBoxArrowUp } from 'react-icons/bs';
import { Link, animateScroll as scroll } from "react-scroll";
import { useWallet } from 'use-wallet'

const HomePage = styled.section`
  display: flex;
  //flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100%;
  width: 100%;
  padding: 5rem 0 0 0;

 background-color: rgba(249, 232, 202, 1);

@media only screen and (max-width: 768px) {
 
    width: 100%;
   
    background-size: auto 100%;
    flex-direction: column;
}`

const Width = styled.div`
      width: 1300px;
      height: 28rem;
      display: flex;
     margin: 3rem 0 0 0;
        align-items: center;
        justify-content: space-between;
        background-color: #98C87D;
        background-image: url(${img});
        background-size: 100% 100%;
       // background-position: right center;
        background-repeat: no-repeat;
  
    @media only screen and (max-width: 1400px) {
        width: 95%;
        
    }
    @media only screen and (max-width: 1100px) {
      //   flex-direction: column;
       background-size: 40rem 25rem;
       height: 25rem;
       justify-content: center;
    }

    @media only screen and (max-width: 510px) {
      width: 98%;
      //margin: 4rem  0 0 0;
      background-position: center center;
      background-size: auto auto;
  }
`

const Left = styled(motion.div)`
        width: 55%;
     // background: red;

          @media only screen and (max-width: 1100px) {
            width: 50%;
        }
        @media only screen and (max-width: 998px) {
            width: 85%;
        }

    @media only screen and (max-width: 768px) {
     
        width: 85%;
      
       
      }
`;

const Ht = styled.h1`
    color: #FFF;
    font-size: 4rem;
    margin-bottom: 2rem;
    text-align: left;
    //font-family: 'PT Serif', serif !important;
    line-height: 1.15;
    margin: 0 0 0 2rem;

    @media only screen and (max-width: 1300px) {
      font-size: 3.5rem;
    }

    @media only screen and (max-width: 1300px) {
      font-size: 3rem;
    }

    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 2.5rem;
        font-weight: bold;
      }
`;


const ShowButton = styled(Link)`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background-color: rgba(2, 169, 92, 1); //
    color: #FFF ;
    font-weight: bold;
    cursor: pointer;
    position: fixed;
    height: 4rem;
    width: 3rem;
    border-radius: 0.5rem;
    transition:  0.5s linear;
    right: 3rem ;
    bottom: 10rem;
    display: grid;
    place-items: center;
    z-index: 7;
    @media only screen and (max-width: 768px) {
      right: 2rem ;
    bottom: 5rem;
    }
    
`

const HeroImgae = () => {

    
    const dispatch = useDispatch();
    const wallet = useWallet();
    
    const [ showButton, setShowButton ] = useState(false)

    const showButtonTop = () => {
      // console.log(window.scrollY)
      if (window.scrollY >= 600) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
  
    useEffect(() => {
      showButtonTop()
      // adding the event when scroll change background
      window.addEventListener("scroll", showButtonTop)
    })  


    return (
        <HomePage id="home">

          {/* <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',backgroundColor:'#98C87D'}}> */}
          <Width>
              <Left>
                <Ht>Your support is highly  <span style={{color:'rgba(2, 169, 92, 1)'}}>appreciated</span> </Ht>
              </Left>

          </Width>
           

          { showButton ? 
          
            <ShowButton
              type="button"
              to="home" spy={true} smooth={true}
            >
              <BsBoxArrowUp size="2rem"/>
            </ShowButton> :
            
            null
          }
            
            
        </HomePage>
    )
}

export default HeroImgae
