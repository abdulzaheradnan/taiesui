import { ActionFunctionArgs } from '@remix-run/node'
import { useActionData } from '@remix-run/react'
import { request } from 'node_modules/axios/index.cjs'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-router-dom'

export default function upload() {
  const [file, setfile] = useState()
  const [file2, setfile2] = useState()
  const [image, setimage] = useState([])
  const [arr, setarr] = useState<Array>([])
  const [error1, seterror1] = useState("")
  const [error2, seterror2] = useState("")
  // const [error1,seterror1]=useState("")
  // const [error1,seterror1]=useState("")

  const cloudinaryhandle = async (file: any) => {
    const formdata = new FormData()
    if (typeof file === "undefined") return
    formdata.append("file", file)

    formdata.append("upload_preset", "test-remix-upload")
    formdata.append("Api_key", "983376246885266")

    const result = await fetch("https://api.cloudinary.com/v1_1/dy2pifpxl/image/upload", {
      method: "POST",
      body: formdata
    }).then((r) => r.json())
    return result.url
  }
  const handlechnge = async (e) => {
    const file =  e.target.files[0]
    const name = e.target.name
    console.log(name)
    handlefilename(name,file)
    console.log(file)
    setarr([...arr, file])
    console.log(arr)
    for (let i = 0; i <= arr.length; i++) {

      const data1 = await cloudinaryhandle(file)
      setimage([...image, data1])
    }

  }
  useEffect(()=>{

  },[image,arr])
  const handlefilename=async(name,file)=>{
    const span1 = document.getElementById("firstfile")
    const span2 = document.getElementById("secondfile")
    const span3 = document.getElementById("thirdfile")

    if (name === "file") {
      span1.innerText = `${file.name}`
    } else if (name === "file0") {
      span2.innerText = `${file.name}`

    }else if(name==="file1"){
      span3.innerText=`${file.name}`
      }
  }
  const handlesubmit = async () => {
    //     const formdata = new FormData()
    //     if (typeof file === "undefined") return
    //     formdata.append("file", file)

    //     formdata.append("upload_preset", "test-remix-upload")
    //     formdata.append("Api_key", "983376246885266")

    //     const result = await fetch("https://api.cloudinary.com/v1_1/dy2pifpxl/image/upload", {
    //       method: "POST",
    //       body: formdata
    //     }).then((r) => r.json())
    //     console.log("this is formdata",formdata)

    // setimage2(result.url)
    // console.log("result", result)

    console.log("image1", image)
  }
  return (
    <div>
      <Form method='post' onSubmit={handlesubmit}>

        <div className='m-5'>
          <label htmlFor="file1" className='w-[20px] h-[20px] rounded-md border-2 p-[10px] mr-5'>upload</label>
          <span id='firstfile'></span>
          <input type="file" name='file' onChange={handlechnge} id='file1' className='hidden' /><br />

        </div>
        <div className='m-5'>
          <label htmlFor="file2" className='w-[20px] h-[20px] rounded-md border-2 p-[10px] mr-5'>upload</label>
          <span id='secondfile'></span>
          <input type="file" name='file0' onChange={handlechnge} className='hidden' id='file2' /><br />
        </div>
        <div className='m-5'>
          <label htmlFor="file3" className='w-[20px] h-[20px] rounded-md border-2 p-[10px] mr-5'>upload</label>
          <span id='thirdfile'></span>
          <input type="file" name='file1' onChange={handlechnge} className='hidden' id='file3' /><br />
        </div>

        <button type='submit'>submit</button>
      </Form>
      <div>{image.map((item) => {
        return <div>{item}</div>
      })}</div>
      <div>

      </div>
    </div>
  )
}
export const action = ({ request }: ActionFunctionArgs) => {
  return null
}
