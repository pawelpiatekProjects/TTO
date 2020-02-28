import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import Footer from "../components/footer/footer"
import * as colors from "../assets/styles/variables"
import IntroHeader from "../components/introHeader/introHeader"

const MainPageWrapper = styled.div`
position: relative;
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
z-index: 10;

@media(max-width: 1200px){
width: 40%;
}

@media(max-width: 900px){
display: none;
}
`

const MainPageContent = styled.p`
width: 70%;
margin: 8rem auto;
font-size: 1.6rem;

@media(max-width: 900px){
width: 60%;
text-align: left;
padding: 0 3rem;
font-size: 1.8rem;
}

@media(max-width: 700px){
width: 80%;
}

@media(max-width: 500px){
width: 100%;
}
`

const FooterWrapper = styled.div`
position: absolute; 
bottom: -5rem;
left: 50%;

@media(max-width: 700px){
  position: initial;
}
`


const IndexPage = ({ data }) => (
  <>
    <MainPageWrapper>
      <IntroHeader>To tylko <span>opinie</span></IntroHeader>
      <MainPageContent>
        {data.allDatoCmsIntro.nodes[0].introTitle}
      </MainPageContent>
      <FooterWrapper>
        <Footer/>
      </FooterWrapper>
    </MainPageWrapper>
    <GatsbyImage fluid={data.file.childImageSharp.fluid}/>
  </>

)

export const query = graphql`
    {
        file(name:{eq:"hero"}){
            childImageSharp{
                fluid{
                    ... GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        allDatoCmsIntro {
            nodes{
                introTitle
            }
        }
    }

`


export default IndexPage
