import React from 'react'
import { Button } from "~/components/ui/button"

function Screen3 () {
  return (
    <div className='w-[640px] h-[768px] mx-auto bg-white-400 text-center p-[30px] border-2 rounded-lg shadow-2xl mt-[60px]'>
        <div className=' w-[225px] mx-auto mt-5'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp7FFYRwNKbTumOgu4zGIJOQpv8y0ngkLHw&s' className='w-[95px] h-[53px]  mx-auto text-xl' />
        <div className='w-[210px] h-[21px]  mx-auto text-center pb-6 text-lg font-[publicsans] font-medium'>Creat your orgenisation</div>
        <div className='w-[224px]  mx-auto text-xs mt-1'>Please provide your orgenisation details</div>
        </div>
        <div className='text-left mt-2'>
            <div  className='text-left pb-2 font-medium'>logo</div>
            <div className='flex justify-start'>
                <div className='w-[60px] h-[60px] border-2 rounded-md border-dashed border-black'></div>
                <label htmlFor="uploadfile" className='w-[115px] h-[48px] text-center text-blue-300 border-2 p-2 mt-1 ml-3 rounded-md border-blue-400 text-md'>upload logo</label>
                <input type="file"  id="uploadfile" hidden/>
            </div>
        </div>
        <div className=' text-left mt-5'>
            <div className='font-medium'>Email Address</div>
            <div className='mt-2'>
                <input type="text" className='w-full h-[36px] rounded-md border-2 pl-2' placeholder='Barker@company.com' />
            </div>
        </div>
        <div className='text-left mt-5'>
            <div className='font-medium'>Orgenization Name</div>
            <div className='mt-2'>
                <input type="text" className='w-full h-[36px] rounded-md border-2 pl-2' placeholder='orgenisation name' />
            </div>
        </div>  <div className=' text-left mt-5'>
            <div className='font-medium'>Contact number</div>
            <div className='mt-2'>
                <input type="text" className='w-full h-[36px] rounded-md border-2' />
            </div>
        </div>  <div className=' text-left mt-5'>
            <div className='font-medium'>Reg.no</div>
            <div className='mt-2'>
                <input type="text" className='w-full h-[36px] rounded-md border-2 pl-2' placeholder='Reg.no'/>
            </div>
        </div>  <div className='text-left mt-5'>
            <div className='font-medium'>Employe Strength</div>
            <div className='mt-2'>
                <select type="text" className='w-full h-[36px] rounded-md border-2 pl-2'>
                <option value="">Reg.No</option>
                </select>
            </div>
        </div>  
        <div className='text-left mt-5'>
          <Button className='w-full bg-[#3378FF] hover:bg-[blue]'>continue</Button>
        </div>
    </div>
  )
}

export default Screen3
