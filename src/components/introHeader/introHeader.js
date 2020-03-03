import React from 'react';
import styled from 'styled-components';
import * as colors from "../../assets/styles/variables"

const IntroHeaderWrapper = styled.h1`
text-align: right;
font-size: 6rem;
position: relative;
  span{
  display: block;
  }
  
  @media(max-width: 1050px){
width: 60%;

text-align: center;
padding: 5rem;
background-color: ${colors.lightGray2};

&::before{
content: '';
display: block;
position: absolute;
width: 100%;
height: 100%;
border: 4px solid ${colors.darkGray};
top: -2rem;
left: 2rem;
}
}

@media(max-width: 700px){
width: 80%;
font-size: 5rem;
}

@media(max-width: 500px){

font-size: 4rem;


&::before{
content: '';
display: block;
position: absolute;
width: 100%;
height: 100%;
border: 4px solid ${colors.darkGray};
top: -1.5rem;
left: 1.5rem;
}
}

@media(max-width: 350px){
width: 90%;
font-size: 3rem;
padding: 3rem;

&::before{
content: '';
display: block;
position: absolute;
width: 100%;
height: 100%;
border: 4px solid ${colors.darkGray};
top: -1rem;
left: 1rem;
}
}
`;

const IntroHeader = ({children}) =>(
  <IntroHeaderWrapper>{children}</IntroHeaderWrapper>
);

export default IntroHeader;
