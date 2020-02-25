import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
width: 60%;
height: 5rem;
`;

const FooterContent = styled.p`
text-align: center;
font-size: 1.4rem;
`;

const Footer = () =>(
  <FooterWrapper>
    <FooterContent>Wszelkie prawa zastrzeżone</FooterContent>
  </FooterWrapper>
);

export default Footer;
