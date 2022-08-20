import React from 'react'
import styled from 'styled-components';
import theme from 'styled-theming';
import Tilt from './pro.png';
import { H, T } from '../../Home/Page2/Page2'
import { Line, Circle } from 'rc-progress';

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

  export const bColor = theme("theme", {
    light: "linear-gradient(to right, #36d1dc, #5b86e5)",
    dark: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
  });  

const Card = (props) => {
    const Box= styled.div`
        
        width: 100%;   
       background-color: #FFFFFF;
        display: flex;
        //flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 2rem auto 0 auto;
        padding: 0.5rem 2rem;
        justify-self: center;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        border-radius: 0.75rem;

        @media only screen and (max-width: 900px) {
            width: 98%;
            flex-direction: column;
            padding: 2rem 1rem;
        }
    `;
    const Upper = styled.div`
        height: 18rem;
        width: 100%;
        `;

    const Lower = styled.div`
       
        padding: 0 1rem;
    `;

    const StyledLine = styled(Line)`
    width: 100%;
    margin: -1rem 0 1rem 0;
   

    @media only screen and (max-width: 510px) {
        width: 99%;
}
`
const Ts = styled(T)`
    font-size: 1rem;
    font-weight: bold;
    color: #000;
    margin: 0;
`
const Tc = styled(T)`
    font-size: 1rem;
    font-weight: bold;
    color: #000;
    margin: 0;
    padding: 0 2rem;

    @media only screen and (max-width: 900px) {
        padding: 0;
        text-align: center;
    }
    
`

const Mid = styled.div`
      
    @media only screen and (max-width: 900px) {
        margin: 2rem 0;
    }
`

    return (
        <Box>
            
            <div style={{margin:'0 0 0 0',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <img src={Tilt} alt='' style={{width:'5rem',height:'5rem',margin:' 0 0 0'}} />
                <div style={{margin:'0 0 0 1rem'}}>
                    <T style={{margin:' 0 0 0',color:"#000",fontSize:'1rem'}}>Jel Chibuzo</T>
                    <p style={{color:'grey'}}>random</p>
                </div>
            </div>
            <Mid>
                <Tc>
                It is with heavy heart that we announce the passing of our beloved cheer coach Lauren Dobosz
                </Tc>
            </Mid>
            <div style={{display:'flex',alignItems:'center',width:'17rem',justifyContent:'space-between',flexDirection:'column'}}>
                <Ts style={{margin:'0 0 0.5rem 0',fontSize:'1.25rem'}}>$ 4,80,00,362</Ts>
                <Line />
                <p style={{margin:'0.5rem 0 0.4rem 0'}}>Last donation 3m ago</p>
                <p>£83,003 raised</p>
            </div>

        </Box>
    )
}

export default Card
