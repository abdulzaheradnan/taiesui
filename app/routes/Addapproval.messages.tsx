import React from 'react'

export default function Messages() {
    return (
        <div className='w-[850px] h-[686px] border-2 bg-[#F4F4F4] p-[30px] rounded-lg'>
            <header className=' font-bold'>Messages</header>
            <div className='grid grid-cols-2 mt-2'>
                <div>
                    <div htmlFor="" className='font-medium'>from</div>
                    <select type="text" name="" id="" className='w-[380px] h-[42px] border-2 rounded-lg mt-2 pl-2' >
                        <option value="">person performing this action</option>
                    </select>
                </div>
                <div className=' h-[42px] text-right mt-8'>
                    Add:<span className='text-[#466AF3]'>Cc</span> | <span className='text-[#466AF3]'>Bcc</span> | <span className='text-[#466AF3]'>Reply to</span>
                </div>
            </div>
            <div className='mt-4'>
                <div className='font-medium'>To</div>
                <select name="" id="" className='h-[42px] w-full border-2 rounded-lg mt-2'>
                    <option value="">current approvar</option>
                </select>
            </div>
            <div className='mt-4'>
                <div className='font-medium'>Subject</div>
                <select name="" id="" className='h-[42px] w-full border-2 rounded-lg mt-2'>
                    <option value="">new addressproof request</option>
                </select>
            </div>
            <div className='grid grid-cols-2 mt-4'>
                <div>
                    <div htmlFor="" className='font-medium'>Body</div>
                    <select type="text" name="" id="" className='w-[380px] h-[42px] border-2 rounded-lg mt-2 pl-2' >
                        <option value="">New Address Proof Request</option>
                    </select>
                </div>
                <div className=' h-[42px] text-right mt-10'>
                    <span className='text-[#466AF3]'>Edit Email Template</span>
                </div>
            </div>
            <div className='mt-4'>
                <textarea name="" id="" className='h-[100px] w-full rounded-lg'></textarea>
            </div>
            <div className='w-full h-[42px]  border-2 rounded-lg flex items-center place-content-end mt-4 bg-[#FFFFFF]'>
                <span className='mr-[535px]'>Attachments</span>
                <label htmlFor="template" className='w-[142px] h-[30px] bg-[#DDE4FF] rounded-lg border-2 text-[#466AF3] font-light text-center'>select template</label>
                <input type="file" name="" id="template" hidden />
            </div>
            <div className='text-[11px] font-light mt-1'>Supported file formate: csv, doc ,PDF, XLS ,XLSX</div>
            <div className='grid grid-cols-3 w-full mt-2'>
                <span className='col-span-2'></span>
                <button className='w-[146px] h-[40px] bg-[#466AF3] text-white mt-2 rounded-md col-span-1 ml-[115px]'>Save & Continue</button>
            </div>
        </div>
    )
}
