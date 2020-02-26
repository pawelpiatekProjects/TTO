import React from 'react';
import styled from 'styled-components';
import Image from "gatsby-image"
import { graphql } from "gatsby"
import * as colors from '../assets/styles/variables';

const AboutPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 13rem);
  width: 55%;
  
    @media(max-width: 1200px){
width: 60%;
}

@media(max-width: 900px){
width: 100%;
}
`

const GatsbyImage = styled(Image)`
position: absolute !important;
top: 0;
right: 0;
height: 100vh;
width: 45%;

@media(max-width: 1200px){
width: 40%;
}

@media(max-width: 900px){
display: none;
}
`;

const AboutPageContent = styled.div`
width: 70%;
margin: 5rem auto;
`

const AboutPageHeader = styled.h1`
text-align: left;
font-size: 6rem;
position: relative;

  @media(max-width: 900px){
width: 60%;
margin: 20rem auto 10rem auto;
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

@media(max-width: 750px){
width: 80%;
font-size: 5rem;
}

@media(max-width: 450px){

font-size: 3.5rem;


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
width: 100%;
}


`;

const AboutPageText = styled.p`
margin: 4rem auto;
`;

const About = ({data}) =>(
  <>
  <AboutPageWrapper>
    <AboutPageContent>
    <AboutPageHeader>O mnie</AboutPageHeader>
    <AboutPageText>
      {data.allDatoCmsAbout.nodes[0].aboutContent}
    </AboutPageText>
      <AboutPageText>
        {data.allDatoCmsAbout.nodes[0].aboutContent2}
      </AboutPageText>
    </AboutPageContent>

  </AboutPageWrapper>
  <GatsbyImage fluid={data.file.childImageSharp.fluid}/>
  </>
);

export const query = graphql`
    {
        file(name:{eq:"about"}){
            childImageSharp{
                fluid{
                    ... GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        allDatoCmsAbout {
            nodes{
                aboutContent
                aboutContent2
            }
        }
    }

`;

export default About
