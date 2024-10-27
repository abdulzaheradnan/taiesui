import { ActionFunctionArgs } from '@remix-run/node'
import { Form } from '@remix-run/react'
import React from 'react'

export default function Configuredetails() {
  return (
    <Form method='post'>

    <div className='w-[850px] h-[686px]  rounded-md bg-[#F4F4F4] p-[30px]'>
        <div>
            <div className='font-medium'>Approvals</div>
            <div className='mt-1'>You can either configure approver levels or allow the system to auto approve / reject the record</div>
        </div>
        <div className='w-full grid grid-cols-2 gap-7 mt-4'>
            <div className='flex'>
                <div className='w-[28px] h-[28px] rounded-xl border-2 text-center mt-2'>1</div>
                <select name="report" id="" className='w-[340px] h-[42px] border-2 rounded-md ml-3 pl-2'>
                    <option value="">select</option>
                    <option value="reportingto">Reporting to</option>
                </select>
            </div>
            <div className='flex'>
                <select name="levels" id="" className='w-[340px] h-[42px] border-2 rounded-md mr-3 pl-2'>
                    <option value="">select</option>
                    <option value="singlelevels">Single levels</option>
                </select>
                <div className='w-[28px] h-[28px] rounded-xl border-2 text-center mt-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 ml-0.5 mt-0.5 ">
                        <path d="M2 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2Z" />
                        <path fillRule="evenodd" d="M2 7.5h16l-.811 7.71a2 2 0 0 1-1.99 1.79H4.802a2 2 0 0 1-1.99-1.79L2 7.5Zm5.22 1.72a.75.75 0 0 1 1.06 0L10 10.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L11.06 12l1.72 1.72a.75.75 0 1 1-1.06 1.06L10 13.06l-1.72 1.72a.75.75 0 0 1-1.06-1.06L8.94 12l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>



                </div>
            </div>
        </div>
        <div className='mt-6'>
            <button className='w-[163px] h-[40px] bg-[#466AF3] rounded-md text-white' type='submit'>Add Approval levels</button>
        </div>
        <div className='mt-4'>
            
<label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="enable" className="sr-only peer" name='togglebtn' />
  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Enable follow-up ption for this approval</span>
</label>

        </div>
    </div>
    </Form>

  )
}
export const action=async({request}:ActionFunctionArgs)=>{
    const formdata=Object.fromEntries(await request.formData())
    console.log(formdata)
    return null
    }