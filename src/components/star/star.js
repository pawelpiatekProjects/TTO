import React from 'react';
import styled from 'styled-components';
import * as colors from '../../assets/styles/variables';

const StarWrapper = styled.div`
position: relative;
  
  display: inline-block;
  width: 0;
  height: 0;
  
  margin-left: .9em;
  margin-right: .9em;
  margin-bottom: 1.2em;
  
  border-right:  .3em solid transparent;
  border-bottom: .7em  solid ${props=>props.empty ? `${colors.lightGray}`: `${colors.darkGray}`};
  border-left:   .3em solid transparent;

  /* Controlls the size of the stars. */
  font-size: 1.8rem;
  
  &:before, &:after {
    content: '';
    
    display: block;
    width: 0;
    height: 0;
    
    position: absolute;
    top: .6em;
    left: -1em;
  
    border-right:  1em solid transparent;
    border-bottom: .7em  solid ${props=>props.empty ? `${colors.lightGray}`: `${colors.darkGray}`};
    border-left:   1em solid transparent;
  
    transform: rotate(-35deg);
  }
  
  &:after {  
    transform: rotate(35deg);
  }
`;

const Star = ({stars, num}) => {
  let starComponent = <StarWrapper/>;
  {console.log(`${num}+ ${stars}`)}
  if(num>=stars){
    starComponent = <StarWrapper empty/>;
  }
return(
  starComponent
  )

};

export default Star;
