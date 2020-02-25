import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import Footer from "../components/footer/footer"

const MainPageWrapper = styled.div`
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

const MainPageHeader = styled.h1`
text-align: right;
font-size: 6rem;
margin: 14rem 3rem 5rem 0;
  span{
  display: block;
  }
`;

const MainPageContent = styled.p`
width: 70%;
margin: 8rem auto;
`;


const IndexPage = ({ data }) => (
  <>
    <MainPageWrapper>
      <MainPageHeader>To tylko <span>opinie</span></MainPageHeader>
      <MainPageContent>
        {data.allDatoCmsIntro.nodes[0].introTitle}
      </MainPageContent>
      <Footer/>
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

`;



export default IndexPage
