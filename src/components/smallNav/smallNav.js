import React from "react"
import styled from "styled-components"
import * as colors from "../../assets/styles/variables"
import { Link } from "gatsby"


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

`

const MenuWrapper = styled.div`
position: absolute;
top: 25%;
left: 50%;
transform: translateX(-50%);
`

const Logo = styled.p`
font-size: 5rem;
position: relative;
 &::before{
  content: '';
  position: absolute;
  top: -.5rem;
  left: -1.5rem;
  display: block;
  width: 3rem;
  height: 3rem;
  border-top: 3px solid ${colors.white};
  border-left: 3px solid ${colors.white};
 }
 
 &::after{
  content: '';
  position: absolute;
  bottom: -.5rem;
  right: 0;
  display: block;
  width: 3rem;
  height: 3rem;
  border-bottom: 3px solid ${colors.white};
  border-right: 3px solid ${colors.white};
 }

a{
text-decoration: none;
color: ${colors.white};
}
`;

const Menu = styled.ul`
  list-style: none;
  width: 100%;
`;

const MenuItem = styled.li`
margin: 1rem auto;
text-align: center;
a{
text-decoration: none;
color: ${colors.white};
font-size: 3rem;
width: 100%;
margin: 0 auto;
}
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
