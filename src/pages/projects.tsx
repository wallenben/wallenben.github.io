import React from "react"
import Layout from "../components/Layout" 
const ProjectsPage = () => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <h1 className="px-4 pt-5 text-2xl text-left bg-purple-500 dark:bg-green-300 font-bold sm:text-3xl">
              Determined.
            </h1>
            <p className="px-4 mt-8 text-lg text-gray-700 dark:text-white sm:mt-8">
            By constantly creating new applications and contributing solutions, I refine my programming skills every day.
            Examples of my work can be found on <a className="text-green-200" href="https://twitter.com/gatsbyjs">github</a>. More prominent projects will be featured here! </p> 
          </div>
         
        </div>
      </main>
    </Layout>
  )
}
export default ProjectsPage;