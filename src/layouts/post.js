import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';
import Image from "gatsby-image";
import BackgroundImage from 'gatsby-background-image';
import * as colors from '../assets/styles/variables';
import Star from "../components/star/star"

//todo: fix font to latin
export const querry = graphql`
    query MyQuery($id: String!) {
        datoCmsArticle(id: {eq: $id}) {
            title
            author
            rate
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
  width: 60%;
  margin: 5rem auto;
  
  @media(max-width: 1200px){
width: 70%;
}
  @media(max-width: 900px){
width: 80%;
}
  @media(max-width: 750px){
width: 90%;
}
  @media(max-width: 1200px){
width: 100%;
}
`;



const PostLayoutImage = styled(BackgroundImage)`
position: absolute;
height: 40rem;
`;

const ArticleIntro = styled.div`
position: relative;
left: 0;
top: 22rem;
padding: 2rem;
background-color: ${colors.white};
`;

const PostLatoutTitle = styled.h1`
font-size: 3rem;
margin: 0;
`;

const PostLayoutAuthor = styled.h3`

`;

const ArticleContent = styled.div`
background-color: ${colors.primaryGray};
padding: 6rem;
`;

const ArticleContentHeader = styled.h2`
font-size: 1.8rem;
margin: 0 auto;
`;

const ArticleContentParagraph = styled.p`
margin: 3rem auto;
font-size: 1.4rem;
`;

const ArticleContentImage = styled(Image)`

`;

const ArticleRate = styled.div`
width: 60%;
margin: 2rem auto;
text-align: center;
padding: 3rem;
border-top: 3px solid ${colors.lightGray};
border-bottom: 3px solid ${colors.lightGray};


}
`;



const PostLayout = ({data}) => {
const title = `"${data.datoCmsArticle.title}"`;
console.log(data.datoCmsArticle.rate)
const n=10;
  return(
  <PostLayoutWrapper>
    <PostLayoutImage fluid={data.datoCmsArticle.featuredImage.fluid}>
      <ArticleIntro>
        <PostLatoutTitle>{title}</PostLatoutTitle>
        <PostLayoutAuthor>{data.datoCmsArticle.author}</PostLayoutAuthor>
      </ArticleIntro>
    </PostLayoutImage>
    <ArticleContent>{data.datoCmsArticle.articleContent.map(el => {
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
        default:
          return null;
      }
    })}</ArticleContent>
    <ArticleRate>
      {[...Array(n)].map((el, i)=> (
        <Star key={i} num={i} stars={data.datoCmsArticle.rate}/>
        ))}
    </ArticleRate>

  </PostLayoutWrapper>
  )
};

export default PostLayout;
