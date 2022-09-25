import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion'
//import './Css.css'
import { Button } from '../../../components/Navbar/Navbar';
import thank from './thank.svg'
import lappy from './lappy.png'
import { useDispatch } from 'react-redux';

const Sec = styled.section`
    min-height: 100vh;
    width: 100%;
    display: flex;
    // flex-direction: column;
       align-items: center;
       justify-content: center;
       background-color: rgba(249, 232, 202, 1);
       padding: 8rem 0 2rem 0;
    @media only screen and (max-width: 768px) {
        min-height: 100vh;
        width: 100%;
        flex-direction: column;
        justify-content: space-around;
      }
`;


const Width = styled.div`
      width: 1300px;
      display: flex;
     // flex-direction: column;
        align-items: center;
        justify-content: center;
    
    @media only screen and (max-width: 1400px) {
        width: 95%;
    }
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
    }
`

const Box = styled.div`
    display: flex;
    width: 95%;
    min-height: 30rem;

          border-radius: 1rem;
          flex-direction: column;
          align-items: center;
          justify-content: center;
    @media only screen and (max-width: 998px) {
        
      
       min-height: 30rem;
       align-items: center;
       justify-content: space-between;

    }
`

const Details = styled.div`
background: linear-gradient(180deg, rgba(2, 169, 92, 0.5) 0%, rgba(34, 170, 48, 0.5) 100%),
linear-gradient(0deg, #FFFFFF, #FFFFFF);
    padding: 3rem 2rem 2rem 2rem;
    border: 0.25rem solid #FFFFFF;
    border-radius: 1.25rem;
    margin: 0 1rem 4rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60rem;

    @media only screen and (max-width: 1180px) {
        width: 90%;
        margin: 0 0 2rem 0;
        padding: 3rem 0.5rem 2rem 0.5rem;
    } 


    @media only screen and (max-width: 768px) {
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    } 

`
const Man = styled.div`

    width: 20rem;
    height: 16rem;
  
`
const H = styled.p`

  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
 // margin: 2rem 0 0 0;
  line-height: 1.5;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 0.95rem;
    font-weight: bold;
  }
`;

const Register6 = () => {

    const dispatch = useDispatch ();

    return (
        <Sec>
            <Width>
                <Box 
                    
                >       

                    <Details>
                            
                            
                          
                        <Man>
                            <img src={lappy} alt='' style={{width:'100%',height:'100%'}} />
                        </Man>
                        <img src={thank} alt='' style={{width:'12rem',height:'8rem',margin:'1rem 0 0 0'}} />
                        <H>
                        You have successfully completed the registration process.
                        <div />
                        Please check your email. A verification email is sent to you. You can use DONOR platform for fundraising immediately after verification is complete.
                        </H>

                        <Button
                        onClick={() => dispatch({type:'PATHNAME7'}) }
                        style={{borderRadius:'0.75rem',width:'7rem',margin:'1rem 0 0 0'}}
                        >Ok
                        </Button>                   

                    </Details>

                   
                 
                </Box>
            </Width>
        </Sec>
    )
}

export default Register6
