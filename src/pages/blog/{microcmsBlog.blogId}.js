// src/pages/blog/{microcmsBlog.blogId}.js
import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title={data.microcmsBlog.title} />
    <h1>{data.microcmsBlog.title}</h1>
    <p>{data.microcmsBlog.category && data.microcmsBlog.category.name}</p>
    <p>{data.microcmsBlog.createdAt}</p>
    <div
      dangerouslySetInnerHTML={{
        __html: `${data.microcmsBlog.body}`,
      }}
    />
  </Layout>
)

export default BlogPage

export const query = graphql`
  query($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      blogId
      title
      body
      category {
        name
      }
      createdAt
    }
  }
`