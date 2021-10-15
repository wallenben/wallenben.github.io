import React from "react"
import Layout from "../components/Layout" 
import { StaticImage } from "gatsby-plugin-image"
const IndexPage = () => {
  return (
    <Layout>
      <main className="max-w-3xl flex-grow mx-auto flex flex-col justify-around bg-gray-50 rounded-xl p-6 m-3">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <h1 className="px-4 pt-5 text-2xl text-left bg-green-300 font-bold sm:text-3xl">
              Resume
            </h1>
            <StaticImage src="../images/resume.png" alt="A dinosaur" />
          </div>
         
        </div>
      </main>
    </Layout>
  )
}
export default IndexPage;