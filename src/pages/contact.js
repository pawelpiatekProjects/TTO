import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import ContactForm from "../components/contactForm/contactForm"
import { graphql } from "gatsby"
import IntroHeader from "../components/introHeader/introHeader"
import SocialIcons from "../components/socialIcons/socialIcons"


const ContactPageWrapper = styled.div`
 display: flex;
  flex-direction: column;
 height: calc(100vh - 13rem);
  width: 55%;
  padding: 3rem;
 
`

const ContactFormWrapper = styled.div`
  
`;

const ContactFormHeader = styled(IntroHeader)`

`;

const TopContainer = styled.div`
position: relative;
margin-top: 14rem;
  h1{
  display: inline-block;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0;
  }
  div{
  display: inline-block;
  margin-top: 2rem;
  }
`;


const ContactPaggeImage = styled(Image)`
  position: absolute !important;
top: 0;
right: 0;
height: 100vh;
width: 45%;

`

const ContactPage = ({ data }) => (
  <>
    <ContactPageWrapper>
      <TopContainer>
        <SocialIcons/>
        <ContactFormHeader>Kontakt</ContactFormHeader>
      </TopContainer>
      <ContactFormWrapper>
        <ContactForm/>
      </ContactFormWrapper>
    </ContactPageWrapper>
    <ContactPaggeImage fluid={data.file.childImageSharp.fluid}/>

  </>
)

export const contactQuerry = graphql`
    {
        file(name: {eq: "contact-hero"}){
            childImageSharp{
                fluid{
                    ... GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`

export default ContactPage
