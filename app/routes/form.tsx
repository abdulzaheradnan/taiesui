import React from 'react'
import { ActionFunction,ActionFunctionArgs } from '@remix-run/node'
import { Form, useActionData,json, Link, redirect } from '@remix-run/react'

export async function action({request}:ActionFunctionArgs){

  const formData= await request.formData()

  
  const email=formData.get("email")
  const password=formData.get("password")
  const data={
    email:email,
    password:password
  }
  console.log("hey")
 
  return json(data)

}
export default function Formcomponent  ()  {
  const data=useActionData()
  console.log("hello",data)

  return (
    <div>
        <Link to="/login">login pe jao</Link>
       <div>
        <h1>form component</h1>
        <div>
        <Form method='post'>
            <label htmlFor="">email</label>
            <input type="text"  name='email' className='border-2'/><br />
            <label htmlFor="">password</label>
            <input type="text" name='password' className='border-2'/><br />
            <button type='submit'>submit</button>
          </Form>
        </div>
        <div>{data ? data.email :" "}</div>
       </div>
    </div>
  )
}