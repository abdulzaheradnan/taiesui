import React from 'react'

export default function Task1responsive() {
    return (
        //    <div className='grid sm:grid-cols-12 m-4 gap-4 grid-cols-2 '>
        //     <div className='min-h-[100px] bg-blue-500 rounded-lg sm:col-span-2'></div>
        //     <div className='min-h-[100px] bg-red-500 rounded-lg sm:col-span-10'></div>

        //    </div>



        <div className='grid p-5 max-w-[980px] mt-[93px] mx-auto border-2 rounded-xl sm:mx-auto'>
            <div className='grid grid-cols-12 '>

                <div className='text-left col-span-11 font-bold text-2xl'>upload</div>
                <div className='text-right col-span-1 sm:ml-[20px] md:ml-[40px]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-right">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>

            </div>
            <div className='mt-6 mb-2'>Agreement</div>
            <div className='grid grid-cols-10  gap-3 '>
                <div className='flex text-center border-2 col-span-9 pr-2 max-h-[42px] items-center justify-end rounded-md '>
                    <label htmlFor="fileupload" className='bg-[#466af3]  w-[72px] max-h-[32px] text-center rounded-md text-white'>upload</label>
                    <input type="file" id="fileupload" className='hidden' />
                </div>
                <div className='text-right col-span-1'>
                    <button className='w-[36px] h-[36px] border-2 rounded-lg shadow-md'>+</button>
                </div>
            </div>
            <div className='mt-6 mb-2'>Policies</div>
            <div className='grid grid-cols-10  gap-3 '>
                <div className='flex text-center border-2 col-span-9 pr-2 max-h-[42px] items-center justify-end rounded-md '>
                    <label htmlFor="fileupload" className='bg-[#466af3]  w-[72px] max-h-[32px] text-center rounded-md text-white'>upload</label>
                    <input type="file" id="fileupload" className='hidden' />
                </div>
                <div className='text-right col-span-1'>
                    <button className='w-[36px] h-[36px] border-2 rounded-lg shadow-md'>+</button>
                </div>
            </div>
            <div className='mt-6 mb-2'>Reference letter</div>
            <div className='grid grid-cols-10  gap-3 '>
                <div className='flex text-center border-2 col-span-9 pr-2 max-h-[42px] items-center justify-end rounded-md '>
                    <label htmlFor="fileupload" className='bg-[#466af3]  w-[72px] max-h-[32px] text-center rounded-md text-white'>upload</label>
                    <input type="file" id="fileupload" className='hidden' />
                </div>
                <div className='text-right col-span-1'>
                    <button className='w-[36px] h-[36px] border-2 rounded-lg shadow-md'>+</button>
                </div>
            </div>

            <div className='grid grid-cols-8 mt-8 sm:grid-cols-12 '>
                <div className='col-span-6 text-right sm:col-span-11 mr-[20px]'>

                    <button className='w-[80px] h-[40px] border-2 rounded-md bg-[#dedede]'>Cancel</button>
                </div>
                <div className='col-span-2 text-right sm:col-span-1 mr-[10px]'>

                    <button className='w-[80px] h-[40px] bg-[#466af3] border-2 rounded-md text-white' >Save</button>
                </div>

            </div>

        </div>

    )
}
