import { graphql } from "gatsby"
import React from "react"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from "../../components/Layout"
const MDXPage = ({ data }) => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow  mx-auto flex flex-col justify-around bg-gray-50 dark:bg-gray-700 text-green-600 dark:text-green-300 rounded-xl p-6 m-3">
      <div className="flex-grow 0">
      <h1>{data.mdx.frontmatter.title}</h1>
      <h3 className="text-sm text-green-400">{data.mdx.frontmatter.date}</h3>
      <br />
      <div className="  sm:items-center text-gray-700 dark:text-white flex-grow ">
          <div className="sm:px-7">
            <MDXRenderer>
              {data.mdx.body}
            </MDXRenderer>
          </div>

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
export default MDXPage;