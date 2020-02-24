import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';
import Image from "gatsby-image"

export const querry = graphql`
    query MyQuery($id: String!) {
        datoCmsArticle(id: {eq: $id}) {
            title
            author
            featuredImage{
                fixed{
                    ...GatsbyDatoCmsFixed_tracedSVG
                }
            }
#            articleContent{
#                ... on DatoCmsParagraph{
#                    paragraphContent
#                    id
#                }
#                ... on DatoCmsHeader{
#                    headerContent
#                    id
#                }
#                ... on DatoCmsImage{
#                    imageData{
#                        fixed{
#                            ...GatsbyDatoCmsFixed_tracedSVG
#                        }
#                    }
#                    id
#                }
#            }
        }
    }
`;

const PostLayoutWrapper = styled.div`

`;


const PostLayout = ({data}) =>(
  <PostLayoutWrapper>
    <h1>{data.datoCmsArticle.title}</h1>
    <h1>{data.datoCmsArticle.author}</h1>
    {/*<Image fixed={data.featuredImage.fixed}/>*/}
  </PostLayoutWrapper>
);

export default PostLayout;
