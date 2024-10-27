import { ActionFunctionArgs } from '@remix-run/node'
import { Form, useActionData, useNavigate } from '@remix-run/react'
import React from 'react'
import {z} from 'zod'
import { Button } from '~/components/ui/button'


export default function Identitycard() {
    const actiondata=useActionData()
    console.log(actiondata)
    const navigate=useNavigate()
    const handlenavigate=()=>{
        navigate("/Employesetup/basicinformation")
        }
  return (
    <Form method='post'>

    <div className='w-[850px] h-[686px] border-2 mx-auto p-[30px] bg-[#F4F4F4] rounded-md'>
    <div className='grid grid-cols-2 w-full border-red-400'>
              <div></div>
              <div className='text-right'>
  
              <button className='h-[36px] w-[36px] shadow-md rounded-md bg-[#FFFFFF]'>+</button>
              </div>
          </div>
          <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>
              <div>
                  <div className='font-medium'>Passport</div>
                  <div className='mt-2'>
                      <input type="text" name="passport" id="" className='w-full h-[42px] border-2 rounded-md'/>
                  </div>
                  <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.passport : ""}</span><br />

              </div>
              <div>
                  <div className='font-medium'>Driving licence</div>
                  <div className='mt-2'>
                      <input type="text" name="drivinglicence" id="" className='w-full h-[42px] border-2 rounded-md'/>
                  </div>
                  <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.drivinglicence : ""}</span><br />

              </div>
  
          </div>
          <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>
              <div>
                  <div className='font-medium'>Biometrics Recidence permit</div>
                  <div className='mt-2'>
                      <select type="text" name="biometricsrecidencepermit" id="" className='w-full h-[42px] border-2 rounded-md pl-2'>
                        <option value="">select</option>
                        <option value="nanded maharashtra india karbala">nanded maharashtra india karbala</option>

                        </select>
                  </div>
                  <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.biometricsrecidencepermit : ""}</span><br />

              </div>
             
  
          </div>
     
          <div className='grid grid-cols-12  mt-[310px] w-full'>
              <div className='col-span-9  text-right'><Button className='w-[81px] h-[40px] border-2 rounded-md bg-[#DEDEDE]' type='button' onClick={handlenavigate}>Skip</Button></div>
              <div className='col-span-3 text-right'><Button className='w-[146px] h-[40px] border-2  rounded-md bg-[#466AF3] text-white'>save & continue</Button></div>
          </div>    </div>
    </Form>
  )
}
export const action = async ({request}:ActionFunctionArgs) => {
    const formPayload = Object.fromEntries(await request.formData())
    const subscriberSchema = z.object({
      passport: z.string().min(7,"passport id need to be verify"),
      drivinglicence: z.string().min(10,"required driving licence"),
      biometricsrecidencepermit:z.string().min(10,"recidence permits need to be proper address")
    })
    try {
      const formdata=subscriberSchema.parse(formPayload)
      
      return {formdata,error:null}
    } catch (error ) {
     
  console.log("error",error.issues)
  return {
      formData:formPayload,
      error:error.issues.reduce((acc,curr)=>{
          const key=curr.path[0]
          acc[key]=curr.message
          return acc
      },{})
      
  }
     
    
  
  }
  }