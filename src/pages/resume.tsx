import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import resume from '../../Resume.pdf'
const ResumePage = () => {
  return (
    <Layout>
      <main className="max-w-3xl flex-grow mx-auto flex flex-col justify-around bg-gray-50 dark:bg-gray-700 rounded-xl p-6 m-3">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2"></div>
          <div>
            <Link to={resume}>
              <StaticImage src="../images/resume.png" alt="Click to download." />
            </Link>
          </div>
        </div>
      </main>

    </Layout>
  )
}
export default ResumePage;