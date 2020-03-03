import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import ArticlePreview from "../components/articlePreview/articlePreview"
import GatsbyImage from "gatsby-image"
import slugify from "slugify"
import Footer from "../components/footer/footer"

const BlogPageWrapper = styled.div`
width: 80%;
min-height: 100vh;
margin: 5rem auto 1rem auto;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: auto;
`

const BlogPageText = styled.p`
width: 50%;
margin: 8rem 0;
font-size: 1.6rem;
grid-row: 1/span 1;

@media(max-width: 950px){
width: 80%;
}

@media(max-width: 600px){
width: 90%;
}

@media(max-width: 450px){
width: 100%;
}
`

const Articles = styled.div`
grid-row: 2/span 1;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-row-gap: 8rem;
grid-column-gap: 10rem;


@media(max-width: 950px){
grid-template-columns:  1fr;
}
`

const FooterWrapper = styled.div`
margin-top: 10rem;
grid-row: 3/span 1;
`;

const Blog = ({ data }) => (
  <BlogPageWrapper>
    <BlogPageText>
      Morbi nec odio id metus blandit rutrum quis volutpat urna.
      Phasellus nibh ante, mattis sed elit in, imperdiet venenatis ex.
      Aenean interdum aliquet lorem, sit amet cursus ex suscipit eu.
    </BlogPageText>
    <Articles>
      {data.allDatoCmsArticle.nodes.map(article => {
        const slug = slugify(article.title, { lower: true })
        return (
          <ArticlePreview
            key={article.id}
            slug={slug}
            title={article.title}
            image={article.featuredImage.fluid}/>

        )
      })}
    </Articles>
    <FooterWrapper>
      <Footer/>
    </FooterWrapper>
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
