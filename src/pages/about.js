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
