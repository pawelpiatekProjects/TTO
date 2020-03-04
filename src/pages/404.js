import React from "react"
import styled from "styled-components"
import IntroHeader from "../components/introHeader/introHeader"
import * as colors from '../assets/styles/variables'

const NotFoundPageWrapper = styled.div`
margin-top: 10rem;
`

const IntroHeaderWrapper = styled.div`
  background-color: ${colors.lightGray2};
  width: 40%;
  margin: 5rem auto;
  padding: 3rem;
  position: relative;
  
  &::before{
  content: '';
  position: absolute;
  top: -1.5rem;
  left: -1.5rem;
  width: 10rem;
  height: 10rem;
  display: block;
  border-top: 6px solid ${colors.darkGray};
  border-left: 6px solid ${colors.darkGray};
  }
  
  &::after{
  content: '';
  position: absolute;
  bottom: -1.5rem;
  right: -1.5rem;
  width: 10rem;
  height: 10rem;
  display: block;
  border-bottom: 6px solid ${colors.darkGray};
  border-right: 6px solid ${colors.darkGray};
  }
  
  h1{
  text-align: center;
  font-size: 5rem;
  }
`;

const NotFoundPageContent = styled.p`
width: 40%;
margin: 3rem auto;
text-align: center;
`;


const NotFoundPage = () => (
  <NotFoundPageWrapper>
    <IntroHeaderWrapper>
      <IntroHeader>Chyba się zgubiłeś</IntroHeader>
    </IntroHeaderWrapper>
    <NotFoundPageContent>
      Niestety ta strona nie istnieje, spróbuj znaleźć to co chcesz gdzie indziej.

    </NotFoundPageContent>
  </NotFoundPageWrapper>
)

export default NotFoundPage
