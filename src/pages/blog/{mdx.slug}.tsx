import { graphql } from "gatsby"
import React from "react"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from "../../components/Layout"
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <p>{data.mdx.frontmatter.date}</p>
            <MDXRenderer>
              {data.mdx.body}
            </MDXRenderer>
          </div>

        </div>
      </main>
    </Layout>
  )
}
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`
export default IndexPage;