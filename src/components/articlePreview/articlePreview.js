import React from  'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import * as colors from '../../assets/styles/variables';
import {Link} from 'gatsby';

const ArticlePreviewWrapper = styled(Link)`

`;

const ArticlePreviewImage = styled(BackgroundImage)`
width: 50rem;
height: 25rem;
position: relative;
`;

const ArticlePreviewTitle = styled.h2`
position: absolute;
bottom: 1rem;
left: 0;
background-color: ${colors.darkGray};
color: ${colors.white};
width: 100%;
padding: 2rem;
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
