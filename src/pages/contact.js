import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import ContactForm from "../components/contactForm/contactForm"
import { graphql } from "gatsby"
import IntroHeader from "../components/introHeader/introHeader"
import SocialIcons from "../components/socialIcons/socialIcons"
import Footer from "../components/footer/footer"



const ContactPageWrapper = styled.div`
display: grid;
grid-template-columns: repeat(6,1fr);
grid-template-rows: auto;
  width: 55%;
  align-items: center;
  
   height: calc(100vh - 7rem);
   grid-gap: 1rem;
   //padding-top: 5rem;
   padding-right: 5rem;
   
 
    @media(max-width: 1200px){
width: 60%;
}
//
@media(max-width: 1050px){
    grid-template-rows: auto;
    width: 80%;
    margin: 8rem auto 0 auto;
    align-items: end;
    height: calc(100vh - 15rem);
  
 }
 
 
 @media(max-width: 450px){
 width: 90%;
 grid-gap: 3rem;
 }
`;

const SocialIconsWrapper = styled.div`
  grid-column: 1/ span 3;
  grid-row: 1/ span 1;
  
  @media(max-width: 1050px){
    text-align: center;
     grid-column: 1/ -1;
 width: 100%;
 margin: 0 auto;
 align-self: end;
  }
  

`

const ContactFormWrapper = styled.div`
grid-column: 1/ -1;
grid-row: 2/span 1;


 @media(max-width: 1050px){
  grid-row: 3/ span 1;
  //grid-column: 1/-1;
 }

//@media(max-width: 450px){
//  grid-column: 1/-1;
//}
`

const ContactFormHeaderWrapper = styled.div`
grid-column: 4/-1;
grid-row: 1/span 1;


 @media(max-width: 1050px){
 grid-column: 1/ -1;
 grid-row: 2/span 1;
 
  h1{
  margin:  0 auto;
  }
 }
`

const ContactPaggeImage = styled(Image)`
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

const FooterWrapper = styled.div`
grid-column: 1/-1;
grid-row: 3/span 1;
//padding: 2rem;
align-self: end;
p{
margin: 0;
}

 @media(max-width: 1050px){
  grid-row: 4/span 1;
 }

`

const ContactPage = ({ data }) => (
  <>
    <ContactPageWrapper>
      <SocialIconsWrapper>
        <SocialIcons/>
      </SocialIconsWrapper>
      <ContactFormHeaderWrapper>
        <IntroHeader>Kontakt</IntroHeader>
      </ContactFormHeaderWrapper>
      <ContactFormWrapper>
        <ContactForm/>
      </ContactFormWrapper>
      <FooterWrapper>
        <Footer/>
      </FooterWrapper>
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
