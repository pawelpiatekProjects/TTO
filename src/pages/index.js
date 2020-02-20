import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql } from "gatsby"

const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 130px);
  width: 60%;
`

const GatsbyImage = styled(Image)`
position: absolute !important;
top: 0;
right: 0;
height: 100vh;
width: 40%;
`


const IndexPage = ({ data }) => (
  <>
    <MainPageWrapper>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>

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
    }

`


export default IndexPage
