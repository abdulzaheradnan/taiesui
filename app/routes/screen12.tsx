import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table"

export default function Screen12() {
    return (
        <div className='w-[1120px] h-full border-2 rounded-xl mx-auto '>
            <div className='grid grid-cols-4 p-[30px]'>
                <div className='col-span-2'>

                    <h1 className='font-semibold text-[23px] w-[264px] h-[28px] '>Approvals</h1>
                </div>
                <div className='col-span-2 text-right'>
                    <span>Select From:  </span>
                        <select className='w-[228px] h-[42px] rounded-lg border-2 mr-4 pl-2'>
                            <option value="">All</option>
                        </select>
                    <button className='w-[128px] h-[40px] border-2 rounded-md bg-[#466AF3] text-white'>Add approval</button>
                </div>
            </div>

            <div>
                <Table className='table-fixed'>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="border-t-2 border-b-2 font-light  w-[240px]">Approval Name</TableHead>
                            <TableHead className='border-t-2 border-b-2  text-left font-light '>Form Name</TableHead>
                            <TableHead className='border-t-2 border-b-2  text-left font-light '>Template Name</TableHead>
                            <TableHead className='border-t-2 border-b-2  text-center font-light'>Status</TableHead>
                            <TableHead className='border-t-2 border-b-2  text-right font-light '>Option</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className=' hover:bg-[#EAEEFF] ' >
                            <TableCell className="font-medium  text-[16px] text-[#000000] border-t-2 border-b-2 ">Employe Onboarding</TableCell>
                            <TableCell className='border-t-2 border-b-2  text-left font-medium text-[15px] '>Onboarding Approval</TableCell>
                            <TableCell className='border-t-2 border-b-2  text-left font-medium text-[15px]  '>New Employe onboard</TableCell>
                            <TableCell className='border-t-2 border-b-2  text-center font-medium text-[15px]  '>

                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" checked/>
                                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </TableCell>
                            <TableCell className='border-t-2 border-b-2  text-right font-medium text-[15px]  opacity-0 hover:opacity-100  ' >
                                <div className='flex pl-36 '>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                    </svg>
                                    </span>&nbsp;&nbsp;

                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                    </span>
                                </div>

                            </TableCell>
                        </TableRow>
                        <TableRow className=' hover:bg-[#EAEEFF] ' >
                            <TableCell className="font-medium  text-[16px] text-[#000000] border-t-2 border-b-2 ">Leave Request</TableCell>
                            <TableCell className='border-t-2 border-b-2  text-left font-medium text-[15px] '>Leave Request Approval</TableCell>
                            <TableCell className='border-t-2 border-b-2  text-left font-medium text-[15px]  '>New Leave Request</TableCell>
                            <TableCell className='border-t-2 border-b-2  text-center font-medium text-[15px]  '>

                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </TableCell>
                            <TableCell className='border-t-2 border-b-2  text-right font-medium text-[15px]  opacity-0 hover:opacity-100  ' >
                                <div className='flex pl-36 '>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                    </svg>
                                    </span>&nbsp;&nbsp;

                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                    </span>
                                </div>

                            </TableCell>
                        </TableRow>
                        <TableRow className=' hover:bg-[#EAEEFF] ' >
                            <TableCell className="font-medium  text-[16px] text-[#000000] border-t-2 border-b-2 ">Reimbursements Approval</TableCell>
                            <TableCell className='border-t-2 border-b-2  text-left font-medium text-[15px] '>Expense Reimbursement</TableCell>
                            <TableCell className='border-t-2 border-b-2  text-left font-medium text-[15px]  '>Reimbursement</TableCell>
                            <TableCell className='border-t-2 border-b-2  text-center font-medium text-[15px]  '>

                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </TableCell>
                            <TableCell className='border-t-2 border-b-2  text-right font-medium text-[15px]  opacity-0 hover:opacity-100  ' >
                                <div className='flex pl-36 '>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                    </svg>
                                    </span>&nbsp;&nbsp;

                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                    </span>
                                </div>

                            </TableCell>
                        </TableRow>
                        <TableRow className=' hover:bg-[#EAEEFF] ' >
                            <TableCell className="font-medium  text-[16px] text-[#000000] border-t-2 border-b-2 ">Timesheet Approval</TableCell>
                            <TableCell className='border-t-2 border-b-2  text-left font-medium text-[15px] '>Timesheet</TableCell>
                            <TableCell className='border-t-2 border-b-2  text-left font-medium text-[15px]  '>Timesheet Approval</TableCell>
                            <TableCell className='border-t-2 border-b-2  text-center font-medium text-[15px]  '>

                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </TableCell>
                            <TableCell className='border-t-2 border-b-2  text-right font-medium text-[15px]  opacity-0 hover:opacity-100  ' >
                                <div className='flex pl-36 '>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                    </svg>
                                    </span>&nbsp;&nbsp;

                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                    </span>
                                </div>

                            </TableCell>
                        </TableRow>
                        <TableRow className=' hover:bg-[#EAEEFF] ' >
                            <TableCell className="font-medium  text-[16px] text-[#000000] border-t-2 border-b-2 ">Recruitement Request</TableCell>
                            <TableCell className='border-t-2 border-b-2  text-left font-medium text-[15px] '>Recruitement Approval</TableCell>
                            <TableCell className='border-t-2 border-b-2  text-left font-medium text-[15px]  '>New Recruitement Request</TableCell>
                            <TableCell className='border-t-2 border-b-2  text-center font-medium text-[15px]  '>

                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </TableCell>
                            <TableCell className='border-t-2 border-b-2  text-right font-medium text-[15px]  opacity-0 hover:opacity-100  ' >
                                <div className='flex pl-36 '>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                    </svg>
                                    </span>&nbsp;&nbsp;

                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                    </span>
                                </div>

                            </TableCell>
                        </TableRow>
                        <TableRow className=' hover:bg-[#EAEEFF] ' >
                            <TableCell className="font-medium  text-[16px] text-[#000000] border-t-2 border-b-2 ">Casual Leave</TableCell>
                            <TableCell className='border-t-2 border-b-2  text-left font-medium text-[15px] '>Leave </TableCell>
                            <TableCell className='border-t-2 border-b-2  text-left font-medium text-[15px]  '>New Leave Request</TableCell>
                            <TableCell className='border-t-2 border-b-2  text-center font-medium text-[15px]  '>

                                <label className="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </TableCell>
                            <TableCell className='border-t-2 border-b-2  text-right font-medium text-[15px]  opacity-0 hover:opacity-100  ' >
                                <div className='flex pl-36 '>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                    </svg>
                                    </span>&nbsp;&nbsp;

                                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                    </span>
                                </div>

                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>

            </div>
        </div>

    )
}
