import React from "react"
import Layout from "../components/Layout" 
const ProjectsPage = () => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around bg-gray-50 dark:bg-gray-700 rounded-xl p-6 m-3">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <h1 className="px-4 pt-5 text-2xl text-left bg-green-300 dark:bg-green-300 font-bold sm:text-3xl">
              Projects & Research
            </h1>
            <p className="px-4 mt-8 text-lg text-gray-700 dark:text-white sm:mt-8">
            By constantly creating new applications and contributing solutions, I refine my programming skills every day.
            Examples of my work can be found on <a className="text-green-500 dark:text-green-200" href="https://github.com/wallenben">github</a>. More prominent projects will be featured here! </p> 
            <p className="px-4 mt-8 text-lg text-gray-700 dark:text-white sm:mt-8">
              Currently, most of my time is spent working on <a className="text-green-500 dark:text-green-200" href="https://github.com/wallenben/gbJS">GBJS</a>, a Gameboy Emulator written in TypeScript. Previously, I have created a lightweight library management system that is viewable <a className="text-green-500 dark:text-green-200" href="https://github.com/wallenben/Webdev/tree/main/finalproj">here</a>. <br /> <br /> 
              Additionally, I have continually worked with the <a className="text-green-500 dark:text-green-200" href="https://momentum-mod.org/">Momentum Mod</a> team on the web portions of the "Momentum Mod" videogame. 
              <br /> <br />

              After development of the emulator is concluded I intend to have a web project in the works that will make use of the Stripe API, as I would like more experience with web development and ecommerce! 
            </p>
          </div>
         
        </div>
      </main>
    </Layout>
  )
}
export default ProjectsPage;