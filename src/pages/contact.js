import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import ContactForm from "../components/contactForm/contactForm";
import {graphql} from 'gatsby';


const ContactPageWrapper = styled.div`
 display: flex;
  flex-direction: column;
 height: calc(100vh - 13rem);
  width: 55%;
 
`;

const ContactFormWrapper = styled.div`
  
`;

const ContactPageHeader = styled.h1`

`;

const ContactPaggeImage = styled(Image)`
  position: absolute !important;
top: 0;
right: 0;
height: 100vh;
width: 45%;

`;

const ContactPage = ({data}) => (
  <>
  <ContactPageWrapper>
    <ContactPageHeader>Kontakt</ContactPageHeader>
    <ContactFormWrapper>

    </ContactFormWrapper>
  </ContactPageWrapper>
    <ContactPaggeImage fluid={data.file.childImageSharp.fluid}/>

  </>
);

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
`;

export default ContactPage
