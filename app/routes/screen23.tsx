import { ActionFunctionArgs } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import React from 'react'
import {designation } from "./designation"
import {grade} from "./grades"
export default function screen23 () {
    const destination:{key:number,value:string}[]=designation
    const grades:{key:number,value:string}[]=grade
    const actiondata=useActionData()
    console.log(actiondata)

  return (
<Form method='post'>
    <div className='grid p-5 max-w-[980px] mt-[93px] mx-auto border-2 rounded-xl sm:mx-auto'>
    <div className='grid grid-cols-12 '>

        <div className='text-left col-span-11 font-bold text-2xl '>Designation Details</div>
        <div className='text-right col-span-1 sm:ml-[20px] md:ml-[40px] '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-right">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </div>

    </div>
<div className='sm:grid sm:grid-cols-2 sm:gap-3 '>

<div>

    <div className='mt-6 mb-2 font-semibold'>Designation Name</div>
    <div className='grid grid-cols-10  gap-3 '>
        <select className='flex text-left border-2 col-span-10 pr-2  h-[42px] items-center justify-end rounded-md pl-1 ' name='designation'>
            {
                destination.map((item)=>{
                    return  <option value={item.value} key={item.key}>{item.value}</option>
                })
            }
            </select>

           


    </div>
</div>
<div>

    <div className='mt-4 mb-2 sm:mt-6 font-semibold'>Grade</div>
    <div className='grid grid-cols-10  gap-3 '>
        <select className='flex text-left border-2 col-span-10 pr-2  h-[42px] items-center justify-end rounded-md pl-1' name='grade'>
{
    grades.map((item)=>{

      return  <option value={item.value} key={item.key}>{item.value}</option>
    })
}
            

        </select>

    </div>
</div>
</div>
<div className='sm:grid sm:grid-cols-10 gap-3'>

<div className='col-span-10'>

    <div className='mt-4 mb-2 font-semibold'>Description</div>
    <div className='grid grid-cols-10  gap-3 '>
        <input type="text" className='text-left border-2 col-span-10 pr-2  h-[42px] items-center justify-end rounded-md pl-2' placeholder='Description' name='description' />

    </div>
</div>

</div>



    <div className='grid grid-cols-8 mt-8 sm:grid-cols-12 '>
        <div className='col-span-6 text-right sm:col-span-11 mr-[20px]'>

            <button className='w-[80px] h-[40px] border-2 rounded-md bg-[#dedede]' type='reset'>Cancel</button>
        </div>
        <div className='col-span-2 text-right sm:col-span-1 mr-[10px]'>

            <button className='w-[80px] h-[40px] bg-[#466af3] border-2 rounded-md text-white' type='submit' >Save</button>
        </div>

    </div>

</div>
</Form>

)
}
export const action=async({request}:ActionFunctionArgs)=>{

const formData=await request.formData()

const designation=formData.get("designation")
const grade=formData.get("grade")
const description=formData.get("description")
console.log(designation,grade,description)

    return {designation:designation,grade:grade,description:description}

}