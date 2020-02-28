import React from 'react';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
    font-size: 62.5%;
    
    @media(max-width: 1200px){
    font-size: 50%;
    }
    
    //@media(max-width: 900px){
    //font-size: 45%;
    //}
    //
    //@media(max-width: 700px){
    //font-size: 35%;
    //}
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 4rem 6.5rem 0;
    font-family: 'Montserrat';
    
    @media(max-width: 550px){
    padding: 8rem 0;
    }
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
  }
  
  p {
    font-size: 16px;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;

