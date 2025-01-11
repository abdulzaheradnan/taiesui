import { ActionFunctionArgs } from '@remix-run/node'
import {  Form, useActionData } from '@remix-run/react'
import { error } from 'console'
import React from 'react'
import {z} from "zod"

export default function Screen19two() {
    const actiondata=useActionData()
    console.log(actiondata)
    return (
        <Form method='post'>

            <div className='w-[1120px] sm:h-[1990px] h-auto border-2 rounded-lg mx-auto sm:p-[30px] p-[40px]'>
                <h1 className='font-semibold text-[24px]'>Company Timesheet Template</h1>
                <div className='mt-3'>
                    <span className='font-semibold'>Name</span> &nbsp;<span className='text-red-500'>{actiondata?.error?.name ? actiondata?.error?.name :<></>}</span>
                    <input type="text" name='name' className='w-full h-[42px] border-2 rounded-lg mt-2' />
                </div>
                <div className='mt-3'>
                    <span className='font-semibold'>Notes</span>&nbsp;<span className='text-red-500'>{actiondata?.error?.notes ? actiondata?.error?.notes :<></>}</span>
                    <input type="text" name='notes' className='w-full h-[82px] border-2 rounded-lg mt-2' />
                </div>
                <div className='mt-3'>
                    <span className='font-semibold'>Frequency</span>&nbsp;<span className='text-red-500'>{actiondata?.error?.frequency ? actiondata?.error?.frequency :<></>}</span><br />
                    <select type="text" name='frequency' className='w-[505px] h-[42px] border-2 rounded-lg mt-2 pl-2' >
                        <option value="">select</option>

                        <option value="weekly">weekly</option>
                    </select><br />
                    <span className='text-[14px] mt-4 font-light text-[#666666]'>choose the Frequency (Note: this should match your payroll pay periods)</span>
                </div>
                <hr className=" bg-[#C1C1C1] border-t-2 dark:bg-gray-700 mt-4" />
                <div className='grid sm:grid-cols-2 mt-3 grid-cols-1'>
                    <div>

                        <span className='font-semibold'>Entry method</span>&nbsp;<span className='text-red-500'>{actiondata?.error?.entrymethod ? actiondata?.error?.entrymethod :<></>}</span><br />
                        <select name="entrymethod" id="" className=' w-[505px] h-[42px] border-2 rounded-lg mt-2'>
                            <option value="">simple</option>
                            <option value="simple">simple2</option>
                        </select><br />
                        <span className='text-[14px] mt-4 font-light text-[#666666]'>specify how employes will enter dail timey in there timesheets</span>
                    </div>
                    <div className='items-center  pt-10'>
                        <span className='text-[14px] font-light text-[#666666]'>
                            <span className='font-bold'>Simple -</span>
                            employees only need to enter a total time (in hours) for each day.
                        </span>
                    </div>
                </div>
                <hr className=" bg-[#C1C1C1] border-t-2 dark:bg-gray-700 mt-4" />
                <div className='mt-3'>
                    <span className='font-semibold'>Rounding method</span>&nbsp;<span className='text-red-500'>{actiondata?.error?.roundingmethod ? actiondata?.error?.roundingmethod :<></>}</span><br />
                    <select name="roundingmethod" id="" className=' w-[505px] h-[42px] border-2 rounded-lg mt-2'>
                        <option value="">select</option>
                        <option value="no rounding">no rounding</option></select><br />
                    <span className='text-[14px] mt-4 font-light text-[#666666]'>specify how Time entries will be rounded during entry.</span>
                </div>
                <div className='mt-3'>
                    <span className='font-semibold'>Round To Nearest</span>&nbsp;<span className='text-red-500'>{actiondata?.error?.roundtonearest ? actiondata?.error?.roundtonearest :<></>}</span><br />
                    <select name="roundtonearest" id="" className=' w-[505px] h-[42px] border-2 rounded-lg mt-2'>
                        <option value="">select</option>
                        <option value="no rounding">no rounding</option>
                        </select><br />
                    <span className='text-[14px] mt-4 font-light text-[#666666]'>specify how Time entries will be rounded during entry.</span>
                </div>
                <hr className=" bg-[#C1C1C1] border-t-2 dark:bg-gray-700 mt-4" />
                <div>

                    <div className='mt-4 '>
                        <div className='flex items-center'>

                            <input type="checkbox" name='chekbox' className='w-[20px] h-[20px]' />
                            <label htmlFor="" className='ml-2 pb-4 w-[200px] h-[20px] '>template active</label><br />
                        </div>
                        <div className="text-[14px] font-light ml-7 mt-1 text-[#666666]">warning: inactive template will not generate timesheet for your employees to fill in</div>
                    </div>

                    <div className='mt-4 '>
                        <div className='flex items-center'>

                            <input type="checkbox"name='chekbox' className='w-[20px] h-[20px]' />
                            <label htmlFor="" className='ml-2 pb-4 w-[200px] h-[20px] '>Enable Time Clocking</label><br />
                        </div>
                        <div className="text-[14px] font-light ml-7 mt-1 text-[#666666]">enable Clocking in and out via the employe portal or teas timeclock interface</div>
                    </div>

                    <div className='mt-4 '>
                        <div className='flex items-center'>

                            <input type="checkbox" name='chekbox' className='w-[20px] h-[20px]' />
                            <label htmlFor="" className='ml-2 pb-4 w-[200px] h-[20px] '>Auto Lock Sequences</label><br />
                        </div>
                        <div className="text-[14px] font-light ml-7 mt-1 text-[#666666]">If This is checked any sequence genrated from the template will automaticaly be locked whenever all timesheets in the sequence have been marked approved or processed</div>
                    </div>
                    <div className='mt-4 '>
                        <div className='flex items-center'>

                            <input type="checkbox" name='chekbox' className='w-[20px] h-[20px]' />
                            <label htmlFor="" className='ml-2 pb-4 w-[200px] h-[20px] '>Auto Create Sequences</label><br />
                        </div>
                        <div className="text-[14px] font-light ml-7 mt-1 text-[#666666]">If This is checked new sequences will automatically genrated and old  sequence will be automatocally closed  according to the setting below.</div>
                    </div>
                    &nbsp;<span className='text-red-500'>{actiondata?.error?.chekbox ? actiondata?.error?.chekbox + " Select one Of These" :<></>}</span>

                </div>
                <hr className=" bg-[#C1C1C1] border-t-2 dark:bg-gray-700 mt-4 mb-4" />
                <span className='font-semibold mt-4'>Notifications</span>&nbsp;<span className='text-red-500'>{actiondata?.error?.chekbox1 ? actiondata?.error?.chekbox1 + " Select One of these" :<></>}</span>
                <div>

                    <div className='mt-4 '>
                        <div className='flex items-center'>

                            <input type="checkbox"name='chekbox1' className='w-[20px] h-[20px]' />
                            <label htmlFor="" className='ml-2 pb-4 w-full h-[20px] '>Notify employees when a new sequence is created</label><br />
                        </div>
                        <div className="text-[14px] font-light ml-7 mt-1 text-[#666666]">If checked and system is automatically send an email to all applicable employees advising them that a new timesheet sequence has been created that they can start entering times into.</div>
                    </div>

                    <div className='mt-4 '>
                        <div className='flex items-center'>

                            <input type="checkbox" name='chekbox1' className='w-[20px] h-[20px]' />
                            <label htmlFor="" className='ml-2 pb-4 w-full h-[20px] '>Notify admin when an employee completes a timesheet</label><br />
                        </div>
                        <div className="text-[14px] font-light ml-7 mt-1 text-[#666666]">If checked and system will automatically  send an email to all the sequence admins advising them that all employe has completed a timesheet.(warning: Turing on can result in lots of emails every pay period).</div>
                    </div>

                    <div className='mt-4 '>
                        <div className='flex items-center'>

                            <input type="checkbox" name='chekbox1' className='w-[20px] h-[20px] border-2' />
                            <label htmlFor="" className='ml-2 pb-4 w-full h-[20px] '>Send Reminders for Timesheets</label><br />
                        </div>
                        <div className="text-[14px] font-light ml-7 mt-1 text-[#666666]">If checked the system will automatically send a reminder email to all appplicable employees if they havent submitted a timehseet on the last day of sequence(site admins will also get an email listing employees who have not submitted a timesheet yet).</div>
                    </div>
                </div>
                <hr className=" bg-[#C1C1C1] border-t-2 dark:bg-gray-700 mt-4 mb-4" />
                <span className='font-semibold'>Timesheet Approvals</span>
                <div className='grid sm:grid-cols-3 grid-cols-1'>
                    <div className='mt-2'>
                        <span>Admin users who can approve</span>&nbsp;<span className='text-red-500'>{actiondata?.error?.adminapprove ? actiondata?.error?.adminapprove :<></>}</span><br />
                        <select name="adminapprove" id="" className='w-[340px] h-[42px] border-2 rounded-md pl-2 mt-1'>
                            <option value="">select</option>
                            <option value="three">three</option>
                        </select><br />
                        <span className='text-[12px] text-[#666666] p-1'>
                            choose the tease adminstrative users who can approve timesheets created  by this template(They can only approve employees in there authorised department.)
                        </span>
                    </div>
                    <div className='mt-2'>
                        <span>Employees  who can approve</span>&nbsp;<span className='text-red-500'>{actiondata?.error?.employeapprove ? actiondata?.error?.employeapprove  :<></>}</span><br />
                        <select name="employeapprove" id="" className='w-[340px] h-[42px] border-2 rounded-md pl-2 mt-1'>
                            <option value="">select</option>
                            <option value="one">one</option>
                        </select><br />
                        <span className='text-[12px] text-[#666666] p-1'>
                            choose any employees who can approve timesheet created by this template(they can approve all employees using this template)
                        </span>
                    </div>
                    <div className='mt-2'>
                        <span>Employees  who can view</span>&nbsp;<span className='text-red-500'>{actiondata?.error?.employeview ? actiondata?.error?.employeview  :<></>}</span><br />
                        <select name="employeview" id="" className='w-[340px] h-[42px] border-2 rounded-md pl-2 mt-1'>
                            <option value="">select</option>
                            <option value="two">two</option>
                        </select><br />
                        <span className='text-[12px] p-1 text-[#666666]'>
                            choose any employees who can view who can view timsheet created by this template.(they canview all a employees using the template)
                        </span>
                    </div>
                </div>
                <div className='mt-4 '>
                    <div className='flex items-center'>

                        <input type="checkbox" name='checkbox2' className='w-[20px] h-[20px]' />
                        <label htmlFor="" className='ml-2 pb-4 w-full h-[20px] '>Direct superviser the employe reports to can view or approve timesheets that are based on this template</label><br />
                    </div>
                    <div className="text-[14px] font-light ml-7 mt-1 text-[#666666]">If checked any employees who use this template can have their direct managers/supervisers( thatthey reports to) view or approve thire timesheets.</div>
                        &nbsp;<span className='text-red-500'>{actiondata?.error?.checkbox2 ? actiondata?.error?.checkbox2  :<></>}</span>
                </div>
                <hr className=" bg-[#C1C1C1] border-t-2 dark:bg-gray-700 mt-4 mb-4" />
                <div className='mt-2'>
                    <span>Export Format</span>&nbsp;<span className='text-red-500'>{actiondata?.error?.formate ? actiondata?.error?.formate  :<></>}</span><br />
                    <select name="formate" id="" className='w-[505px] h-[42px] border-2 rounded-md pl-2 mt-2'>
                        <option value="">select</option>
                        <option value="formate">formate</option>
                    </select><br />
                    <span className='text-[12px] p-1 text-[#666666]'>
                        Choose the format that you wished to export your timesheet sequence
                    </span>
                </div>
                <div className='mt-2'>
                    <span className=''>Last Timesheet period Ended on</span>&nbsp;<span className='text-red-500'>{actiondata?.error?.periodend ? actiondata?.error?.periodend  :<></>}</span><br />
                    <input name="periodend" type='date' id="" className='w-[505px] h-[42px] border-2 rounded-md pl-2 mt-2'>
                    </input><br />
                    <span className='text-[12px] p-1 text-[#666666]'>
                        Last  day of the timesheet run.  the timesheet run will start the the day after this(Note: This field canot be manually edited once a run has started)
                    </span>
                </div>
                <hr className=" bg-[#C1C1C1] border-t-2 dark:bg-gray-700 mt-4 mb-4" />
                <div className='grid  grid-cols-4'>
                    <div className='col-span-3 text-right'>
                    </div>
                    <div className='col-span-1 text-right mt-1 '>
                        <button className='w-[66px] h-[40px] border-2 rounded-md text-white bg-[#466AF3] mr-6' type='submit'>save</button>

                        <button className='w-[80px] h-[40px] border-2 rounded-md bg-[#DEDEDE]' type='button'>cancel</button>
                    </div>
                </div>

            </div>
        </Form>
    )
}
export const action=async({request}:ActionFunctionArgs)=>{
    const formdata=Object.fromEntries(await request.formData())
    const formpayload=z.object({
        name:z.string().min(4,"Required name"),
        notes:z.string().min(5,"required Notes"),
        frequency:z.string().min(4,"required freuqency"),
        entrymethod:z.string().min(4,"required Entry method"),
        roundingmethod:z.string().min(4,"required Rounding method"),
        roundtonearest:z.string().min(4,"required Nearest roung"),
        chekbox:z.string().min(1,"Please Select one method"),
        chekbox1:z.string().min(1,"please select one of these"),
        adminapprove:z.string().min(1,"required"),
        employeapprove:z.string().min(1,"required"),
        employeview:z.string().min(1,"required"),
        checkbox2:z.string().min(1,"required this field"),
        formate:z.string().min(2,"required Format"),
        periodend:z.string().min(2,"required")
    })

    try{
        const formdatapayload=formpayload.parse(formdata)
        return{formdata:formdatapayload,error:null}
    }catch(error){
        return{
            formdata:formdata,
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