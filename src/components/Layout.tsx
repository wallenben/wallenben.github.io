import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
    
      <div className="flex flex-col min-h-screen bg-gray-200 dark:bg-gray-600">
      <title>{data.site.siteMetadata.title}</title>
        <header className="p-4  bg-gray-500 dark:bg-gray-800 text-white font-semibold">
        <div className="flex justify-start">
        <h1 className="max-1w-2xl mx-4 text-green-300 animate-pulse"><Link to="/">Ben Wallen</Link></h1>
        <h1 className="max-w-2xl mx-3"><Link to="/blog/">Blog</Link></h1>
        <h1 className="max-w-2xl mx-3"><Link to="/projects">Projects</Link></h1>
        <h1 className="max-w-2xl mx-3"><Link to="/resume">Resume</Link></h1>
        </div>
        </header>
        {children}
      </div>
    </>
  )
}

export default Layout
