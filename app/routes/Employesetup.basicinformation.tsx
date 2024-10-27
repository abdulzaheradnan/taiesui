import React from 'react'
import { ActionFunctionArgs,  } from '@remix-run/node'
import { Form ,useActionData} from '@remix-run/react'

export default function Basicinformation() {
    const actiondata=useActionData()
  return (
    <Form method='post'>

    <div className='w-[850px] h-[686px] border-2 mx-auto p-[30px] rounded-md bg-[#F4F4F4]'>
  <div className='grid grid-cols-2 w-full border-red-400'>
            <div></div>
            <div className='text-right'>

            <button className='h-[36px] w-[36px] shadow-lg bg-[#FFFFFF] rounded-md'>+</button>
            </div>
        </div>
        <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>
            <div>
                <div className='font-bold'>Employe id </div>
                <div className='mt-2'>
                    <input type="text" name="employeid" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='ABCD001'/>
                </div>
                <span className='text-red-600'>{actiondata?.employeerror ? actiondata.employeerror :" "}</span>

            </div>
            <div>
                <div className='font-bold'>Title</div>
                <div className='mt-2'>
                    <input type="text" name="title" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='Ms'/>
                </div>
                <span className='text-red-600'>{actiondata?.titlerror ? actiondata.titlerror :" "}</span>

            </div>

        </div>
        <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>
            <div>
                <div className='text-blue-500 flex'>
                    
                    <span>
                    First Name
                        </span> &nbsp;
                        <span className=''>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4 mt-1">
  <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
  <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
</svg>


                        </span>

                </div>
                <div className='mt-2'>
                    <input type="text" name="firstname" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='Ansilie'/>
                </div>
                <span className='text-red-600'>{actiondata?.firstnameerror ? actiondata.firstnameerror :" "}</span>

            </div>
            <div>
                <div className='font-bold'>Last Name</div>
                <div className='mt-2'>
                    <input type="text" name="lastname" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='Smith'/>
                </div>
                <span className='text-red-600'>{actiondata?.lastnameerror ? actiondata.lastnameerror :" "}</span>

            </div>

        </div>
        <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>
            <div>
                <div className='font-bold'>Email Address</div>
                <div className='mt-2'>
                    <input type="text" name="email" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='anslie.@company.com'/>
                </div>
                <span className='text-red-600'>{actiondata?.emailerror ? actiondata.emailerror :" "}</span>

            </div>
            <div>
                <div className='font-bold'>Phone number</div>
                <div className='mt-2'>
                    <input type="text" name="phone" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='phone number'/>
                </div>
                <span className='text-red-600'>{actiondata?.phoneerror ? actiondata.phoneerror :" "}</span>

            </div>

        </div>
        <div className='grid grid-cols-12  mt-[280px] w-full'>
            <div className='col-span-9  text-right'><button className='w-[81px] h-[40px] border-2 rounded-md bg-[#DEDEDE]'>Skip</button></div>
            <div className='col-span-3 text-right'><button className='w-[146px] h-[40px] border-2  rounded-md bg-[#466AF3] text-white ' type='submit'>save & continue</button></div>

        </div>    </div>
</Form>
  )
}


export const action=async({request}:ActionFunctionArgs)=>{

    const formData=await request.formData()
    const emlpoyeid=formData.get("employeid")
    const title=formData.get("title")
    const firstname=formData.get("firstname")
    const lastname=formData.get("lastname")
    const email=formData.get("email")
    const phone=formData.get("phone")

    
    const errors={}
    const employeidvalidate=/^[a-z\d]{2,6}$/
    const titlevalidate=/^[\w]{4,8}?$/
    const firstnamevalidate=/^[A-Za-z]{6}$/
    const lastnamevalidate=/^[A-Za-z]{6}$/
    const emailvalidate=/^[A-Za-z\d_]{8}(@gmail.com)$/
    const phonevalidate=/^[\d]{10}$/

    if(!emlpoyeid.match(employeidvalidate)){
        errors.employeerror="Employe id must between 2-6 characters and can include digits in it"
        return errors

    }
    if(!title.match(titlevalidate)){
        errors.titlerror="tiltle need to be 4-8 characters"
        return errors

    }
    if(!firstname.match(firstnamevalidate)){
        errors.firstnameerror="firstname need to be 1-6 character"
        
        return errors
    }
    if(!lastname.match(lastnamevalidate)){
        errors.lastnameerror="lastname need to be 1-6 character"
        
        return errors
    }
    if(!email.match(emailvalidate)){
        errors.emailerror="Email need to be min 8 charcters & numbers & _ & @ & .com"
        
        return errors
    }
    if(!phone.match(phonevalidate)){
        errors.phoneerror="Phone number need to be 10 digit"
        
        return errors
    }

    return {emlpoyeid:emlpoyeid,title:title,firstname:firstname,lastname:lastname,email:email,phone:phone}
}