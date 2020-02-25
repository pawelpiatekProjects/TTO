import React from  'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import * as colors from '../../assets/styles/variables';
import {Link} from 'gatsby';

const ArticlePreviewWrapper = styled(Link)`
position: relative;

  &::before{
    position: absolute;
    top: -1.5rem;
    left: -1.5rem;
    content: '';
    display: block;
    width: 10rem;
    height: 10rem;
    border-left: 6px solid ${colors.darkGray};
    border-top: 6px solid ${colors.darkGray};
    transition: all .5s;
  }
  
  &::after{
    position: absolute;
    bottom: -1.5rem;
    right: -1.5rem;
    content: '';
    display: block;
    width: 10rem;
    height: 10rem;
    border-right: 6px solid ${colors.darkGray};
    border-bottom: 6px solid ${colors.darkGray};
    transition: all .5s;
  }
  &:hover:after,
  &:hover:before{
    width: 100%;
    height: 100%;
  }
  
  &:hover h2{
    background-color: ${colors.white};
    color: ${colors.darkGray};
  }
  
  &:hover div{
    opacity: .8;
  }
`;

const ArticlePreviewImage = styled(BackgroundImage)`
width: 100%;
height: 25rem;
position: relative;
box-shadow: 1px 1px 13px -4px rgba(0,0,0,0.75);
border: 2px solid ${colors.darkGray};

  

`;

const ArticlePreviewTitle = styled.h2`
position: absolute;
bottom: 1rem;
left: 0;
background-color: ${colors.darkGray};
color: ${colors.white};
width: 100%;
padding: 2rem;
transition: all .5s;
transition-delay: .2s;
`;

const ArticlePreview = ({title, image,slug}) => {

  return(
    <ArticlePreviewWrapper to={`/blog/${slug}`}>
      <ArticlePreviewImage fluid={image}>
        <ArticlePreviewTitle>{title}</ArticlePreviewTitle>
      </ArticlePreviewImage>

    </ArticlePreviewWrapper>
  )
};

export default ArticlePreview;
