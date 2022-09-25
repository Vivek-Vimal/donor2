import React from 'react'
import styled from 'styled-components';
import vault from './vault.jpg'

const VaultCard = (props) => {
    const Box= styled.div`
        display: flex;
        width: 50rem; 
        align-items: center;
        justify-content: space-between;
        margin: 2rem auto 0 auto;
        justify-self: center;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        border-radius: 0.75rem;

        @media only screen and (max-width: 888px) {
            flex-direction: column-reverse;
            width: 98%;
        }

        @media only screen and (max-width: 768px) {
            width: 98%;
        }
    `;
    const Upper = styled.div`
        height: 25rem;
        width: 34rem;
       display: block;
       @media only screen and (max-width: 888px) {
            display: none;
    }
        `;
    
    const UpperM = styled.div`
        
       display: none;
       @media only screen and (max-width: 888px) {
        height: 25rem;
        width: 100%;
        display: block;
    }
        `;

    const Lower = styled.div`
        padding: 0 2rem;

        @media only screen and (max-width: 768px) {
            padding: 0 1rem;
            
        }

    `;

    const H = styled.h1`
        color: #000;
        font-size: 2rem;
        font-weight: bold;
        line-height: 1.45;
        @media only screen and (max-width: 888px) {
            font-size: 1.5rem;
        }
`;
    const Div = styled.div`
        font-size: 2.2rem;
        @media only screen and (max-width: 888px) {
            font-size: 1.75rem;
        }
    `

    return (
        <Box>
            <Lower>
                <div style={{display:'grid',placeItems:'center',margin:'2rem 0 2.5rem 0'}}>
                    <H>
                        AUTO COMPOUNDING <span style={{color:'rgb(188, 219, 46)'}}>$DONOR</span> VAULTS 
                        <Div style={{color:'rgb(2, 169, 92)'}}>OPENING SOON!!  </Div>          
                    </H>
                   
                </div>
            </Lower>
            <Upper>
                <img src={vault} alt="" style={{width:"100%",height:"100%",borderRadius:'0 0.75rem 0.75rem 0'}} />
            </Upper>
            <UpperM>
                <img src={vault} alt="" style={{width:"100%",height:"100%",borderRadius:' 0.75rem 0.75rem 0 0'}} />
            </UpperM>
        </Box>
    )
}

export default VaultCard
