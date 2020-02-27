import React from 'react';
import styled from 'styled-components';
import Image from "gatsby-image"
import { graphql } from "gatsby"
import * as colors from '../assets/styles/variables';
import IntroHeader from '../components/introHeader/introHeader';

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



const AboutPageText = styled.p`
margin: 4rem auto;
`;

const About = ({data}) =>(
  <>
  <AboutPageWrapper>
    <AboutPageContent>
    <IntroHeader>O mnie</IntroHeader>
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
