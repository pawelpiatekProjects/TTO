import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavigationWrapper = styled.nav`
  position: absolute;
  top: 2rem;
  left: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Montserrat';

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Logo = styled.span`
  font-weight: 700;
  font-size: 2rem;
  margin-right: 10px;
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 1.5rem;
  margin-left: 4rem;
  position: relative;
  
  
  //::after{
  //  position: absolute;
  //  display: block;
  //  top: -1px;
  //  left: -3px;
  //  content: '';
  //  width: 7rem;
  //  height: 3rem;
  //  border: 3px solid #000;
  //  transition: all .3s;
  //}
  //
  //&:hover:after{
  //transform: translate(-5px, -5px);
  //cursor: pointer;
  //}
`;

const NavigationListItemLink = styled(Link)`
 ::after{
    position: absolute;
    display: block;
    top: -1px;
    left: -3px;
    content: '';
    width: 7rem;
    height: 3rem;
    border: 3px solid #000;
    transition: all .3s;
  }
  
  &:hover:after{
  transform: translate(-5px, -5px);
  cursor: pointer;
  }
`



const Navigation = () => (
  <NavigationWrapper>
    <Logo><Link to="/">TTO</Link></Logo>
    <NavigationList>
      <NavigationListItem>
        <NavigationListItemLink to="/blog">Blog</NavigationListItemLink>
      </NavigationListItem>
      <NavigationListItem>
        <NavigationListItemLink to="/about">O mnie</NavigationListItemLink>
      </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
);

export default Navigation;
