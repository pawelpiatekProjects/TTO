import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import * as colors from '../../assets/styles/variables';

const SocialIconsWrapper = styled.div`
  @media(max-width: 900px){
text-align: center;

}
`;

//todo: add links to social icons
const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  margin: 0 2rem;
  transition: all .3s;
  
  &:hover{
    color: ${colors.lightGray};
    cursor: pointer;
  }
`;

const SocialIcons = () => (
  <SocialIconsWrapper>
    <SocialIcon icon={faFacebookF}/>
    <SocialIcon icon={faInstagram}/>
    <SocialIcon icon={faTwitter}/>
  </SocialIconsWrapper>
);

export default SocialIcons;
