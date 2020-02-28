import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import * as colors from "../../assets/styles/variables"

const SocialIconsWrapper = styled.div`
  @media(max-width: 900px){
text-align: center;

}
`

//todo: add links to social icons
const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  margin: 0 2rem;
  transition: all .3s;
  
  &:hover{
    color: ${colors.lightGray};
    cursor: pointer;
  }
`

const SocialLink = styled.a`
text-decoration: none;
color: ${colors.darkGray};
outline: none;
`

const SocialIcons = () => (
  <SocialIconsWrapper>
    <SocialLink href="https://www.facebook.com/filip.mielczarek.50">
      <SocialIcon icon={faFacebookF}/>
    </SocialLink>
    <SocialLink href="https://www.instagram.com/cotamfifi/">
      <SocialIcon icon={faInstagram}/>
    </SocialLink>
    <SocialLink href="https://twitter.com/cotamfifi">
      <SocialIcon icon={faTwitter}/>
    </SocialLink>
  </SocialIconsWrapper>
)

export default SocialIcons
