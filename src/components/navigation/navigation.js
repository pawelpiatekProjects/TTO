import React, {Component} from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import * as colors from "../../assets/styles/variables"
import SmallNav from '../smallNav/smallNav'

//todo: set active class on list item
const NavigationWrapper = styled.nav`
 display: grid;
 grid-template-columns: 10% 90%;
`;

const BigMenu = styled.div`
grid-column: 1/ -1;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Montserrat';
  font-family: 'Montserrat';

  a {
    text-decoration: none;
    color: inherit;
  }
  
  @media(max-width: 700px){
  display: none;
  }
  @media(max-width: 550px){
  width: 80%;
  margin: 0 auto;
  }
`;


const Logo = styled.span`
  font-weight: 700;
  font-size: 2rem;
  margin-right: 10px;
  display: inline-block;
  
`

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  
  
`

const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 1.5rem;
  margin-left: 4rem;
  position: relative;

`

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
`

const MiniMenu = styled.div`

`;

const Hamburger = styled.button`
z-index: 1001;
display: none;
position: relative;
outline: none;
@media(max-width: 700px){
display: block;
grid-column: 1/span 1;
width: 5rem;
height: ${props=>props.isActive ? '0' : '.5rem'};
background-color: ${props=>props.isActive ? `${colors.white}` : `${colors.darkGray}`};
border: none;
}

&::before{
outline: none;
z-index: inherit;
display: block;
content: '';
top: -1rem;
left: 0;
position: absolute;
width: 5rem;
height: .5rem;
background-color: ${props=>props.isActive ? `${colors.white}` : `${colors.darkGray}`};
border: none;
transform: ${props=>props.isActive ? 'rotate(45deg) translateY(1rem)' : 'rotate(0) '};
}

&::after{
outline: none;
z-index: inherit;
display: block;
content: '';
bottom: -1rem;
left: 0;
position: absolute;
width: 5rem;
height: .5rem;
background-color: ${props=>props.isActive ? `${colors.white}` : `${colors.darkGray}`};
border: none;
transform: ${props=>props.isActive ? 'rotate(-45deg) translateY(-1rem)' : 'rotate(0)'};
}
`;

const SmallNavWrapper = styled(SmallNav)`
 
display: block;
position: fixed;
top: 50%;
left: 50%;
`;



class Navigation extends Component {
  state={
    isMobile: false
  }

  onMobileToggle = ()=>{
    const current = this.state.isMobile;
    this.setState({isMobile: !current})
  }

  render(){
    return(
      <NavigationWrapper>
        <SmallNav display={this.state.isMobile} toggle={this.onMobileToggle}/>
        <MiniMenu>
          <Hamburger isActive={this.state.isMobile} onClick={this.onMobileToggle}></Hamburger>
        </MiniMenu>
        <BigMenu>
          <Logo><Link to="/">TTO</Link></Logo>
          <NavigationList>
            <NavigationListItem>
              <NavigationListItemLink to="/blog">
                Blog</NavigationListItemLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationListItemLink to="/about">O mnie</NavigationListItemLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationListItemLink to="/contact">Kontakt</NavigationListItemLink>
            </NavigationListItem>
          </NavigationList>
        </BigMenu>
      </NavigationWrapper>
    )
  }

}

export default Navigation
