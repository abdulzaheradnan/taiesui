import { ActionFunctionArgs } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import React, { useEffect, useState } from 'react'
import {  z } from "Zod"
import { compareAsc, format, } from "date-fns";
import moment, { now } from "moment"
import { reverse } from 'dns';



export default function Screen5() {
    const actiondata = useActionData()
    const [nowdate,setnowdate]=useState('')
    const [startdateuk,setstartdateuk]=useState("")
    const [formtadate,setformatedate]=useState("")
    console.log(actiondata)
    const dateofbirth=(date1)=>{

    
    const date=new Date(date1)
    const month=date.getMonth()+1
    const day=date.getDate()
    const year=date.getFullYear()
    const data=format(new Date(date1), "dd-MM-yyyy")
    // setnowdate(`${day}-${month}-${year}`)

    }
    // console.log(nowdate)
    // const birthdate=dateofbirth(date1)
    // let date2=nowdate
    // let fail=actiondata?.formdata?.dateofbirth
    
    // console.log("this nis action data",actiondata?.formdata?.dateofbirth, typeof fail)
    const datechange=(e)=>{
        console.log("this",e.target.value)
        const date=format(new Date(e.target.value),"dd-MM-yyyy")
        setnowdate(date.split("-").reverse().join("-"))
        console.log("this2",nowdate)
       
    }
 useEffect(()=>{
 },[])
    return (
        <Form method='post'>

            <div className='w-[850px] h-[830px] border-2 rounded-xl bg-[#FFFFFF] mx-auto pt-[30px] pb-[30px]'>
                <h1 className='font-bold text-[23px] mx-auto w-[162px] h-[28px] '>Add Employee</h1>
                <div className='grid grid-cols-2 p-[30px] gap-4  w-full bg-[#F4F4F4] mt-6 rounded-md'>
                    <span className='text-[#1B72E8] text-[10px]'>important Fields - mandatory Fields</span><span></span>
                    <div>
                        <span className='font-semibold'>First Name</span><span className='text-red-600'>* {actiondata?.error?.firstname ? actiondata?.error?.firstname :<></>}</span>
                        <input type="text" name='firstname' className='w-[380px] h-[42px] rounded-lg border-2 mt-2 pl-2' placeholder='first name' />
                    </div>
                    <div>
                        <span className='font-semibold'>Last Name</span><span className='text-red-600'>*  {actiondata?.error?.lastname ? actiondata?.error?.lastname :<></>}</span>
                        <input type="text" name='lastname' className='w-[380px] h-[42px] rounded-lg border-2 mt-2 pl-2' placeholder='last name' />
                    </div>
                    <div>
                        <span className='font-semibold'>Employe Code</span><span className='text-red-600'>*  {actiondata?.error?.employecode ? actiondata?.error?.employecode :<></>}</span>
                        <input type="text" name='employecode' className='w-[380px] h-[42px] rounded-lg border-2 mt-2 pl-2' placeholder='code' />
                    </div>
                    <div>
                        <span className='font-semibold'>Gender</span><span className='text-red-600'>*  {actiondata?.error?.gender ? actiondata?.error?.gender :<></>}</span>
                        <select type="select" name='gender' className='w-[380px] h-[42px] rounded-lg border-2 mt-2 pl-2 pr-2'>
                            <option value="">select</option>
                            <option value="male">male</option>
                            <option value="female">female</option>

                        </select>
                    </div>
                    <div>
                        <span className='font-semibold'>Location</span><span className='text-red-600'>*  {actiondata?.error?.location ? actiondata?.error?.location :<></>}</span>
                        <select type="select" name='location' className='w-[380px] h-[42px] rounded-lg border-2 mt-2 pl-2 pr-2'>
                            <option value="">select</option>
                            <option value="mumbai">mumbai</option>
                            <option value="delhi">delhi</option>

                        </select>
                    </div>
                    <div>
                        <span className='font-semibold'>Department</span><span className='text-red-600'>*  {actiondata?.error?.department ? actiondata?.error?.department :<></>}</span>
                        <select type="select" name='department' className='w-[380px] h-[42px] rounded-lg border-2 mt-2 pl-2 pr-2'>
                            <option value="">select</option>
                            <option value="it">it</option>

                        </select>
                    </div>
                    <div>
                        <span className='font-semibold'>Date of Birth</span><span className='text-red-600'>*  {actiondata?.error?.dateofbirth ? actiondata?.error?.dateofbirth :<></>}</span>
                        <input type="date"  name='dateofbirth' value={nowdate} onChange={datechange} className='w-[380px] h-[42px] rounded-lg border-2 mt-2 pl-2 pr-2'  />
                    </div>
                    <div>
                        <span className='font-semibold'>Employee Status</span><span className='text-red-600'>*  {actiondata?.error?.employestatus ? actiondata?.error?.employestatus :<></>}</span>
                        <select type="select" name='employestatus' className='w-[380px] h-[42px] rounded-lg border-2 mt-2 pl-2 pr-2'>
                            <option value="">select</option>
                            <option value="manager">manager</option>

                        </select>
                    </div>
                    <span className='text-[#1B72E8] text-[10px] mt-2'>Optional Fields</span><span className='mt-2'></span>
                    <div>
                        <span className='font-semibold'>Email Address</span><span className='text-red-600'> {actiondata?.error?.email ? actiondata?.error?.email :<></>}</span>
                        <input type="text" name='email' className='w-[380px] h-[42px] rounded-lg border-2 mt-2 pl-2' placeholder='asnile@gmail.com' />
                    </div>
                    <div>
                        <span className='font-semibold'>Start Date</span><span className='text-red-600'> {actiondata?.error?.startdate ? actiondata?.error?.startdate :<></>}</span>
                        <input type="date" name='startdate' onChange={(e)=>setstartdateuk(e.target.value)} className='w-[380px] h-[42px] rounded-lg border-2 mt-2 pl-2 pr-2' />
                    </div>
                    <div>
                        <span className='font-semibold'>Position/Job Title</span><span className='text-red-600'> {actiondata?.error?.jobtitle ? actiondata?.error?.jobtitle :<></>}</span>
                        <select type="select" name='jobtitle' className='w-[380px] h-[42px] rounded-lg border-2 mt-2 pl-2 pr-2'>
                            <option value="">select</option>
                            <option value="nothing">female</option>

                        </select>
                    </div> <div>
                        <span className='font-semibold'>Reports To</span><span className='text-red-600'> {actiondata?.error?.reports ? actiondata?.error?.reports :<></>}</span>
                        <select type="select" name='reports' className='w-[380px] h-[42px] rounded-lg border-2 mt-2 pl-2 pr-2'>
                            <option value="">select</option>
                            <option value="new">new</option>

                        </select>
                    </div>
                </div>
                <div className='grid grid-cols-2 p-[30px]'>
                    <div>
                        <input type="checkbox" name="checkbox" id="" /> <span htmlFor="" className='font-[5px]'>Enter more info about this employe after adding</span>
                    <span className='text-red-600'> {actiondata?.error?.checkbox ? actiondata?.error?.checkbox :<></>}</span>
                    </div>
                    <div className=' text-right '>
                        <button className='w-[80px] h-[40px] border-2 rounded-md bg-[#DEDEDE]'>cancel</button>
                        <button className='w-[80px] h-[40px] border-2 rounded-md ml-4 bg-[#466AF3] text-white' type='submit'>Add</button>

                    </div>
                </div>

            </div>
        </Form>
    )
}

export const action = async ({ request }: ActionFunctionArgs) => {
    const formdata1 = Object.fromEntries(await request.formData())
    const formpayload = z.object({
        firstname: z.string().min(4, "first name required 5 char "),
        lastname: z.string().min(4, "last name required 5 char"),
        employecode: z.string().min(4, "required"),
        gender: z.string().min(4, "gender required"),
        location: z.string().min(4, "Location required"),
        department: z.string().min(2, "required department"),
        dateofbirth: z.string().min(5, "Date of birth required"),
        employestatus: z.string().min(3, "Employe status Required"),
        email: z.string().email("required"),
        startdate: z.string().min(5, "required"),
        jobtitle: z.string().min(2, "required"),
        reports: z.string().min(2, "required Reports"),
        checkbox:z.string()
    })
    try {
        const payload = formpayload.parse(formdata1)
        const dataofbirth=format(new Date(payload.dateofbirth), "dd-MM-yyyy")
        const startdate=format(new Date(payload.startdate), "dd-MM-yyyy")
       console.log("this is mine",payload.dateofbirth=dataofbirth)
       payload.dateofbirth=dataofbirth
       payload.startdate=startdate
        return { formdata: payload, error: null }
    } catch (error) {

        return {
            formdata: formdata1,
            error: error.issues.reduce((acc, curr) => {
                let key = curr.path[0]
                acc[key] = curr.message
                return acc

            }, {})
        }
    }
    console.log(formdata)
    // return null

}