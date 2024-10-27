import { Outlet, useNavigate } from '@remix-run/react'
import React, { useState } from 'react'

export default function Approval() {
  const [component,setcomponent]=useState(false)
  const navigate=useNavigate()
  const handlenavigate=()=>{
    setcomponent(true)
    navigate("/Addapproval/approval/configdetails")
  }
  return (
    <div>
{
  component==false ?

    <div className='w=[850px] h-[686px] border-2 p-[110px] text-center rounded-md bg-[#F4F4F4]'>
        <div className='font-medium'>Approvals</div>
        <div className='mt-2'>You can either configure approver levels or allow the system to</div>
        <div className='mt-2'>auto approve / reject the record.</div>
        <button className='w-[164px] h-[40px] border-2 rounded-md bg-[#466AF3] text-white mt-3' onClick={handlenavigate}>Configure approver</button>
        <div className='mt-4'>(OR)</div>
        <div className='mt-4'>
            <input type="radio" />
            <label htmlFor="" className='ml-2'>Auto Approver</label>
            <input type="radio"  className='ml-6'/>
            <label htmlFor="" className='ml-2'>Auto Reject</label>
        </div>
    </div>:

    <div>
      <Outlet></Outlet>
    </div>}
    </div>
  )
}
