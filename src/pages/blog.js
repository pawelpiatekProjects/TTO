import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import ArticlePreview from "../components/articlePreview/articlePreview"
import GatsbyImage from "gatsby-image";
import slugify from 'slugify';

const BlogPageWrapper = styled.div`
width: 80%;
margin: 5rem auto;
`

const Articles = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-row-gap: 3rem;
grid-column-gap: 10rem;
`

const Blog = ({ data }) => (
  <BlogPageWrapper>
    <h1>Blog page</h1>
    <Articles>
      {data.allDatoCmsArticle.nodes.map(article => {
          const slug=slugify(article.title,{lower: true})
            return(
          <ArticlePreview
            slug={slug}
            title={article.title}
            image={article.featuredImage.fluid}/>

            )
      })}
    </Articles>
  </BlogPageWrapper>
)

export const querry = graphql`
    query MyQuery2 {
        allDatoCmsArticle {
            nodes {
                title
                id
                featuredImage {
                    fluid{
                        ...GatsbyDatoCmsFluid_tracedSVG
                    }
                }
            }
        }
    }
`

export default Blog
