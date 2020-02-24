import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';
import Image from "gatsby-image";
import BackgroundImage from 'gatsby-background-image';

export const querry = graphql`
    query MyQuery($id: String!) {
        datoCmsArticle(id: {eq: $id}) {
            title
            author
            featuredImage {
                fluid{
                    ...GatsbyDatoCmsFluid_tracedSVG
                }
            }
            articleContent{
                ... on DatoCmsParagraph{
                    paragraphContent
                    id
                }
                ... on DatoCmsHeader{
                    headingContent
                    id
                }
                ... on DatoCmsImage{
                    imageData{
                        fluid{
                            ...GatsbyDatoCmsFluid_tracedSVG
                        }
                    }
                    id
                }
            }
        }
    }
`;

const PostLayoutWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const PostLatoutTitle = styled.h1`

`;

const PostLayoutAuthor = styled.h3`

`;

const ArticleContent = styled.div`

`;

const ArticleContentHeader = styled.h2`

`;

const ArticleContentParagraph = styled.p`

`;

const ArticleContentImage = styled(Image)`

`;


const PostLayout = ({data}) =>(
  <PostLayoutWrapper>

    <BackgroundImage fluid={data.datoCmsArticle.featuredImage.fluid}>
      <PostLatoutTitle>{data.datoCmsArticle.title}</PostLatoutTitle>
      <PostLayoutAuthor>{data.datoCmsArticle.author}</PostLayoutAuthor>
    </BackgroundImage>
    <ArticleContent>{data.datoCmsArticle.articleContent.map(el=>{
      const key = el.__typename
      switch (key) {
        case "DatoCmsHeader": {
          return <ArticleContentHeader key={el.id}>{el.headingContent}</ArticleContentHeader>
        }
        case "DatoCmsParagraph": {
          return <ArticleContentParagraph key={el.id}>{el.paragraphContent}</ArticleContentParagraph>
        }
        case "DatoCmsImage": {
          return <ArticleContentImage key={el.id} fluid={el.imageData.fluid}/>
        }
        default: return null;
      }
    })}</ArticleContent>

  </PostLayoutWrapper>
);

export default PostLayout;
