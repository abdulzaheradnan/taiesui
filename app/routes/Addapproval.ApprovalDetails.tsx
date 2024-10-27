import { ActionFunctionArgs } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import React from 'react'
import {z} from "zod"

export default function AprovalDetails() {
  const actiondata=useActionData()
  console.log(actiondata)
  return (
    <Form method='post'>

    <div className='w-[850px] h-[686px] border-2 rounded-md p-[30px] bg-[#F4F4F4]'>
      <div>
        <div className='font-medium'>Form Name</div>
        <select className='h-[42px] w-full rounded-lg border-2 mt-3 pl-2 bg-[#FFFFFF]' name='fname'>
          <option value="">select</option>
          <option value="addressproof">Address Proof</option>
          <option value="addressproof2">Address Proof2</option>

        </select>
        <span className='text-red-600'>{actiondata?.error?.fname ? actiondata?.error?.fname : ""}</span>
      </div>
      <div className='mt-6'>
        <div className='font-medium' >Approval Names</div>
        <input className='h-[42px] w-full rounded-lg border-2 mt-3 pl-2 bg-[#FFFFFF]' name='approvalname'/>
        <span className='text-red-500'>{actiondata?.error?.approvalname ? actiondata?.error?.approvalname : ""}</span>

      </div>
      <div className='mt-6'>
        <div className='font-medium'>Decription</div>
        <textarea className='h-[100px] w-full rounded-lg border-2 mt-3 pl-2 bg-[#FFFFFF]' name='description'/>
        <span className='text-red-500'>{actiondata?.error?.description ? actiondata?.error?.description : ""}</span>

      </div>
      <div className='grid grid-cols-12 w-full mt-[230px]'>
        <div className='col-span-6 '></div>
        <div className='col-span-6  text-right'>

          <button className='w-[146px] h-[40px] border-2 bg-[#466AF3] rounded-md text-white' type='submit'>Save & Continue</button>

        </div>

      </div>
    </div>
    </Form>
  )
}
export const action=async({request}:ActionFunctionArgs)=>{
  const formData=Object.fromEntries(await request.formData())
  console.log(formData)
  const zodschema=z.object({
    fname:z.string().min(6,"Required Form name and min 6 character"),
    approvalname:z.string().min(6,"Required Approval name min 6 character"),
    description:z.string().min(15,"Required Description min 15 charcter")
  })
try{
  const payload=zodschema.parse(formData)
  return {formdata:payload,error:null}
  }catch(error){
    return {
      payload:formData,
      error:error.issues.reduce((acc,curr)=>{
        const key=curr.path[0]
        acc[key]=curr.message
        return acc
      },{})
    }
    }

  console.log(formData)
  // return formData
  }