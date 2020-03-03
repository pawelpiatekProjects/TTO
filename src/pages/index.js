import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import Footer from "../components/footer/footer"
import * as colors from "../assets/styles/variables"
import IntroHeader from "../components/introHeader/introHeader"

const MainPageWrapper = styled.div`
align-items: center;
position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  height: calc(100vh - 7rem);
  width: 55%;
  
  @media(max-width: 1200px){
width: 60%;
}

@media(max-width: 1050px){
width: 100%;
margin-top: 5rem;
height: calc(100vh - 15rem);
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

@media(max-width: 1050px){
display: none;
}
`

const IntroHeaderWrapper = styled.div`
grid-row: 1/span 1;
margin-right: 5rem;

@media(max-width: 1050px){
h1{
margin: 0 auto;
}


}
`

//todo: fix margin on small devices
const MainPageContent = styled.p`
grid-row: 2/ span 1;
width: 70%;
margin: 0rem auto 8rem auto;
font-size: 1.6rem;
background-color: ${colors.lightGray2};
padding: 5rem;
position: relative;

&::before{
content: '';
position: absolute;
display: block;
width: 10rem;
height: 10rem;
top: -1.5rem;
left: -1.5rem;
border-top: 6px solid  ${colors.darkGray};
border-left: 6px solid  ${colors.darkGray};
}

&::after{
content: '';
position: absolute;
display: block;
width: 10rem;
height: 10rem;
bottom: -1.5rem;
right: -1.5rem;
border-bottom: 6px solid  ${colors.darkGray};
border-right: 6px solid  ${colors.darkGray};
}

@media(max-width: 900px){
width: 60%;
text-align: left;
padding: 2rem 3rem;
font-size: 1.4rem;
margin: 8rem auto;
}

@media(max-width: 700px){
width: 80%;
}

@media(max-width: 500px){
width: 90%;
}
`

const FooterWrapper = styled.div`
grid-row: 3/span 1;
align-self: end;
`


const IndexPage = ({ data }) => (
  <>
    <MainPageWrapper>
      <IntroHeaderWrapper>
        <IntroHeader>To tylko <span>opinie</span></IntroHeader>
      </IntroHeaderWrapper>
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
