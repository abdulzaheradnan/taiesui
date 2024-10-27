import { Link } from '@remix-run/react'
import React from 'react'
import { Button } from "~/components/ui/button"
import { Checkbox } from "~/components/ui/checkbox"


function Screen2  () {
  return (
    <div className='w-[640px] h-[516px] mx-auto bg-white-400 text-center p-[30px] pt-[10px] border-2 rounded-xl shadow-2xl mt-[60px]'>
    <div className=' w-[225px] mx-auto mt-5'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp7FFYRwNKbTumOgu4zGIJOQpv8y0ngkLHw&s' className='w-[95px] h-[53px]  mx-auto text-xl' />
    <div className='w-[210px] h-[21px]  mx-auto text-center pb-6 text-lg font-[publicsans] font-extrabold'>Sign in</div>
    <div className='w-[224px]  mx-auto text-xs mt-1'>Please provide your Details</div>
    </div>
   
    <div className=' text-left mt-5'>
        <div className='font-medium'>Email Address</div>
        <div className='mt-2'>
            <input type="text" className='w-full h-[36px] rounded-md border-2 pl-2' placeholder='Barker@company.com' />
        </div>
    </div>
    <div className='text-left mt-5'>
        <div className='font-medium'>Password</div>
        <div className='mt-2'>
            <input type="password" className='w-full h-[36px] rounded-md border-2 pl-2' placeholder='Password' />
        </div>
    </div> 
    
     <div className=' text-left mt-5'>
        <div className='mt-2 h-[60px] border-2 rounded-xl flex '>
            <Checkbox  className='w-[40px] h-[40px] m-2 ml-3 bg-[#F9F9F9]'/>
            <div className='mt-4'>I'm not a robot</div>
            <img src='https://w7.pngwing.com/pngs/578/203/png-transparent-recaptcha-hd-logo-thumbnail.png' className='border-0 bg-white w-[48px] h-[48px] border-2 m-1 ml-[350px]' />
        </div>
    </div>  
   
    <div className=' text-left mt-5 '>
      <Button className='w-full bg-[#3378FF] hover:bg-[blue] '>Sign in</Button>
    </div>
    <div className='grid grid-cols-2 mt-6'>
        <a href="" className='text-xs text-blue-500 text-left'>Forgot password?</a>
        <span className='text-xs text-right'>
        Dont have an account?
        <a href="" className='text-xs text-blue-500'>Sign Up</a>
        </span>
    </div>
</div>
  )
}

export default Screen2
