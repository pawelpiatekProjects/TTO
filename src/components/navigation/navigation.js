import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

//todo: set active class on list item
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

`;

const NavigationListItemLink = styled(Link)`
 ::after{
    position: absolute;
    display: block;
    opacity: 0;
    top: -1px;
    left: -3px;
    content: '';
    width: 7rem;
    height: 3rem;
    border: 3px solid #000;
    transition: all .3s;
  }
  
  &:hover:after{
  opacity: 1;
  transform: translate(-5px, -5px);
  box-shadow: 1px 1px 5px -1px rgba(0,0,0,0.75);
  }
`;




const Navigation = () => (
  <NavigationWrapper>
    <Logo><Link to="/">TTO</Link></Logo>
    <NavigationList>
      <NavigationListItem>
        <NavigationListItemLink  to="/blog">
          Blog</NavigationListItemLink>
      </NavigationListItem>
      <NavigationListItem>
        <NavigationListItemLink to="/about">O mnie</NavigationListItemLink>
      </NavigationListItem>
      <NavigationListItem>
        <NavigationListItemLink to="/contact">Kontakt</NavigationListItemLink>
      </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
);

export default Navigation;
