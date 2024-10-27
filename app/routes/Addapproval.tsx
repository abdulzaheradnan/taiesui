import { Outlet } from '@remix-run/react'
import { Link } from 'react-router-dom'
import React from 'react'

export default function Addapproval() {
  return (
    <div className='w-[1120px] h-auto border-2 mx-auto p-[30px] rounded-lg'>
    <div className='text-left font-medium text-2xl '>

        Add Approval
    </div>


    <div className='grid grid-cols-12 w-[1119px] mt-5 '>

        <div className=' w-[150px]  grid col-span-2  h-[500px]'>
            <div className='w-[200px]'>

                <ul>
                    <li className='mt-1'>
                        <Link to="/Addapproval/ApprovalDetails">
                        <button>Approval Details</button>
                        </Link>
                    </li>
                    <li className='mt-1'>
                        <Link to="/Addapproval/Criteriya">
                        <button>Criteria</button>
                        </Link>
                    </li>
                    <li className='mt-1'>
                        <Link to="/Addapproval/approval">
                        <button>Approvals</button>
                        </Link>
                    </li>
                    <li className='mt-1'>
                        <Link to="/Addapproval/messages">
                        <button>Messages</button>
                        </Link>
                    </li>
                   
                  

                </ul>


            </div>

        </div>


        <div className='w-[851px] h-full  col-span-10 ml-[25px]'>
            <Outlet></Outlet>
        </div>
    </div>
</div>
  )
}
