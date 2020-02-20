import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavigationWrapper = styled.nav`
  position: absolute;
  top: 20px;
  left: 30px;
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
  font-size: 20px;
  margin-right: 10px;
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 15px;
  margin-left: 40px;
  position: relative;
  
  ::after{
    position: absolute;
    display: block;
    top: -1px;
    left: -3px;
    content: '';
    width: 70px;
    height: 30px;
    border: 3px solid #000;
  }
  
  &:hover{
  
  }
`;



const Navigation = () => (
  <NavigationWrapper>
    <Logo><Link to="/">TTO</Link></Logo>
    <NavigationList>
      <NavigationListItem>
        <Link to="/blog">Blog</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/about">O mnie</Link>
      </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
);

export default Navigation;
