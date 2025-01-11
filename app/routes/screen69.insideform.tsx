import { ActionFunctionArgs } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import { spawn } from 'node:child_process'
import { error } from 'node:console'
import { url } from 'node:inspector'
import React, { useEffect, useState } from 'react'
import { z } from "zod"

export default function Insideform69() {
    const [maxdate, setmaxdate] = useState("")
    const [maxdate2, setmaxdate2] = useState("")
    const actiondata = useActionData()
    console.log(actiondata)
    useEffect(() => {
        const previousdat = () => {


            let today = new Date()
            let year = String(today.getFullYear())
            let month = String(today.getMonth() + 1).padStart(2, "0")
            let day = String(today.getDate() - 1).padStart(2, "0")
            return `${year}-${month}-${day}`
        }
        setmaxdate(previousdat())
    }, [])
    useEffect(() => {
        const previousdat2 = () => {


            let today = new Date()
            let year = String(today.getFullYear())
            let month = String(today.getMonth()).padStart(2, "0")
            let day = String(today.getDate() - 22).padStart(2, "0")
            return `${year}-${month}-${day}`
        }
        setmaxdate2(previousdat2())
    }, [])
    return (
        <Form method='post'>

            <div className='mx-auto w-[1080px] h-[2350px]  rounded-lg '>
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
                <div className='h-[2120px] w-[1080px] p-[30px] border-r-2 border-l-2 border-b-2'>
                    <div className='w-[196px] h-[28px]  text-2xl text-center font-semibold'>Basic Information</div>
                    <div className='grid grid-cols-2 gap-3 mt-4'>
                        <div>
                            <span className='font-semibold'>Employee ID</span>
                            <span className='text-red-600'> {actiondata?.error?.employeid ? `* ${actiondata?.error?.employeid}` : <></>}</span>
                            <input type="text" className='border-2 w-[500px] h-[42px] rounded-lg mt-2 pl-2' placeholder='ABCD002' name='employeid' />
                        </div>
                        <div>
                            <span className='font-semibold'>Title</span>
                            <span className='text-red-600'> {actiondata?.error?.title ? `* ${actiondata?.error?.title}` : <></>}</span>

                            <select type="select" className='border-2  w-[500px] h-[42px] rounded-lg mt-2  pl-2 pr-2' name='title' >
                                <option value="" className='pr-2'>select</option>
                                <option value="ms anselie">Ms anselie</option>
                            </select>

                        </div>
                        <div>
                            <span className='font-semibold'>First Name</span>
                            <span className='text-red-600'> {actiondata?.error?.firstname ? `* ${actiondata?.error?.firstname}` : <></>}</span>
                            <input type="text" className='border-2 w-[500px] h-[42px] rounded-lg mt-2  pl-2' placeholder='anslie' name='firstname' />

                        </div>
                        <div>
                            <span className='font-semibold'>Middle Name</span>
                            <span className='text-red-600'> {actiondata?.error?.middlename ? `* ${actiondata?.error?.middlename}` : <></>}</span>
                            <input type="text" className='border-2  w-[500px] h-[42px] rounded-lg mt-2  pl-2' placeholder='Middle name' name='middlename' />

                        </div> <div>
                            <span className='font-semibold'>Last Name</span>
                            <span className='text-red-600'> {actiondata?.error?.lastname ? `* ${actiondata?.error?.lastname}` : <></>}</span>
                            <input type="text" className='border-2 w-[500px] h-[42px] rounded-lg mt-2  pl-2' placeholder='smith' name='lastname' />

                        </div>
                        <div>
                            <span className='font-semibold'>Email</span>
                            <span className='text-red-600'> {actiondata?.error?.email ? `* ${actiondata?.error?.email}` : <></>}</span>
                            <input type="text" className='border-2  w-[500px] h-[42px] rounded-lg mt-2  pl-2' placeholder='anslie.s@company.com' name='email' />


                        </div>
                        <div>
                            <span className='font-semibold'>Phone Number</span>
                            <span className='text-red-600'> {actiondata?.error?.phone ? `* ${actiondata?.error?.phone}` : <></>}</span>
                            <input type="text" className='border-2 w-[500px] h-[42px] rounded-lg mt-2  pl-2' name='phone' />

                        </div>
                        <div>
                            <span className='font-semibold'>Nationality</span>
                            <span className='text-red-600'> {actiondata?.error?.nationality ? `* ${actiondata?.error?.nationality}` : <></>}</span>
                            <input type="text" className='border-2  w-[500px] h-[42px] rounded-lg mt-2  pl-2' placeholder='British citizen' name='nationality' />


                        </div>
                    </div>

                    <div className='w-[196px] h-[28px]  text-2xl text-center font-semibold mt-2'>work Information</div>
                    <div className='grid grid-cols-2 gap-3 mt-4'>
                        <div>
                            <span className='font-semibold'>Department</span>
                            <span className='text-red-600'> {actiondata?.error?.department ? `* ${actiondata?.error?.department}` : <></>}</span>
                            <select type="text" className='border-2 w-[500px] h-[42px] rounded-lg mt-2 pl-2' placeholder='It Project Management/PMO' name='department' >
                                <option value=""></option>
                            </select>

                        </div>
                        <div>
                            <span className='font-semibold'>Team</span>
                            <span className='text-red-600'> {actiondata?.error?.team ? `* ${actiondata?.error?.team}` : <></>}</span>
                            <select type="text" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2' placeholder='IT' name='team' >
                                <option value=""></option>
                            </select>


                        </div>
                        <div>
                            <span className='font-semibold'>Project</span>
                            <span className='text-red-600'> {actiondata?.error?.project ? `* ${actiondata?.error?.project}` : <></>}</span>
                            <input type="text" className='border-2 w-[500px] h-[42px] rounded-lg mt-2 pl-2' placeholder='ISS HRMS' name='project' />

                        </div>
                        <div>
                            <span className='font-semibold'>Designation</span>
                            <span className='text-red-600'> {actiondata?.error?.designation ? `* ${actiondata?.error?.designation}` : <></>}</span>
                            <input type="text" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2' placeholder='Project manager' name='designation' />


                        </div>
                        <div>
                            <span className='font-semibold'>Rank/Grade</span>
                            <span className='text-red-600'> {actiondata?.error?.rank ? `* ${actiondata?.error?.rank}` : <></>}</span>
                            <input type="text" className='border-2 w-[500px] h-[42px] rounded-lg mt-2 pl-2' placeholder='B' name='rank' />

                        </div>
                        <div>
                            <span className='font-semibold'>Salery</span>
                            <span className='text-red-600'> {actiondata?.error?.salery ? `* ${actiondata?.error?.salery}` : <></>}</span>
                            <input type="text" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2' placeholder='$2500' name='salery' />


                        </div>
                        <div>
                            <span className='font-semibold'>No.of Holidays</span>
                            <span className='text-red-600'> {actiondata?.error?.holiday ? `* ${actiondata?.error?.holiday}` : <></>}</span>
                            <input type="text" className='border-2 w-[500px] h-[42px] rounded-lg mt-2 pl-2' placeholder='18' name='holiday' />

                        </div>
                        <div>
                            <span className='font-semibold'>Date of Joining</span>
                            <span className='text-red-600'> {actiondata?.error?.dateofjoin ? `* ${actiondata?.error?.dateofjoin}` : <></>}</span>
                            <input type="date" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2 pr-2' placeholder='24-june-2024' min={maxdate2} name='dateofjoin' />


                        </div>
                        <div>
                            <span className='font-semibold'>Date of Application</span>
                            <span className='text-red-600'> {actiondata?.error?.dateofapplication ? `* ${actiondata?.error?.dateofapplication}` : <></>}</span>
                            <input type="date" className='border-2 w-[500px] h-[42px] rounded-lg mt-2 pl-2 pr-2' placeholder='12-june-2024' max={maxdate} name='dateofapplication' />

                        </div>
                        <div>
                            <span className='font-semibold'>Date of Interview</span>
                            <span className='text-red-600'> {actiondata?.error?.dateofinterview ? `* ${actiondata?.error?.dateofinterview}` : <></>}</span>
                            <input type="date" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2 pr-2' placeholder='16-june-2024' max={maxdate} name='dateofinterview' />


                        </div>
                        <div>
                            <span className='font-semibold'>Date of Selection</span>
                            <span className='text-red-600'> {actiondata?.error?.dateofselection ? `* ${actiondata?.error?.dateofselection}` : <></>}</span>
                            <input type="date" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2 pr-2' placeholder='18-june-2024' max={maxdate} name='dateofselection' />


                        </div>
                    </div>
                    <div className='mt-4'>
                        <input type="radio" name='radio' value="breakwithpay" />
                        <label htmlFor="" className='ml-2'>Break with pay</label>
                        <input type="radio" className='ml-4' name='radio' value="breakwithoutpay" />
                        <label htmlFor="" className='ml-2'>Break without pay</label>
                    </div>
                    <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.radio : " "}</span>

                    <div className='mt-2'>
                        <input type="checkbox" name='chekbox' value="managerwithcreaterights" />
                        <label htmlFor="" className='ml-2'>Manager With Create Rights</label>
                    </div>
                    <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.checkbox : " "}</span>

                    <div className='w-[245px] h-[28px]  text-2xl text-center font-semibold mt-2'>Hierarchy Information</div>
                    <div className='grid grid-cols-2 gap-3 mt-6'>

                        <div>
                            <span className='font-semibold'>Reporting Manager</span>
                            <span className='text-red-600'> {actiondata?.error?.reportingmanager ? `* ${actiondata?.error?.reportingmanager}` : <></>}</span>
                            <input type="text" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2' placeholder='CEO' name='reportingmanager' />


                        </div>
                    </div>
                    <div className='w-[183px] h-[28px]  text-2xl text-center font-semibold mt-4 '>Personal Details</div>

                    <div className='grid grid-cols-2 gap-3 mt-6'>

                        <div>
                            <span className='font-semibold'>Date of Birth</span>
                            <span className='text-red-600'> {actiondata?.error?.dateofbirth ? `* ${actiondata?.error?.dateofbirth}` : <></>}</span>
                            <input type="text" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2' placeholder='5-june-1994' name='dateofbirth' />


                        </div>
                        <div>
                            <span className='font-semibold'>Gender</span>
                            <span className='text-red-600'> {actiondata?.error?.gender ? `* ${actiondata?.error?.gender}` : <></>}</span>
                            <input type="text" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2' placeholder='male' name='gender' />


                        </div>
                        <div>
                            <span className='font-semibold'>Merital Status</span>
                            <span className='text-red-600'> {actiondata?.error?.meritalstatus ? `* ${actiondata?.error?.meritalstatus}` : <></>}</span>
                            <input type="text" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2' placeholder='married' name='maritalstatus' />


                        </div>
                        <div>
                            <span className='font-semibold'>National Insurance Number</span>
                            <span className='text-red-600'> {actiondata?.error?.insurancenumber ? `* ${actiondata?.error?.insurancenumber}` : <></>}</span>
                            <input type="text" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2' placeholder='ABC12345' name='insurancenumber' />


                        </div>



                    </div>
                    <div className='font-semibold mt-4'>Address</div>
                    <div className='grid grid-cols-2 gap-3 mt-2'>
                        <div>

                            <input type="text" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2' placeholder='254-258' name='roadnumber' />
                            <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.roadnumber : " "}</span>
                        </div>
                        <div>

                            <input type="text" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2' placeholder='washway Rd' name='roadname' />
                            <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.roadname : " "}</span>

                        </div>
                        <div>

                            <input type="text" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2' placeholder='sale' name='sale' />
                            <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.sale : " "}</span>
                        </div>
                        <div>

                            <select type="select" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2' name='area' >
                                <option value="">select</option>
                                <option value="cheshire">cheshire</option>
                            </select>
                            <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.area : " "}</span>
                        </div>

                        <div>

                            <select type="select" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2' name='country'>
                                <option value="">select</option>
                                <option value="uk">united kingdom</option>
                            </select>
                            <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.country : " "}</span>
                        </div>
                        <div>

                            <select type="select" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2' name='address' >
                                <option value="">select</option>

                                <option value="GB-EMAMA">GB-EMEMA</option>
                            </select>
                            <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.address : " "}</span>
                        </div>
                        <div>


                            <input type="text" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2' placeholder='m33 4rz' name='roadline' />
                            <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.roadline : " "}</span>
                        </div>



                    </div>
                    <div className='w-[455PX] h-[28px]  text-2xl text-center font-semibold mt-4 '>Next of kin (Emergency Contact Details)</div>
                    <div className='grid grid-cols-2 gap-3 mt-4'>
                        <div>
                            <span className='font-semibold'>First Name</span>
                            <span className='text-red-600'> {actiondata?.error?.firstname2 ? `* ${actiondata?.error?.firstname2}` : <></>}</span>
                            <input type="text" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2' placeholder='first name' name='firstname2' />


                        </div>  <div>
                            <span className='font-semibold'>Last Name</span>
                            <span className='text-red-600'> {actiondata?.error?.lastname2 ? `* ${actiondata?.error?.lastname2}` : <></>}</span>
                            <input type="text" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2' placeholder='last name' name='lastname2' />


                        </div>
                        <div>
                            <span className='font-semibold'>Email</span>
                            <span className='text-red-600'> {actiondata?.error?.email ? `* ${actiondata?.error?.email}` : <></>}</span>
                            <input type="text" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2' placeholder='email' name='email2' />


                        </div>
                        <div>
                            <span className='font-semibold'>Phone Number</span>
                            <span className='text-red-600'> {actiondata?.error?.phone2 ? `* ${actiondata?.error?.phone2}` : <></>}</span>
                            <input type="text" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2' placeholder='phone number' name='phone2' />


                        </div>
                        <div>
                            <span className='font-semibold'>Relation</span>
                            <span className='text-red-600'> {actiondata?.error?.relation ? `* ${actiondata?.error?.relation}` : <></>}</span>
                            <select type="text" className='border-2  w-[500px] h-[42px] rounded-lg mt-2 pl-2' placeholder='ABC12345' name='relation'>
                                <option value="">select</option>
                                <option value="married">married</option>
                                <option value="unmarried">unmarried</option>

                            </select>


                        </div>

                    </div>
                    <div className='w-full grid grid-cols-5 mt-16'>
                        <div className='col-span-4  text-right'>

                            <button className='w-[81px] h-[40px] bg-[#DEDEDE] border-2 rounded-md '>skip</button>
                        </div>
                        <div className='col-span-1  text-right'>

                            <button className='w-[146px] h-[40px] bg-[#466AF3] border-2 rounded-md text-white' type='submit'>Save & continue</button>
                        </div>
                    </div>



                </div>

            </div>
        </Form>

    )
}
export const action = async ({ request }: ActionFunctionArgs) => {
    const formdata = Object.fromEntries(await request.formData())
    const formpayload = z.object({
        employeid: z.string().min(5, "Employeid need 5 character"),
        title: z.string().min(5, "Title need 5 character"),
        firstname: z.string().min(5, "Firstname need 5 character"),
        middlename: z.string().min(5, "Middlename need 5 character"),
        lastname: z.string().min(5, "Lastname need 5 character"),
        email: z.string().min(5, "Email need 5 character"),
        phone: z.string().min(10, "Phone need 10 character"),
        nationality: z.string().min(5, "Nationality need 5 character"),
        department: z.string().min(5, "Department need 5 character"),
        team: z.string().min(5, "Team need 5 character"),
        project: z.string().min(5, "Project need 5 character"),
        designation: z.string().min(5, "Designation need 5 character"),
        rank: z.string().min(5, "Rank need 5 character"),
        salery: z.string().min(5, "Salery need 5 character"),
        holiday: z.string().min(1, "Holiday need 1 character"),
        dateofjoin: z.string().min(5, "Date of birth need 5 character"),
        dateofapplication: z.string().min(5, "Date of Application need 5 character"),
        dateofinterview: z.string().min(5, "Date of Interview need 5 character"),
        dateofselection: z.string().min(5, "Date of selection need 5 character"),
        radio: z.string().min(4, "payment method required"),
        checkbox: z.string().min(5, "Manager right required"),
        reportingmanager: z.string().min(5, "Reporting manager need 5 character"),
        dateofbirth: z.string().min(5, "Date of birth need 5 character"),
        gender: z.string().min(3, "Gender required"),
        meritalstatus: z.string().min(4, "Merital status required"),
        insurancenumber: z.string().min(7, "Insurance Number need 7 character"),
        roadnumber: z.string().min(5, "Road Number required 5 characters"),
        roadname: z.string().min(5, "Road Name required 5 characters"),
        sale: z.string().min(4, "Sale Required"),
        area: z.string().min(5, "Area required 5 characters"),
        country: z.string().min(5, "Country required 5 characters"),
        address: z.string().min(5, "Address required 5 characters"),
        roadline: z.string().min(4, "Road Line required 5 characters"),
        firstname2: z.string().min(4, "Firt Name required 5 characters"),
        lastname2: z.string().min(4, "Last Name required 5 characters"),
        email2: z.string().min(5, "Email required 5 characters"),
        phone2: z.string().min(10, "Phone required 5 characters"),
        relation: z.string().min(4, "Relation required ")

    })
    try {
        const payloaddata = formpayload.parse(formdata)
        return { formdata: payloaddata, error: null }
    } catch (error) {
        return {
            formadata: formdata,
            error: error.issues.reduce((acc, curr) => {
                let key = curr.path[0]
                acc[key] = curr.message
                return acc

            }, {})
        }
    }
    // console.log(formdata)
    // return null
}