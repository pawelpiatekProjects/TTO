import React from 'react';
import styled from 'styled-components';
import {Link} from "gatsby";

const NavigationWrapper = styled.div`

`;

const Navigation = styled.ul`


`;

const NavigationItem = styled.li`


`;

const Navigation = () =>(
  <NavigationWrapper>
    <Navigation>
      <NavigationItem>
        <Link to="/">TTO</Link>
      </NavigationItem>
      <NavigationItem>
        <Link to="/blog">BLog</Link>
      </NavigationItem>
      <NavigationItem>
        <Link to="/about">O mnie</Link>
      </NavigationItem>
    </Navigation>
  </NavigationWrapper>
);

export default Navigation;
