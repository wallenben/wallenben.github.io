import React from "react"
import Layout from "../components/Layout" 
import { StaticImage } from "gatsby-plugin-image"
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import pdf from './Resume.pdf'
const IndexPage = () => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2"></div>
          <div>
           <Document file={pdf}>
           <Page pageNumber={1} />
           </Document>
          </div>
          </div>
         
         
       </main>
     
    </Layout>
  )
}
export default IndexPage;