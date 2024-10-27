import { ActionFunctionArgs } from '@remix-run/node'
import { Form, useActionData, useNavigate } from '@remix-run/react'
import React from 'react'
import { Button } from '~/components/ui/button'
import { z } from 'zod'

export default function Workexperience() {
    const actiondata = useActionData()
    console.log(actiondata)
    const navigate=useNavigate()
    const handlenavigate=()=>{
        navigate("/Employesetup/basicinformation")
        }
    return (
        <Form method='post'>

            <div className='w-[850px] h-[686px] border-2 mx-auto p-[30px] bg-[#F4F4F4] rounded-md'>
                <div className='grid grid-cols-2 w-full border-red-400'>
                    <div className='font-bold'>Experience</div>
                    <div className='text-right'>

                        <button className='h-[36px] w-[36px] shadow-md rounded-md bg-[#FFFFFF]'>+</button>
                    </div>
                </div>
                <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>
                    <div>
                        <div className='font-medium'>Company Name</div>
                        <div className='mt-2'>
                            <input type="text" name="companyname" id="" className='w-full h-[42px] border-2 rounded-md' />
                        </div>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.companyname : ""}</span><br />

                    </div>
                    <div>
                        <div className='font-medium'>Job Title</div>
                        <div className='mt-2'>
                            <input type="text" name="jobtitle" id="" className='w-full h-[42px] border-2 rounded-md' />
                        </div>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.jobtitle : ""}</span><br />

                    </div>

                </div>
                <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>
                    <div>
                        <div className='font-medium'>From Date</div>
                        <div className='mt-2'>
                            <input type="date" name="fromdate" id="" className='w-full h-[42px] border-2 rounded-md pl-2' />

                        </div>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.fromdate : ""}</span><br />

                    </div>
                    <div>
                        <div className='font-medium'>To Date</div>
                        <div className='mt-2'>
                            <input type="date" name="todate" id="" className='w-full h-[42px] border-2 rounded-md pl-2' />
                        </div>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.todate : ""}</span><br />

                    </div>


                </div>
                <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>
                    <div>
                        <div className='font-medium'>Job Description</div>
                        <div className='mt-2'>
                            <input type="textarea" name="jobdecription" id="" className='w-full h-[100px] border-2 rounded-md pl-2' />

                        </div>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.jobdecription : ""}</span><br />

                    </div>
                    <div>
                        <div className='font-medium'>Relevant</div>
                        <div className='mt-2'>
                            <select type="select" name="relevant" id="" className='w-full h-[42px] border-2 rounded-md pl-2' >
                                <option value="">select</option>
                                <option value="current">current</option>

                            </select>
                        </div>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.relevant : ""}</span><br />

                    </div>


                </div>
                <div className='w-auto  grid grid-cols-2 gap-5 mt-2'>
                    <div>
                        <div className=''>
                            <input type="checkbox" name='checkboxexp' value='experince' />
                            <label className=' ml-[10px]'>Allow multiple Experince Details</label>

                        </div>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.checkboxexp : ""}</span><br />

                    </div>



                </div>

                <div className='grid grid-cols-12  mt-[80px] w-full'>
                    <div className='col-span-9  text-right'><Button className='w-[81px] h-[40px] border-2 rounded-md bg-[#DEDEDE]' type='button' onClick={handlenavigate}>Skip</Button></div>
                    <div className='col-span-3 text-right'><Button className='w-[146px] h-[40px] border-2  rounded-md bg-[#466AF3] text-white' type='submit'>save & continue</Button></div>
                </div>    </div>
        </Form>
    )
}
export const action = async ({ request }: ActionFunctionArgs) => {
    const formPayload = Object.fromEntries(await request.formData())
    const subscriberSchema = z.object({
        companyname: z.string().min(7, "required company name"),
        jobtitle: z.string().min(10, "proper job"),
        fromdate: z.string().min(8, "please Select the date you joined"),
        todate: z.string().min(8, "please Select the date you left"),
        jobdecription: z.string().min(10, "proper job desription"),
        relevant: z.string().min(5, "relevant required"),
        checkboxexp: z.string()

    })
    try {
        const formdata = subscriberSchema.parse(formPayload)

        return { formdata, error: null }
    } catch (error) {

        console.log("error", error.issues)
        return {
            formData: formPayload,
            error: error.issues.reduce((acc, curr) => {
                const key = curr.path[0]
                acc[key] = curr.message
                return acc
            }, {})
        }
    }
}