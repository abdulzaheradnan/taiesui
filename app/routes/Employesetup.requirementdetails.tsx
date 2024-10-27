import { ActionFunctionArgs } from '@remix-run/node'
import { Await, Form, useActionData } from '@remix-run/react'
import React, { useEffect, useState } from 'react'
import { z } from "zod"


export default function Requirementdetails() {
    const actiondata = useActionData()
    const [arr, setarr] = useState<Array>([])
    const [urls, seturls] = useState<Array>([])

    const [error3, seterror3] = useState(true)
    const [error4, seterror4] = useState(true)
    const [error5, seterror5] = useState(true)
    const [errordrive, seterrordrive] = useState(true)
    const [errorpassport, seterrorpassport] = useState(true)

    // const [hidden, sethidden1] = useState<string>("")
    // const [hidden2, sethidden2] = useState<string>("")
    const [checkbox, setcheckbox1] = useState(false)
    const [checkbox2, setcheckbox2] = useState(false)
    const [checkhandle, setcheckhandle] = useState(false)
    const handlecheckboxone = () => {
        if (checkbox == false) {
            setcheckbox1(true)
            seterrordrive(true)

        } else {
            setcheckbox1(false)
            seterrordrive(false)
        }
    }

    const handlecheckbox2 = () => {
        if (checkbox2 == false) {
            setcheckbox2(true)
            seterrorpassport(true)
        } else {
            setcheckbox2(false)
            seterrorpassport(false)
        }
    }

    console.log("this nis checkboix 1", checkbox)
    const handlecloudinary = async (file: any) => {
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

    const handlechange1 = async (e) => {
        const file1 = e.target.files[0]
        // console.log("this is type of file ok",typeof file1)
        const name = e.target.name

        handlefilenames(file1, name)
        setarr([...arr, file1])
        console.log(arr)
        for (let i = 0; i <= arr.length; i++) {
            const data = await handlecloudinary(file1)
            seturls([...urls, data])
        }
    }

    const handlefilenames = (file: any, name: any) => {
        const span1 = document.getElementById("fileinputone")
        const span2 = document.getElementById("fileinputtwo")
        const span3 = document.getElementById("fileinputthree")
        const span4 = document.getElementById("fileinputfour")
        const span5 = document.getElementById("fileinputfive")
        if (name === "drivinglicense") {
            span1.innerText = `${file.name}`

        } else if (name === "passport") {
            span2.innerText = `${file.name}`

        } else if (name === "addressproof") {
            span3.innerText = `${file.name}`

        } else if (name === "birthcertificate") {
            span4.innerText = `${file.name}`

        } else if (name === "BRP") {
            span5.innerText = `${file.name}`

        }
    }
    useEffect(() => {

    }, [arr, urls])

    const handlesubmit = async (event: React.FormEvent) => {
        const data=Object.fromEntries(new FormData(event.target))
        console.log("this is data",data)
        const formdata = new FormData(event.target)
        const drive = formdata.get("drivinglicense")
        const passport = formdata.get("passport")
        const addressproof = formdata.get("addressproof")
        const birthcertificate = formdata.get("birthcertificate")
        const BRP = formdata.get("BRP")
        // if (drive.name == "") {
        //     setcheckbox1(true)
        //   document.getElementById("driving").checked=true

        // } 
        // if(passport.name==""){
        //     setcheckbox2(true)
        //     document.getElementById("passport").checked=true


        // }
        if (checkbox == false) {
            if (drive.name == "") {

                seterrordrive(false)
            } else {
                seterrordrive(true)
            }

        }
        if (checkbox2 == false) {
            if (passport.name == "") {

                seterrorpassport(false)
            } else {
                seterrorpassport(true)
            }
        }

        if (addressproof.name == "") {

            seterror3(false)
        } else {
            seterror3(true)
        }
        if (birthcertificate.name == "") {
            seterror4(false)
        } else {
            seterror4(true)
        }
        if (BRP.name == "") {
            seterror5(false)
        } else {
            seterror5(true)
        }
        const one = document.getElementById("fileinputone")
        const two = document.getElementById("fileinputtwo")
        const three = document.getElementById("fileinputthree")
        const four = document.getElementById("fileinputfour")
        const five = document.getElementById("fileinputfive")
        // if(drive.name || passport.name ||addressproof.name || birthcertificate.name || BRP.name ){

        //     one.innerText=""
        //     two.innerText=""
        //     three.innerText=""
        //     four.innerText=""
        //     five.innerText=""
        // }else return
        console.log("everything seem to work out")

        // console.log("actiondata", actiondata)
        // console.log("urls hai re", urls)

    }

    return (

        <Form method='post' onSubmit={handlesubmit} encType='multipart/form-data'>

            <div className='w-[850px] h-[740px] border-2 p-[30px] rounded-md bg-[#F4F4F4]'>
                <div className='border-b-2 grid grid-cols-12 '>
                    <div className='text-left  col-span-2 pt-4 text-[#1B72E8] font-semibold'>Id Proof</div>
                    <div className='text-left col-span-3 pt-4 font-light'>Employement Agreement</div>
                    <div className='text-center  col-span-4 pt-4 font-light'>Statement of understanding</div>
                    <div className='text-right col-span-3  pb-3'>
                        <button className='w-[36px] h-[36px] shadow-md bg-[#FFFFFF]  rounded-md'>+</button>
                    </div>

                </div>
                <div className='grid grid-cols-2 w-full gap-6 mt-1'>
                    <div className="mt-3" >
                        <span className='font-medium'>Driving License</span><span className='ml-4 mt-6'><input type="checkbox" name='driving' id="driving" onChange={() => handlecheckboxone()} />
                            <label htmlFor="" className='ml-2'>Not Include</label>
                        </span>
                        <div className={`text-right border-2 w-[380px] h-[42px] flex  justify-end items-center rounded-md mt-2 bg-[#FFFFFF]`}>
                            {checkbox == true ? <span className='mr-[340px] '>N/A</span> :
                                <div className='w-full'>
                                    <span className='mr-[100px] ' id='fileinputone'></span>

                                    <label htmlFor="fileinput1" className="w-[92px] h-[30px] bg-[#466AF3] rounded-md p-1 text-center mr-2 text-white pl-3 pr-3 " >Upload</label>
                                </div>
                            }
                            <input type="file" id='fileinput1' name='drivinglicense' onChange={handlechange1} className='hidden' />
                        </div>
                        <span className='text-red-600'>{errordrive == false ? "Required Driving license" : " "}</span>
                    </div>
                    <div className="mt-3">
                        <span className='font-medium'>Passport</span><span className='ml-4 mt-6'><input type="checkbox" name='passport' id="passport" onChange={() => handlecheckbox2()} />
                            <label htmlFor="" className='ml-2'>Not Include</label>
                        </span>
                        <div className={`text-right border-2 w-[380px] h-[42px] flex  justify-end items-center rounded-md mt-2 bg-[#FFFFFF] `}>
                            {checkbox2 == true ? <span className='mr-[340px]'>N/A</span> :
                                <div>
                                    <span className='mr-[100px]' id='fileinputtwo'></span>

                                    <label htmlFor="fileinput2" className='w-[72px] h-[30px] bg-[#466AF3] rounded-md p-1 text-center mr-2 text-white pl-3 pr-3'>Upload</label>
                                </div>
                            }
                            <input type="file" id='fileinput2' name='passport' onChange={handlechange1} className='hidden' />
                        </div>


                        <span className='text-red-600 '>{errorpassport == false ? "Required Passport" : " "}</span>
                    </div>

                </div>
                {/* <span className='text-red-500 '>{error12 == false ? "Required only one Field  lisence or passport its optional" : " "}</span> */}
                <div className='grid grid-cols-2 w-full gap-6'>
                    <div className='mt-3 '>
                        <div className='font-medium'>Address Proof</div>
                        <div className='text-right border-2 w-[380px] h-[42px] flex  justify-end items-center rounded-md mt-2 bg-[#FFFFFF]'>
                            <span className='mr-[100px]' id='fileinputthree'></span>

                            <label htmlFor="fileinput3" className='w-[72px] h-[30px] bg-[#466AF3] rounded-md p-1 text-center mr-2 text-white'>Upload</label>
                            <input type="file" id='fileinput3' name='addressproof' onChange={handlechange1} className='hidden' />
                        </div>
                        <span className='text-red-500'>{error3 == false ? "Address proof" : " "}</span>

                    </div>
                    <div className='mt-3 '>
                        <div className='font-medium'>Birth Certificate</div>
                        <div className='text-right border-2 w-[380px] h-[42px] flex  justify-end items-center rounded-md mt-2 bg-[#FFFFFF]'>
                            <span className='mr-[100px]' id='fileinputfour'></span>

                            <label htmlFor="fileinput4" className='w-[72px] h-[30px] bg-[#466AF3] rounded-md p-1 text-center mr-2 text-white'>Upload</label>
                            <input type="file" id='fileinput4' name='birthcertificate' onChange={handlechange1} className='hidden' />
                        </div>
                        <span className='text-red-500'>{error4 == false ? "Required Birth certificate" : " "}</span>

                    </div>
                </div>
                <div className='grid grid-cols-2 w-full gap-6'>
                    <div className='mt-3 '>
                        <div className='font-medium'>BRP</div>
                        <div className='text-right border-2 w-[380px] h-[42px] flex  justify-end items-center rounded-md mt-2 bg-[#FFFFFF]'>
                            <span className='mr-[100px]' id='fileinputfive'></span>
                            <label htmlFor="fileinput5" className='w-[72px] h-[30px] bg-[#466AF3] rounded-md p-1 text-center mr-2 text-white'>Upload</label>

                            <input type="file" id='fileinput5' name='BRP' onChange={handlechange1} className='hidden' />
                        </div>
                        <span className='text-red-500'>{error5 == false ? "Required BRP" : " "}</span>

                    </div>

                </div>
                <div className='grid grid-cols-4  mt-[270px]'>
                    <div className='col-span-3 text-right'><button className='w-[81px] h-[40px] border-2 rounded-md   bg-[#DEDEDE]'>Skip</button></div>
                    <div className='col-span-1 text-right '><button className='w-[146px] h-[40px] border-2 rounded-md  bg-[#466AF3] text-white' type='submit' >Save & Continue</button></div>

                </div>

            </div>
            <div>
            </div>
        </Form>
    )
}

export const action = async ({ request }: ActionFunctionArgs) => {
    const formdata = await request.formData()
    const drivinglicense = formdata.get("drivinglicense")
    const passport = formdata.get("passport")
    const addressproof = formdata.get("addressproof")
    const birthcertificate = formdata.get("birthcertificate")
    const BRP = formdata.get("BRP")
    console.log(drivinglicense, passport, addressproof, birthcertificate, BRP)

    const arr = []
    const arr2 = []
    arr.push(drivinglicense, passport, addressproof, birthcertificate, BRP)

    console.log(drivinglicense)
    for (let i = 0; i <= arr.length - 1; i++) {

        const result2 = await handlecloudinary2(arr[i])
        console.log(result2)
        arr2.push(result2)

    }
    console.log(arr2)
    return arr2
    // return null
}
const handlecloudinary2 = async (file: any) => {
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
// export const errorfunction = async (drivingelisence, passport, addressproof, birthcertificate, BRP) => {
//     const errors = {}
//     if (!drivingelisence) {
//         errors.driving = "Required driving license"
//         return error
//     } if (!passport) {
//         errors.pass = "Required passport"
//         return error

//     } if (!addressproof) {
//         errors.address = "Required address "
//         return error

//     } if (!birthcertificate) {
//         errors.birth = "Required birthcertificate"
//         return error

//     } if (!BRP) {
//         errors.brp = "Required BRP"
//         return error

//     }
//     return errors


// }