import { graphql } from "gatsby"
import React from "react"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from "../components/Layout" 
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
          <ul>
          {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h1 className="text-2xl">{node.frontmatter.title}</h1>
            <p className="text-base">Posted: {node.frontmatter.date}</p>
            {/**<MDXRenderer>{node.body}</MDXRenderer> **/}</article>
        ))
      }
      </ul>
          </div>
         
        </div>
      </main>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`
export default IndexPage;