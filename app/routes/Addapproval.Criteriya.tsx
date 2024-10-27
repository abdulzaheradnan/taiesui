import { Outlet, useNavigate } from '@remix-run/react'
import React, { useState } from 'react'

export default function Criteriya() {
    const [component, setcomponent] = useState(true)
    const navigate = useNavigate()
    const handlenavigate = () => {
        setcomponent(false)
        navigate("/Addapproval/Criteriya/Details")
    }
    return (
        <div className='w-[850px] h-[686px] border-2 rounded-md bg-[#F4F4F4] '>
            {component == true ?


                <div className='w-[424px]  mx-auto text-center mt-[110px]'>
                    <div className='font-medium'>Criteria</div>
                    <div className='mt-1'>The workflow will be trigered when the following criteriya</div>
                    <div className='mt-1'>requirements are satisfied</div>
                    <button className='w-[124px] h-[40px] bg-[#466AF3] text-white rounded-md border-2 mt-3' onClick={handlenavigate} type='button'>Set Criteriya</button>

                </div> :
                <div>
                    <Outlet></Outlet>
                </div>
            }
        </div>
    )
}
