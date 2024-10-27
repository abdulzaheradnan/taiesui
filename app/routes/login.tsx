import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node'
import { useActionData, useLoaderData} from '@remix-run/react'
import { Form } from '@remix-run/react'
import React, { useEffect, useState } from 'react'
import {Logindata} from "./logindata"

export const action=async({request}:ActionFunctionArgs)=>{
    const formData=await request.formData()
      let firstname=String(formData.get("firstname"))
    let lastname=String(formData.get("lastname"))
    
    let errors:{firstname:string,lastname:string}={}
    if(!firstname){
        errors.firstname="email required"

    }else if(!lastname){
        errors.lastname="required last name"

    }
    console.log("this is object",firstname,lastname)
return {firstname:firstname,lastname:lastname,errors}
}
export default function Login  () {
    const actiondata=useActionData()
    // console.log(actiondata)
let emailerror=null
let passworderror=null
emailerror=actiondata?.errors.firstname
passworderror=actiondata?.errors.lastname


  return (
    <div>

    <div>
       <nav className='flex justify-between  bg-red-600'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9W1xTscEcGKYWa8Ksx4eU7mOh-Tyk-uRVvw&s" alt="" className='h-10 pt-3 rounded-s' />
        <ul className='px-28 flex p-3 text-white space-x-11 justify-end'>

        <li className='mx-2 cursor-pointer'>home</li>
        <li className='mx-2 cursor-pointer'>about</li>
        <li className='mx-2 cursor-pointer'>contact us</li>

        </ul>
       </nav>
       <main className=''>
        <div className='bg-red-300 h-76 pl-9 py-60'>

        <div  className='text-6xl'>Best React Cource in the Town</div>
        
        <p className='pt-2 ml-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. us consectetur! Rem, nam voluptatem do.</p>
        <div className='buttons flex space-x-1 pt-3 ml-1'>
            <button className='bg-red-600 w-20 rounded-xl h-10 hover:bg-red-400'>Buy</button>
            <button className='bg-red-600 w-20 rounded-xl h-10 hover:bg-red-400'>Contact</button>

        </div>
        </div>
       </main>
    </div>
    {/* <div>
        <Form method="post">
        <label htmlFor="">firstname</label>
        <input type="text"  name='firstname' className='border-2'/>{" "} {emailerror && (<span className='color-red'>{emailerror}</span>)}<br />
        <label htmlFor="">lastname</label>
        <input type="text" name='lastname' className='border-2'/> {" "} {passworderror && (<span className='color-red'>{passworderror}</span>)}<br />
        <button type='submit' className='border-2 p-2'>submit</button>
        </Form>
    </div> */}
    {/* <Logindata actiondata={actiondata}></Logindata> */}
        </div>
  )
}
