import { ActionFunctionArgs } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import { MdFormatTextdirectionRToL } from "react-icons/md";
import { FaHeading } from "react-icons/fa";
import { TbListCheck } from "react-icons/tb";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { ImFileText } from "react-icons/im";
import { GoMultiSelect } from "react-icons/go";
import { LuTextCursorInput } from "react-icons/lu";









// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
// } from "~/components/ui/popover"
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";

import React from 'react'
import { z } from 'zod'

export default function Screen14() {
    const actiondata = useActionData()
    console.log(actiondata)
    return (
        <Form method='post'>

            <div className='mx-auto w-[1120px] h-[1266px] border-2 p-[30px] rounded-xl shadow-xl'>
                <div className='w-[264px] h-[28px]  text-[23px] font-semibold text-[#344767]'>Custom Form Template</div>

                <div className='mt-3'>
                    <span className=' text-[#000000]'>Name</span>&nbsp;&nbsp;<span className='text-red-600'>{actiondata?.error?.name ? actiondata?.error?.name : <></>}</span>&nbsp;
                    <input type="text" name='name' className='h-[42px] w-full mt-1  back border-2 border-[#C1C1C1]; rounded-lg pl-2' placeholder='Approval for Employee onboarding' />
                </div>
                <div className='mt-3'>
                    <span className='text-[#000000]'>Template Category</span>&nbsp;&nbsp;<span className='text-red-600'>{actiondata?.error?.category ? actiondata?.error?.category : <></>}</span>
                    <select type="select" name='category' className='h-[42px] w-[505px] mt-1 border-2 rounded-lg pl-2' placeholder='Approval for Employee onboarding'>
                        <option value="">Approval</option>
                        <option value="new">new</option>
                    </select>
                </div>
                <div className='mt-3'>
                    <span className='text-[#000000]'>Brief Description (for your records)</span>&nbsp;&nbsp;<span className='text-red-600'>{actiondata?.error?.description ? actiondata?.error?.description : <></>}</span>
                    <input type="text" name='description' className='h-[42px] w-full mt-1 border-2 rounded-lg pl-2' placeholder='this Form is for employee to complete as a part of their onboarding process' />
                </div>
                <div className='mt-4'>
                    <div className='flex'>

                        <input type="checkbox" name="checkbox" value="activeform" id="" className='w-[18px] h-[18px] mt-1' />
                        <label htmlFor="" className='ml-2  text-[#333333] mb-3'>Form is active(can be Selected for assigning and filling out)</label><br />
                    </div>
                    <div className='flex'>

                        <input type="checkbox" name="checkbox" value="deleteform" id="" className='w-[18px] h-[18px] mt-2' />
                        <label htmlFor="" className='ml-2 mt-1 text-[#333333]'>Allow Employe to delete this form</label>
                    </div>
                    <span className='text-red-600'>{actiondata?.error?.checkbox ? actiondata?.error?.checkbox : <></>}</span>
                </div>
                <div className='text-[#466AF3] mt-2'>Advanced Settings</div>
                <hr className="border-[#C1C1C1] mt-4" />
                <div className='grid grid-cols-4 mt-4'>
                    <div className='col-span-3'>

                        <div className='text-[#344767] font-semibold w-[241px] h-[24px] '>New Employe onboarding</div>
                        <span className='text-[14px] text-[#333333]'>Hello! we are excited for your first day.please help us prepare for your arrival by reviewing and <br /> addressing the questions below.</span>
                    </div>
                    <div className='col-span-1 text-right'>
                        <Popover >
                            <PopoverTrigger className=''><button className='w-[108px] h-[40px] border-2 rounded-md bg-[#466AF3] text-white ' type='button'>+ Add field</button></PopoverTrigger>
                            <PopoverContent className='w-[324px] h-[460px] mr-[200px]  p-0 bg-white  border-2 rounded-lg'>
                                <div className='border-b-2  p-2  flex items-center rounded-t-md hover:bg-slate-100'>
                                <LuTextCursorInput className='size-5'/>&nbsp;&nbsp;&nbsp;
                                    <span>

                                    Text Field
                                    </span>
                                    </div>
                                <div className='border-b-2 p-2 flex items-center hover:bg-slate-100'>
                                <ImFileText className='size-5'/>&nbsp;&nbsp;&nbsp;
                                    <span>

                                    Text Area
                                    </span>
                                    </div>
                                <div className='border-b-2 p-2 flex items-center hover:bg-slate-100'>
                                    <MdFormatTextdirectionRToL className='size-5 float-left' />&nbsp;&nbsp;&nbsp;
                                    <span>

                                        Paragraph
                                    </span>
                                </div>
                                <div className='border-b-2 p-2 items-start flex hover:bg-slate-100'>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 float-left font-bold">
                                        <path fillRule="evenodd" d="M9.493 2.852a.75.75 0 0 0-1.486-.204L7.545 6H4.198a.75.75 0 0 0 0 1.5h3.14l-.69 5H3.302a.75.75 0 0 0 0 1.5h3.14l-.435 3.148a.75.75 0 0 0 1.486.204L7.955 14h2.986l-.434 3.148a.75.75 0 0 0 1.486.204L12.456 14h3.346a.75.75 0 0 0 0-1.5h-3.14l.69-5h3.346a.75.75 0 0 0 0-1.5h-3.14l.435-3.148a.75.75 0 0 0-1.486-.204L12.045 6H9.059l.434-3.148ZM8.852 7.5l-.69 5h2.986l.69-5H8.852Z" clipRule="evenodd" />
                                    </svg>&nbsp;&nbsp;&nbsp;
                                    <span>
                                        Number
                                    </span>
                                </div>
                                <div className='border-b-2 p-2 flex items-center hover:bg-slate-100'>
                                    <FaHeading className='size-5' />&nbsp;&nbsp;&nbsp;

                                    <span>
                                        Header
                                    </span>
                                </div>
                                <div className='border-b-2 p-2 flex items-center hover:bg-slate-100'>
                                <GoMultiSelect className='size-5' />&nbsp;&nbsp;&nbsp;
                                    <span>

                                    Select
                                    </span>
                                    </div>
                                <div className='border-b-2 p-2 flex items-center hover:bg-slate-100'>
                                <TbListCheck className='size-5'/>&nbsp;&nbsp;&nbsp;
                                        <span>

                                    Checkbox Group
                                        </span>
                                    </div>
                                <div className='border-b-2 p-2 flex items-center hover:bg-slate-100'>
                                <MdOutlineFormatListBulleted className='size-5'/>&nbsp;&nbsp;&nbsp;
                                        <span>

                                    Radio Group
                                        </span>
                                    </div>
                                <div className='border-b-2 p-2 flex hover:bg-slate-100'>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 float-left">
                                        <path d="M9.25 13.25a.75.75 0 0 0 1.5 0V4.636l2.955 3.129a.75.75 0 0 0 1.09-1.03l-4.25-4.5a.75.75 0 0 0-1.09 0l-4.25 4.5a.75.75 0 1 0 1.09 1.03L9.25 4.636v8.614Z" />
                                        <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                                    </svg>&nbsp;&nbsp;&nbsp;
                                    <span>

                                        File Upload
                                    </span>
                                </div>
                                <div className='border-b-2 p-2 flex hover:bg-slate-100'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 float-left">
                                        <path d="M5.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V12ZM6 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H6ZM7.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75V12ZM8 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H8ZM9.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V10ZM10 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H10ZM9.25 14a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V14ZM12 9.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75H12ZM11.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V12ZM12 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H12ZM13.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H14a.75.75 0 0 1-.75-.75V10ZM14 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H14Z" />
                                        <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd" />
                                    </svg>&nbsp;&nbsp;&nbsp;
                                    <span>

                                        Date Field
                                    </span>
                                </div>
                                <div className='border-b-0 p-2 flex hover:bg-slate-100'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 float-left">
                                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                                    </svg>&nbsp;&nbsp;&nbsp;
                                    <span>

                                        star Rating
                                    </span>
                                </div>
                            </PopoverContent>

                        </Popover>

                    </div>
                </div>
                <div className='text-[#1B72E8] w-[264px] h-[19px] mt-4 text-[14px]'>Important Fields-Mandatory Fields</div>
                <div className='mt-4 grid grid-cols-2 gap-4'>
                    <div className='col-span-1'>

                        <span className='text-[#000000] font-[publicSans]'>First Name</span>&nbsp;&nbsp;<span className='text-red-600'>{actiondata?.error?.firstname ? actiondata?.error?.firstname : <></>}</span>
                        <input type="text" name='firstname' className='w-[505px] h-[42px] rounded-lg border-2 mt-1 pl-2' />
                    </div>
                    <div className='col-span-1'>

                        <span className='text-[#000000] font-[publicSans]'>Last Name</span>&nbsp;&nbsp;<span className='text-red-600'>{actiondata?.error?.lastname ? actiondata?.error?.lastname : <></>}</span>
                        <input type="text" name='lastname' className='w-[505px] h-[42px] rounded-lg border-2 mt-1 pl-2' />
                    </div>
                    <div className='col-span-1'>

                        <span className='text-[#000000] font-[publicSans]'>Employe Code</span>&nbsp;&nbsp;<span className='text-red-600'>{actiondata?.error?.employecode ? actiondata?.error?.employecode : <></>}</span>
                        <input type="text" name='employecode' className='w-[505px] h-[42px] rounded-lg border-2 mt-1' />
                    </div>
                    <div className='col-span-1'>

                        <span className='text-[#000000] font-[publicSans]'>Gender</span>&nbsp;&nbsp;<span className='text-red-600'>{actiondata?.error?.gender ? actiondata?.error?.gender : <></>}</span>
                        <select type="text" name='gender' className='w-[505px] h-[42px] rounded-lg border-2 mt-1 pl-2' >
                            <option value="">select</option>
                            <option value="male">male</option>
                            <option value="female">female</option>

                        </select>
                    </div>
                    <div className='col-span-1'>

                        <span className='text-[#000000] font-[publicSans]'>Location</span>&nbsp;&nbsp;<span className='text-red-600'>{actiondata?.error?.location ? actiondata?.error?.location : <></>}</span>
                        <select type="text" name='location' className='w-[505px] h-[42px] rounded-lg border-2 mt-1 pl-2' >
                            <option value="">select</option>
                            <option value="area">area</option>


                        </select>
                    </div>
                    <div className='col-span-1'>

                        <span className='text-[#000000] font-[publicSans]'>department</span>&nbsp;&nbsp;<span className='text-red-600'>{actiondata?.error?.department ? actiondata?.error?.department : <></>}</span>
                        <select type="text" name='department' className='w-[505px] h-[42px] rounded-lg border-2 mt-1 pl-2' >
                            <option value="">select</option>
                            <option value="it">it</option>
                            <option value="nonit">nonit</option>

                        </select>
                    </div>
                    <div className='col-span-1'>

                        <span className='text-[#000000] font-[publicSans]'>
                            Date of birth
                        </span>&nbsp;&nbsp;<span className='text-red-600'>{actiondata?.error?.dateofbirth ? actiondata?.error?.dateofbirth : <></>}</span>
                        <input type="date" name='dateofbirth' className='w-[505px] h-[42px] rounded-lg border-2 mt-1 pl-2' />
                    </div>
                    <div className='col-span-1'>

                        <span className='text-[#000000] font-[publicSans]'>Employe Status</span>&nbsp;&nbsp;<span className='text-red-600'>{actiondata?.error?.status ? actiondata?.error?.status : <></>}</span>
                        <select type="text" name='status' className='w-[505px] h-[42px] rounded-lg border-2 mt-1 pl-2' >
                            <option value="">select</option>
                            <option value="developer">developer</option>
                            <option value="leader">leader</option>

                        </select>
                    </div>

                </div>
                <div className='text-[#1B72E8] mt-5 font-publicsans'>Optional fields</div>
                <div className='grid grid-cols-2 mt-3 gap-4'>
                    <div className='col-span-1'>

                        <span className='text-[#000000] font-[publicSans]'>Email Address</span>&nbsp;&nbsp;<span className='text-red-600'>{actiondata?.error?.email ? actiondata?.error?.email : <></>}</span>
                        <input type="text" name='email' className='w-[505px] h-[42px] rounded-lg border-2 mt-1' />
                    </div>
                    <div className='col-span-1 '>

                        <span className='text-[#000000] font-[publicSans]'>Start Date</span>&nbsp;&nbsp;<span className='text-red-600'>{actiondata?.error?.startdate ? actiondata?.error?.startdate : <></>}</span>
                        <input type="date" name='startdate' className='w-[505px] h-[42px] rounded-lg border-2 mt-1 pl-2' />
                    </div>
                    <div className='col-span-1'>

                        <span className='text-[#000000] font-[publicSans]'>position/job Title </span>&nbsp;&nbsp;<span className='text-red-600'>{actiondata?.error?.jobtitle ? actiondata?.error?.jobtitle : <></>}</span>
                        <select type="text" name='jobtitle' className='w-[505px] h-[42px] rounded-lg border-2 mt-1 pl-2' >
                            <option value="">select</option>
                            <option value="it">it</option>
                            <option value="nonit">nonit</option>

                        </select>
                    </div>
                    <div className='col-span-1'>

                        <span className='text-[#000000] font-[publicSans]'>Reports to</span>&nbsp;&nbsp;<span className='text-red-600'>{actiondata?.error?.reports ? actiondata?.error?.reports : <></>}</span>
                        <select type="text" name='reports' className='w-[505px] h-[42px] rounded-lg border-2 mt-1 pl-2' >
                            <option value="">select</option>
                            <option value="project">project</option>
                        </select>
                    </div>
                </div>
                <div className='grid grid-cols-4  mt-12'>
                    <div className='col-span-3'>
                    </div>
                    <div className='col-span-1 gap-1 text-right'>
                        <button className='w-[66px] h-[40px] border-2 rounded-md bg-[#466AF3] text-white mr-6 ' type='submit'>Save</button>
                        <button className='w-[80px] h-[40px] border-2 rounded-md bg-[#DEDEDE]' type='button'>Cancel</button>
                    </div>


                </div>

            </div>
        </Form>
    )
}

export const action = async ({ request }: ActionFunctionArgs) => {
    const formdata = Object.fromEntries(await request.formData())
    const formpayload = z.object({
        name: z.string().min(5, "Required 5 character name"),
        category: z.string().min(3, "required Category"),
        description: z.string().min(6, "required Description"),
        checkbox: z.string().min(4, "required this one Field"),
        firstname: z.string().min(4, "required First name"),
        lastname: z.string().min(4, "required lastname"),
        employecode: z.string().min(3, "required Employe code"),
        gender: z.string().min(3, "required Gender"),
        location: z.string().min(4, "required Location"),
        department: z.string().min(2, "required Department"),
        dateofbirth: z.string().min(4, "Required Date of birth"),
        status: z.string().min(4, "required Status"),
        email: z.string().email(),
        startdate: z.string().min(4, "required Start Date"),
        jobtitle: z.string().min(2, "required job title"),
        reports: z.string().min(3, "Required Repors project")


    })
    try {

        const payload = formpayload.parse(formdata)
        return { formdata: payload, error: null }
    } catch (error) {
        return {
            formdata: formdata,
            error: error.issues.reduce((acc, curr) => {
                let key = curr.path[0]
                acc[key] = curr.message
                return acc
            }, {})
        }
    }
    console.log(formdata)
    return null
}