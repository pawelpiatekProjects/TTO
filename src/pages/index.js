import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import Footer from "../components/footer/footer"
import * as colors from '../assets/styles/variables';

const MainPageWrapper = styled.div`
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

const MainPageHeader = styled.h1`
text-align: right;
font-size: 6rem;
position: relative;
margin: 14rem 3rem 5rem 0;
  span{
  display: block;
  }
  
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

@media(max-width: 700px){
width: 80%;
font-size: 5rem;
}

@media(max-width: 500px){
width: 100%;
font-size: 4rem;

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
font-size: 3rem;
padding: 3rem;

&::before{
content: '';
display: block;
position: absolute;
width: 100%;
height: 100%;
border: 4px solid ${colors.darkGray};
top: -1rem;
left: 1rem;
}
}
`;

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
