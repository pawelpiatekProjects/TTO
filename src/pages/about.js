import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import * as colors from "../assets/styles/variables"
import IntroHeader from "../components/introHeader/introHeader"
import Footer from "../components/footer/footer"

const AboutPageWrapper = styled.div`
display: grid;
grid-template-columns: repeat(6,1fr);
grid-template-rows:  auto 5rem;
  width: 55%;
  align-items: center;
   height: calc(100vh - 7rem);
   grid-gap: 1rem;
   padding-top: 5rem;
   padding-right: 5rem;
   
   @media(max-width: 1050px){
   width: 90%;
   margin: 0 auto;
   }
   

`;

const GatsbyImage = styled(Image)`
position: absolute !important;
top: 0;
right: 0;
height: 100vh;
width: 45%;

@media(max-width: 1200px){
width: 40%;
}

@media(max-width: 1050px){
display: none;
}
`

const AboutPageContent = styled.div`
//
grid-column: 1/-1;
grid-row: 1/ span 1;

`

const IntroHeaderWrapper = styled.div`
h1{
text-align: center;
margin: 5rem auto;

@media(max-width: 1050px){
margin-bottom: 8rem;
}
}
`

const AboutPageText = styled.p`
width: 60%;
margin: 3rem auto;

@media(max-width: 1050px){
width: 80%;
margin: 4rem auto;
}
`

const FooterWrapper = styled.div`
grid-column: 1/-1;
grid-row: 2/span 1;
//position: absolute; 
//bottom: -5rem;
//left: 50%;
//
//@media(max-width: 700px){
//  position: initial;
//}
`

const About = ({ data }) => (
  <>
    <AboutPageWrapper>
      <AboutPageContent>
        <IntroHeaderWrapper>
          <IntroHeader>O mnie</IntroHeader>
        </IntroHeaderWrapper>
        <AboutPageText>
          {data.allDatoCmsAbout.nodes[0].aboutContent}
        </AboutPageText>
        <AboutPageText>
          {data.allDatoCmsAbout.nodes[0].aboutContent2}
        </AboutPageText>

      </AboutPageContent>
      <FooterWrapper>
        <Footer/>
      </FooterWrapper>
    </AboutPageWrapper>
    <GatsbyImage fluid={data.file.childImageSharp.fluid}/>
  </>
)

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

`

export default About
