import { Outlet, useNavigate } from '@remix-run/react'
import React, { useState } from 'react'


export default function Screen69() {
    const [component,setcomponent]=useState(false)

    const navigate = useNavigate()

    const handleinsideform = () => {
        setcomponent(true)
        navigate("/screen69/insideform")
    }
    return (
        <div>
            {component==false ?
            <div className='w-[1080px] h-[770px] bg-[#FFFFFF] border-2 mx-auto rounded-lg'>
                <div className='mx-auto w-[400px] h-[400px]  mt-[110px] text-center'>
                    <div className='w-[296px] h-[239px] border-2 mx-auto'>logo</div>
                    <div className='font-medium w-[155px] h-[19px] mx-auto mt-2'>WELCOME ABOARD</div>
                    <div className='font-bold w-[142px] h-[28px]  mx-auto text-[20px] mt-2'>Anslie Smith</div>
                    <div className='w-[162px] h-[19px]  mx-auto mt-2 text-[#7C7C7C]'>Employee ID:ABC002</div>
                    <div className='w-[296px] h-[19px]  mx-auto mt-2 text-[#7C7C7C]'>Employee Email:Anslie.s@company.com</div>
                    <button className='w-[146px] h-[40px] bg-[#466AF3] rounded-md text-white mt-6' onClick={handleinsideform}>Let's get started</button>

                </div>
            </div>:
            <Outlet></Outlet>
            }
        </div>
    )
}
