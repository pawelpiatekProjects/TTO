import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`


`;

const FooterContent = styled.p`
text-align: center;
font-size: 1.4rem;
width: 100%;
margin: 0 auto;
text-align: center;

`;

const Footer = () =>(
  <FooterWrapper>
    <FooterContent>Wszelkie prawa zastrzeżone</FooterContent>
  </FooterWrapper>
);

export default Footer;
