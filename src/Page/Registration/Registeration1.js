import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { FaAngleDown } from 'react-icons/fa';
import { BsBoxArrowDown } from 'react-icons/bs'

  const Sec = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
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

const Registration = styled.div`
  width: 1200px;
  display: flex;
  border-radius: 1.75rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;

  @media only screen and (max-width: 1300px) {
    width: 98%;
    
  }
  @media only screen and (max-width: 1100px) {
    
    display: grid;
    
      grid-template-columns: repeat(2, minmax(50%, 1fr));
      place-items: center;
    
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const T = styled.p`
    color: #000;
    font-weight: normal;
    font-size: 1.5rem;
    margin: 1rem 0 -1rem 2rem; 
  
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
       
      }
`;

const Line = styled.div`
     height: 3rem;
     width: 1px;
     background: rgba(0,0,0,0.3);
     margin: 0 2rem 0 0;
     display: block;
      @media only screen and (max-width: 1100px) {
        display: none;
      }
`;

const Button = styled.button`
  background-color: rgba(2, 169, 92, 1);
  border: none;
  border-radius: 0 1.75rem 1.75rem 0;
  padding: 0 1.5rem;
  color: #FFF;
  font-size: 1.2rem;
  height: 8rem;
  width: 15rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

 
  @media only screen and (max-width: 1100px) {
    height: 4rem;
   
  }

  @media only screen and (max-width: 768px) {
    height: 4rem;
    width: 100%;
    border-radius: 0 0 0.5rem 0.5rem;
  }
`
const Gradient = styled.div`
    
background: linear-gradient(180deg, rgba(2, 169, 92, 0.5) 0%, rgba(34, 170, 48, 0.5) 100%);
  border-radius: 2rem;
  padding:3rem;
  width: 100%;

    @media only screen and (max-width: 768px) {
      margin: 2rem 0 3rem 0;
      padding: 3rem 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
`
const Width = styled.div`
      width: 1400px;
      display: flex;
      flex-direction: column;
        align-items: center;
        justify-content: space-between;
    
    @media only screen and (max-width: 1400px) {
        width: 95%;
    }
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
    }
`
const Margin = styled.div`
@media only screen and (max-width: 1100px) {
  margin: 0 0 1rem 0;
}
@media only screen and (max-width: 768px) {
  margin: 1rem 0;
}
`
const TH = styled.p`
    color: #FFF;
    font-weight: normal;
    font-size: 2rem;
    text-align: center; 
    margin: 2rem 1rem;
  
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.25rem;
       
      }
`; 


const Register1 = () => {
  
  const dispatch = useDispatch ();

    return (
        <Sec id="">
          <Width>
            <Gradient>
              <TH>Registration is required to start a fundraise</TH>
            <Registration>
              <div>
                <T>Registering for</T>
                <div class="dropdown">
                  <button class="dropbtn">Select Option <FaAngleDown style={{fontSize:'1.8rem',color:'grey'}} /> </button>
                  <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
              </div>
              <div style={{display:'flex',alignItems:'flex-end'}}>
                <Line />
                <div>
                  <p style={{fontSize:'1.2rem',margin:'0 0 0.5rem 0'}}>Name</p>
                  <input type="email" placeholder="Enter Name"  className="input" style={{height:"2rem",width:"10rem"}} />
                </div>
              </div>
              <Margin style={{display:'flex',alignItems:'flex-end'}}>
                <Line />
                <div style={{display:'flex',alignItems:'center'}}>
                  <div class="dropdown" style={{width:'4rem',margin:'0',padding:'0',margin:'0 1rem 0 0'}}>
                    <div style={{display:'flex',alignItems:'center'}}>
                      <p style={{fontSize:'1.2rem'}}>+1</p>
                      <BsBoxArrowDown style={{fontSize:'1.9rem',color:'grey',margin:'0 0 0 0.5rem'}} />
                    </div> 
                    <div class="dropdown-content">
                      <a href="#">+91 | IND</a>
                      <a href="#">+22 | USA</a>
                      <a href="#">+88 | AUS</a>
                    </div>
                  </div>
                  <div>
                    <p style={{fontSize:'1.2rem',margin:'0 0 0.5rem 0'}}>Mobile Number</p>
                    <input type="email" placeholder="Enter Number"  className="input" style={{height:"2rem",width:"10rem",margin:'0',padding:'0'}} />
                  </div>
                </div>
              </Margin>
              <Button
                onClick={() => {dispatch({type:'PATHNAME1'})}}
              >
                REGISTER
              </Button>
            </Registration>
            </Gradient>
            {/* <div style={{width:"100%",margin:'1rem 0 0 0'}}>
              <Tp>By clicking register free, I agree to the T&C and Privacy Policy</Tp>
            </div> */}
          </Width>
        </Sec>
    )
}

export default Register1
