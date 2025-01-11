import React from 'react'

export default function Screen84() {
    return (
        <div className='w-[1080px] h-[790px] rounded-md border-2 mx-auto'>
            <div className='w-[1080px] h-[200px] border-2 bg-gradient-to-r from-white via-purple-400 to-pink-400'>
                <div className='mx-auto w-[100px] h-[100px] rounded-full border-2 mt-6'></div>

                <div className='mx-auto w-[142px] text-[22px] mt-2'>Anslie Smith</div>
            </div>
            <div className='w-[182px] font-semibold mx-auto text-[20px] mt-[30px]'>Your almost Done!</div>
            <div className='w-[588px] text-[16px] mx-auto text-center font-light mt-2'>
                Take time to make sure you have completed each step in this Onboarding guide. Once you are done, you are formally a part of ABC Corp family.
            </div>
            <div className='w-[360px] h-[42px] rounded-md border-2 bg-[#DBE7FF] mx-auto flex items-center pl-2 mt-4'>Profile And forms
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-48 bg-green-400 rounded-full text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </div>
            <div className='w-[360px] h-[42px] rounded-md border-2 bg-[#DBE7FF] mx-auto flex items-center pl-2 mt-4'>Employec documents
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-[165px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </div> <div className='w-[360px] h-[42px] rounded-md border-2 bg-[#DBE7FF] mx-auto flex items-center pl-2 mt-4'>Documents And policies
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-[140px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </div> <div className='w-[360px] h-[42px] rounded-md border-2 bg-[#DBE7FF] mx-auto flex items-center pl-2 mt-4'>Company Information
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-[160px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </div>
            <div className='w-[100px] mx-auto mt-4'>

            <button className='w-[88px] h-[40px] border-2 rounded-md bg-[#466AF3] text-white '>Done</button>
            </div>
        </div>
    )
}
