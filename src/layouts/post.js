import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';
import Image from "gatsby-image"

export const querry = graphql`
    query MyQuery($id: String!) {
        datoCmsArticle(id: {eq: $id}) {
            title
            author
            featuredImage {
                fixed{
                    ...GatsbyDatoCmsFixed_tracedSVG
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
                        fixed{
                            ...GatsbyDatoCmsFixed_tracedSVG
                        }
                    }
                    id
                }
            }
        }
    }
`;

const PostLayoutWrapper = styled.div`

`;

const PostLatoutTitle = styled.h1`

`;

const PostLayoutAuthor = styled.h3`

`;

const ArticleContentHeader = styled.h2`

`;

const ArticleContentParagraph = styled.p`

`;

const ArticleContentImage = styled(Image)`

`;


const PostLayout = ({data}) =>(
  <PostLayoutWrapper>
    <h1>{data.datoCmsArticle.title}</h1>
    <h1>{data.datoCmsArticle.author}</h1>
    {/*<Image fixed={data.featuredImage.fixed}/>*/}
    <div>{data.datoCmsArticle.articleContent.map(el=>{
      const key = el.__typename
      switch (key) {
        case "DatoCmsHeader": {
          return <h1 key={el.id}>{el.headingContent}</h1>
        }
        case "DatoCmsParagraph": {
          return <p key={el.id}>{el.paragraphContent}</p>
        }
        case "DatoCmsImage": {
          return <Image key={el.id} fixed={el.imageData.fixed}/>
        }
        default: return null;
      }
    })}</div>

  </PostLayoutWrapper>
);

export default PostLayout;
