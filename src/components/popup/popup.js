import React from 'react';
import styled from 'styled-components';
import * as colors from '../../assets/styles/variables';

const PopupBackground = styled.div`
display: ${props=>props.isOpen ? 'block' : 'none'};
width: 100%;
height: 100vh;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: ${colors.darkGrayRgba};
z-index: 2000;
`;

const PopupWrapper = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background-color: ${colors.white};
width: 40%;
padding: 3rem;
border: 3px solid ${colors.darkGray};
`;

const PopupHeader = styled.h1`
text-align: center;
font-size: 3rem;
margin: 2rem auto 5rem auto;
background-color: ${colors.lightGray2};
width: 40%;
padding: 3rem;
position: relative;

&::before{
width: 5rem;
height: 5rem;
content: '';
position: absolute;
display: block;
top: -1rem;
left: -1rem;
border-top: 3px solid ${colors.darkGray};
border-left: 3px solid ${colors.darkGray};
}

&::after{
width: 5rem;
height: 5rem;
content: '';
position: absolute;
display: block;
bottom: -1rem;
right: -1rem;
border-bottom: 3px solid ${colors.darkGray};
border-right: 3px solid ${colors.darkGray};
}
`;

const PopupExit = styled.button`
width: 3.5rem;
height: .5rem;
background-color: ${colors.darkGray};
position: absolute;
top: 1.5rem;
right: 1.5rem;
border: none;
transform: rotate(45deg) translate(1rem , 1rem);

&::after{
content: '';
display: block;
width: 3.5rem;
height: .5rem;
background-color: ${colors.darkGray};
position: absolute;
top: 1.5rem;
right: 1.5rem;
border: none;
transform: rotate(-90deg) translate(1.5rem, 1.5rem);
}
`;

const PopupContent = styled.p`
text-align: center;
font-size: 2rem;
width: 60%;
margin: 0 auto;
padding: 3rem 1rem;
`;

const Popup = ({isOpen, close}) => (
  <PopupBackground isOpen={isOpen} onClick={close}>
    <PopupWrapper>
      <PopupHeader>Wysłano!!!</PopupHeader>
      <PopupExit onClick={close}></PopupExit>
      <PopupContent>
        Dziękujemy za wysłanie wiadomości. Pozostaniemy w kontakcie
      </PopupContent>
    </PopupWrapper>
  </PopupBackground>
);

export default Popup;
