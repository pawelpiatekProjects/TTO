import React from "react"
import styled from "styled-components"
import * as colors from "../../assets/styles/variables"
import { Link } from "gatsby"

//todo: finish small nav
const SmallNavWrapper = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
z-index: 1000;
width: 100%;
height: 100vh;
background-color: ${colors.darkGray};
display: ${props => props.display ? 'block' : 'none'};
`;

const SmallNav = ({display}) => (
  <SmallNavWrapper display={display}>
  </SmallNavWrapper>
)

export default SmallNav
