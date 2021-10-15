import React from "react"
import Layout from "../components/Layout" 
const IndexPage = () => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <h1 className="px-4 pt-5 text-2xl text-left bg-green-300 font-bold sm:text-3xl">
              Ambitious.
            </h1>
            <p className="px-4 mt-8 text-lg text-gray-700 dark:text-white sm:mt-8">
            I enjoy asking questions, and answering them with creative solutions using technology.
            I enjoy pushing the boundaries of my knowledge of technology by working on passion projects - ranging from decompiling binaries,
             to website and application creation.
            </p> 
          </div>
         
        </div>
      </main>
    </Layout>
  )
}
export default IndexPage;