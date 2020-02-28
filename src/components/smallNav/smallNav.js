import React from "react"
import styled from "styled-components"
import * as colors from "../../assets/styles/variables"
import { Link } from "gatsby"

//todo: finish small nav: add animation and style
const SmallNavWrapper = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
z-index: 1000;
width: 100%;
height: 100vh;
background-color: ${colors.darkGray};
display: ${props => props.display ? "block" : "none"};
`

const MenuWrapper = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

const Logo = styled.p`

`;

const Menu = styled.ul`

`;

const MenuItem = styled.li`

`;

const SmallNav = ({ display, toggle }) => (
  <SmallNavWrapper display={display}>
    <MenuWrapper>
      <Logo onClick={toggle}> <Link to="/">TTO</Link></Logo>
      <Menu>
        <MenuItem onClick={toggle}><Link to="/blog">Blog</Link></MenuItem>
        <MenuItem onClick={toggle}><Link to="/about">O mnie</Link></MenuItem>
        <MenuItem onClick={toggle}><Link to="/contact">Kontakt</Link></MenuItem>
      </Menu>
    </MenuWrapper>
  </SmallNavWrapper>
)

export default SmallNav
