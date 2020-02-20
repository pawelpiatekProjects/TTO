import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: 60%;
height: 50px;
`;

const FooterContent = styled.p`
text-align: center;
`;

const Footer = () =>(
  <FooterWrapper>
    <FooterContent>Wszelkie prawa zastrzeżone</FooterContent>
  </FooterWrapper>
);

export default Footer;
