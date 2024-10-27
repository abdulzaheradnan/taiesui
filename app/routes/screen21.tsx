import { ActionFunctionArgs } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import React from 'react'

export default function Screen19() {
    const actiondata=useActionData()
    console.log(actiondata)
    return (

            <Form method='post'>
        <div className='grid p-5 max-w-[980px] mt-[93px] mx-auto border-2 rounded-xl sm:mx-auto'>
            <div className='grid grid-cols-12 '>

                <div className='text-left col-span-11 font-bold text-2xl '>Department Details</div>
                <div className='text-right col-span-1 sm:ml-[20px] md:ml-[40px] '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-right">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>

            </div>
<div className='sm:grid sm:grid-cols-2 sm:gap-3 '>

<div>

            <div className='mt-6 mb-2 font-semibold'>Parent Department</div>
            <div className='grid grid-cols-10  gap-3 '>
                <select className='flex text-left border-2 col-span-10 pr-2  h-[42px] items-center justify-end rounded-md pl-1 ' name="parentdepartment">

                    <option value="it">IT </option>
                    <option value="two">two</option>
                    <option value="three">three</option>

                </select>

            </div>
</div>
<div>

            <div className='mt-4 mb-2 sm:mt-6 font-semibold'>Department</div>
            <div className='grid grid-cols-10  gap-3 '>
                <select className='flex text-left border-2 col-span-10 pr-2  h-[42px] items-center justify-end rounded-md pl-1' name="department">

                    <option value="software">Software engineer/development</option>
                    <option value="two">two</option>
                    <option value="three">three</option>

                </select>

            </div>
</div>
</div>
<div className='sm:grid sm:grid-cols-2 gap-3'>

<div>

            <div className='mt-4 mb-2 font-semibold'>Department Lead</div>
            <div className='grid grid-cols-10  gap-3 '>
                <input type="text" className='text-left border-2 col-span-10 pr-2  h-[42px] items-center justify-end rounded-md pl-2' placeholder='Department Lead' name="departmentlead" />

            </div>
</div>
<div>

            <div className='mt-4 mb-2 font-semibold'>Mail alias</div>
            <div className='grid grid-cols-10  gap-3 '>
                <input type="text" className='text-left border-2 col-span-10 pr-2  h-[42px] items-center justify-end rounded-md pl-2' placeholder='Email' name="email"/>

            </div>
</div>
</div>



            <div className='grid grid-cols-8 mt-8 sm:grid-cols-12 '>
                <div className='col-span-6 text-right sm:col-span-11 mr-[20px]'>

                    <button className='w-[80px] h-[40px] border-2 rounded-md bg-[#dedede]'>Cancel</button>
                </div>
                <div className='col-span-2 text-right sm:col-span-1 mr-[10px]'>

                    <button className='w-[80px] h-[40px] bg-[#466af3] border-2 rounded-md text-white' type='submit'>Save</button>
                </div>

            </div>
        </div>
            </Form>

    )
}

export const action=async({request}:ActionFunctionArgs)=>{

    const formData=await request.formData()
    const parentdepartment=formData.get("parentdepartment")
const department=formData.get("department")
    const departmentlead=formData.get("departmentlead")
    const email=formData.get("email")
    console.log(departmentlead,email)
return {departmentlead:departmentlead,email:email,department:department,parentdepartment:parentdepartment}

}