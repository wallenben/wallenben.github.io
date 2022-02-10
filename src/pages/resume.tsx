import React from "react"
import Layout from "../components/Layout" 
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import pdf from './Resume.pdf'
const IndexPage = () => {
  return (
    <Layout>
      <main className="max-w-3xl flex-grow mx-auto flex flex-col justify-around bg-gray-50 dark:bg-gray-700 rounded-xl p-6 m-3">
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