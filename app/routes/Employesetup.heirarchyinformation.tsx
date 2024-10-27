import React from 'react'

export default function Heirarchyinformation() {
  return (
    <div className='w-[850px] h-[680px] border-2 mx-auto p-[30px] rounded-md bg-[#F4F4F4]'>
  <div className='grid grid-cols-2 w-full border-red-400'>
            <div></div>
            <div className='text-right'>

            <button className='h-[36px] w-[36px] shadow-lg bg-[#FFFFFF] rounded-md'>+</button>
            </div>
        </div>
        <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>
            <div>
                <div className='font-bold'>Reporting Manager</div>
                <div className='mt-2'>
                    <select type="text" name="" id="" className='w-full h-[42px] border-2 rounded-md pl-2'>
                      <option value="">select</option>
                      </select>
                </div>
            </div>
           

        </div>
      
        <div className='grid grid-cols-12  mt-[450px] w-full'>
            <div className='col-span-9  text-right'><button className='w-[81px] h-[40px] border-2 rounded-md bg-[#DEDEDE]'>Skip</button></div>
            <div className='col-span-3 text-right'><button className='w-[146px] h-[40px] border-2  rounded-md bg-[#466AF3] text-white'>save & continue</button></div>

        </div>    </div>
  )
}
