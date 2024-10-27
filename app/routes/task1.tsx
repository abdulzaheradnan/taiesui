import React from 'react'

export default function Task1() {
    return (
        <div className=' mt-6 p-4 w-[1100px] md:w-[990px] sm:w-[720px]  h-[500px] ]   border-2 pl-[30px]  pr-[30px] m-auto  rounded-xl' >

            <div className='flex h-20 ' >
                <div className='mr-90 mt-2 font-bold text-2xl '>Upload</div>
                <div className='ml-[450px] md:ml-[840px] sm:ml-[570px] xl:ml-[810px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-sm">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </div>
            </div>
            <div className='pt-5'>
                <label htmlFor="" className='font-medium'>Agreement</label>
                <div className='flex space-x-11 pt-2 '>
                    <div className='flex w-[864px] h-[42px] border-2 items-center justify-end rounded-lg'>
                        <label htmlFor="uploadfile1" className='w-[72px] h-[30px] bg-indigo-500 text-center border-2 rounded-md text-white mr-2'>Upload</label>
                        <input type="file" name="" id="uploadfile1" className='hidden' />
                    </div>

                    <button className='border-1 bg-white mr-10 rounded-xl w-[36px] h-[36px] shadow-lg shadow-black-500/50 ' >+</button>
                </div>
            </div>
            <div className='pt-5'>
                <label htmlFor="" className='font-medium'>Policies</label>
                <div className='flex space-x-11 pt-2 '>
                    <div className='flex w-[864px] h-[42px] border-2 items-center justify-end rounded-lg'>
                        <label htmlFor="uploadfile1" className='w-[72px] h-[30px] bg-indigo-500 text-center border-2 rounded-md text-white mr-2'>Upload</label>
                        <input type="file" name="" id="uploadfile1" className='hidden' />
                    </div>                    <button className='border-1 bg-white mr-10 rounded-xl w-[36px] h-[36px] shadow-lg shadow-black-500/50'>+</button>
                </div>
            </div>
            <div className='pt-5'>
                <label htmlFor="" className='font-medium'>References Letter</label>
                <div className='flex space-x-11 pt-2'>
                    <div className='flex w-[864px] h-[42px] border-2 items-center justify-end rounded-lg'>
                        <label htmlFor="uploadfile1" className='w-[72px] h-[30px] bg-indigo-500 text-center border-2 rounded-md text-white mr-2'>Upload</label>
                        <input type="file" name="" id="uploadfile1" className='hidden' />
                    </div>
                    <button className='border-1 bg-white mr-10 rounded-xl w-[36px] h-[36px] shadow-lg shadow-black-500/50'>+</button>
                </div>
                <div>
                    <div className='flex space-x-3 pt-10 justify-end pb-[33px]'>
                        <button className='border-2 w-[80px] h-[40px] rounded-xl bg-gray-300'>Cancel</button>
                        <button className='border-2 w-[80px] h-[40px] rounded-xl bg-indigo-500 text-white'>Save</button>

                    </div>


                </div>
            </div>



        </div>
    )
}
