import { graphql, Link } from "gatsby"
import React from "react"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from "../../components/Layout" 
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
          <ul className="p-8">
          {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link className="text-green-300" to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
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
        slug
        body
      }
    }
  }
`
export default IndexPage;