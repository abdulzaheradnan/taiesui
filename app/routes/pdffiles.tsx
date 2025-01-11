import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Document, Page, pdfjs } from "react-pdf"
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

export default function Pdffiles() {
    const [list, setlist] = useState<Array>([])
    const [files, setfiles] = useState()
    const [pdfurl, setpdfurl] = useState()
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [error,seterror]=useState(false)
    const handlecloudinary = async (file: any) => {
        const formdata = new FormData()
        if (typeof file === "undefined") return
        formdata.append("file", file)

        formdata.append("upload_preset", "test-remix-upload")
        formdata.append("Api_key", "983376246885266")

        const result = await axios.post("https://api.cloudinary.com/v1_1/dy2pifpxl/image/upload", formdata)
        return result.data
    }
    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

    }, [])
    const handlefileinput = async (e) => {
        const file = e.target.files[0]
        const data = await handlecloudinary(file)
        console.log("this is dat url", data)
        setfiles(file)
        setlist([...list, data])
    }
    const handlereadfile = (pdf) => {
        setpdfurl(pdf.secure_url)
        seterror(true)
        setPageNumber(1)
    }
    function onDocumentLoadSuccess({ numPages }) {
        console.log("this is number of pages", numPages)
        setNumPages(numPages);
    }
    const nextpage = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1)
        }
    }
    const prevpage = () => {
        // if(pageNumber>numPages){
        setPageNumber(pageNumber - 1)
        // }
    }
    return (
        <div className='w-[1080px]  h-[780px] md:h-[1000px] mx-auto  rounded-md' >
            <div className='w-[1079px] h-[200px] border-2 border-white bg-gradient-to-r  from-[#a9a5a5] from-36% via-pink-300 via-72% to-[#a64cadb3] to-100%  rounded-t-lg'>
                <div className=' bg-cover bg-full w-[100px] h-[100px] rounded-full mx-auto mt-[30px] border-2 bg-center bg-[url("https://t4.ftcdn.net/jpg/04/62/88/97/360_F_462889752_tSWP7qDYpUIL6QRlbyIC8v68jaXwVXyx.jpg")] text-center'  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-auto mt-7 text-white" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                    <input type="file" hidden id='fileinput' />
                    <label className='mx-auto text-white text-[10px]' htmlFor="fileinput">Upload</label>

                </div>
                <h1 className='text-[#FFFFFF] w-[142px] h-[28px] mx-auto  text-[25px] mt-2'>Anslie Smith</h1>
            </div>
            <div className='bg-[#FFFFFF] w-full h-full p-[30px]  border-2'>
                <div className='grid grid-cols-5 float-left '>
                    {list.map((item) => {
                        return (
                            <div className=' ' onClick={() => handlereadfile(item)}>
                                <div className='w-[180px] h-[200px] border-2 bg-[#F5F5F5] text-center rounded-md  m-5 hover:bg-[#FFFFFF] hover:shadow-2xl '>
                                    <img src="https://cdn-icons-png.flaticon.com/128/16168/16168654.png" alt="pdf image" className='mx-auto ml-[65px] mt-[35px] w-[58px] h-[66px]' />
                                    <div className='mt-[30px] w-[116px] h-[45px] mx-auto'>
                                        {item.display_name + ".pdf"}
                                    </div>
                                </div>


                            </div>
                        )
                    })}
                    <div className='border-2 w-[180px] h-[200px] mt-5 ml-5 rounded-md text-center border-dashed bg-[#F5F5F5]'>
                        <div className='mt-[50px] mb-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 mx-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>

                        </div>
                        <div className='text-[10px]'>(we accept pdf,word,excel only)</div>
                        <div className='mt-[20px]'>

                            <label className='w-[200px] h-[20px] bg-[#466AF3] text-white p-2 border-2  rounded-md mt-[100px]' htmlFor='addfile'>choose files</label>
                            <input type="file" name="" id="addfile" hidden onChange={handlefileinput} />
                        </div>
                    </div>
                </div>
                {
                    error ==true ?
                
                <div>
                    {/* <iframe src={pdfurl} frameborder="0" className='w-[400px] h-[400px]'></iframe> */}
                    <div onClick={()=>seterror(false)}>---close</div>
                    <Document file={pdfurl} onLoadSuccess={onDocumentLoadSuccess} className="border-2  w-[650px] mx-auto">
                        <Page pageNumber={pageNumber}></Page>
                    </Document>
                    <p> Page {pageNumber} of {numPages}</p>
                    <button onClick={prevpage} disabled={pageNumber == 1} className='w-[40px] h-[30px] border-2 bg-slate-400'>prev</button>
                    <button onClick={nextpage} disabled={pageNumber == numPages} className='w-[40px] h-[30px] border-2 bg-slate-400'>next</button>
                </div>:<></>
}
                <div className=' grid grid-cols-8  w-full p-[30px] gap-4 mt-[650px] md:position: sticky'>
                    <div className=' col-span-7 text-right'>
                        <button className='w-[81px] h-[40px] bg-[#DEDEDE] rounded-md'>Skip</button>
                    </div>
                    <div className='col-span-1 text-center'>
                        <button className='w-[146px] h-[40px] bg-[#466AF3] text-white rounded-md'>Save & Continue</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
// import React from 'react';



