import React from 'react';
import styled from 'styled-components';
import Image from "gatsby-image"
import { graphql } from "gatsby"

const AboutPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 13rem);
  width: 55%;
`

const GatsbyImage = styled(Image)`
position: absolute !important;
top: 0;
right: 0;
height: 100vh;
width: 45%;
`;

const AboutPageContent = styled.div`
width: 70%;
margin: 5rem auto;
`

const AboutPageHeader = styled.h1`
text-align: left;
font-size: 6rem;
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse et consectetur eros. Mauris at quam vitae leo vehicula
      condimentum. Aliquam augue neque, euismod eget cursus in, ultricies
      elementum odio. Vestibulum pellentesque nisl at arcu aliquam,
      a pretium enim porta. Aliquam maximus velit augue, eu gravida
      nulla gravida vitae.
    </AboutPageText>
      <AboutPageText>
        Ut dignissim orci vitae elit ullamcorper rhoncus.
        Donec malesuada mollis fermentum. Vestibulum vel interdum ex.
        Aenean a accumsan lorem, sit amet maximus mauris. Curabitur ultricies
        hendrerit lorem, a dapibus ex aliquam non. Suspendisse luctus
        feugiat arcu, maximus sodales nunc mattis ornare.
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
    }

`;

export default About
