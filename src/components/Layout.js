import React from "react"
import { Link } from "gatsby"
const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-200 dark:bg-gray-600">
        <header className="p-4  bg-gray-500 dark:bg-gray-800 text-white font-semibold">
        <div class="flex justify-start">
        <h1 className="max-1w-2xl mx-2"><Link to="/">Ben Wallen</Link></h1>
        <h1 className="max-w-2xl mx-8"><Link to="/blog">Blog</Link></h1>
        <h1 className="max-w-2xl mx-8"><Link to="/about">About</Link></h1>
        <h1 className="max-w-2xl mx-8"><Link to="/resume">Resume</Link></h1>
        </div>
        </header>
        {children}
      </div>
    </>
  )
}

export default Layout
