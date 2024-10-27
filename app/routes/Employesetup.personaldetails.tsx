import { Form, useActionData, useNavigate } from '@remix-run/react'
import React from 'react'
import { Button } from '~/components/ui/button'
import {z} from 'zod'
import { ActionFunction } from '@remix-run/node'

export default function Personaldetails() {
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
                  <div className='font-medium'>Date of Birth</div>
                  <div className='mt-2'>
                      <input type="date" name="dateofbirth" id="" className='w-full h-[42px] border-2 rounded-md pl-2'/>
                  </div>
                  <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.dateofbirth : ""}</span><br />

              </div>
              <div>
                  <div className='font-medium'>Age</div>
                  <div className='mt-2  h-[42px] pt-3'>
                    37 year(s) 5 month(s)
                  </div>
                  <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.drivinglicence : ""}</span><br />

              </div>
  
          </div>
          <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>
              <div>
                  <div className='font-medium'>Gender</div>
                  <div className='mt-2'>
                      <select type="text" name="gender" id="" className='w-full h-[42px] border-2 rounded-md pl-2'>
                        <option value="">select</option>
                        <option value="male">male</option>
                        <option value="female">female</option>


                        </select>
                  </div>
                  <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.gender : ""}</span><br />

              </div>
              <div>
                  <div className='font-medium'>Merital Status</div>
                  <div className='mt-2'>
                    <div className='pt-3'>
                       <input type="checkbox"  name='meritalstatus' value="single"/>
                       <label htmlFor="" className='ml-2'>single</label>
                       <input type="checkbox"  name='meritalstatus' value="married" className='ml-4' />
                       <label htmlFor="" className='ml-2'>married</label>
                    </div>
                   
                  </div>
                  <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.meritalstatus : ""}</span><br />

              </div>
             
  
          </div>
          <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>
              <div>
                  <div className='font-medium'>About Me</div>
                  <div className='mt-2'>
                      <textarea type="textarea" name="aboutme" id="" className='w-full h-[100px] border-2 rounded-md pl-1'/>
                  </div>
                  <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.aboutme : ""}</span><br />

              </div>
            
  
          </div>
          <div className='grid grid-cols-12  mt-[130px] w-full'>
              <div className='col-span-9  text-right'><Button className='w-[81px] h-[40px] border-2 rounded-md bg-[#DEDEDE]' type='button' onClick={handlenavigate}>Skip</Button></div>
              <div className='col-span-3 text-right'><Button className='w-[146px] h-[40px] border-2  rounded-md bg-[#466AF3] text-white' type='submit'>save & continue</Button></div>
          </div>    </div>
    </Form>
  )
}

export const action = async ({request}:ActionFunction) => {
    const formPayload = Object.fromEntries(await request.formData())
    const subscriberSchema = z.object({
        dateofbirth: z.string().min(8,"required date of birth"),
        gender: z.string().min(4,"please select your gender"),
        meritalstatus:z.string(),
        aboutme:z.string().min(12,"please explain abouut yoy in two sentence"),

       
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