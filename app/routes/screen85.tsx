import React from 'react'
import { MdPeopleAlt } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { LuTextCursorInput } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { RiChatDeleteLine } from "react-icons/ri";
import { RiFlashlightLine } from "react-icons/ri";
import { HiArrowRightEndOnRectangle } from "react-icons/hi2";
import { MdOutlineAnalytics } from "react-icons/md";
import * as Popover from "@radix-ui/react-popover";
import * as Switch from "@radix-ui/react-switch";










import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table"


export default function Screen85() {
    return (
        <div className='w-[1120px] h-auto rounded-md border-2 mx-auto p-[30px]'>
            <div className='grid grid-cols-2'>
                <div className='text-[24px] font-semibold'>
                    Good morning Jesica
                </div>
                <div>
                    <input type="text" className='w-[250px] h-[36px] border-2 rounded-md p-2 float-left ml-2' placeholder='Search' />
                    <select name="" id="" className='w-[194px] h-[36px] border-2 rounded-md ml-4 pl-2 float-left ml-2'>
                        <option value="">select</option>
                    </select>

                    <Popover.Root>
                        <Popover.Trigger >
                            <span className='float-left w-[36px] h-[36px] border-2 rounded-md bg-[#E3EFFF] grid place-items-center ml-4'>
                                <FaLayerGroup />
                            </span>
                        </Popover.Trigger>
                        <Popover.Anchor />
                        <Popover.Portal>
                            <Popover.Content>

                                <div className='w-[250px] h-auto border-2 rounded-md bg-[white] mr-[-270px] shadow-2xl'>
                                    <div className='p-2 border-b-2 pt-2'>Customize Widget</div>
                                    <div className='border-b-2 flex justify-between p-1 hover:bg-gray-200'>
                                        <div className='ml-3 mt-1'>Birthdays</div>
                                        <div className='mr-3 mt-1.5  h-6 mb-1'>

                                            <label className="inline-flex items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>


                                    </div>
                                    <div className='border-b-2 flex justify-between p-1 hover:bg-gray-200'>
                                        <div className='ml-3 mt-1'>New Hires</div>
                                        <div className='mr-3 mt-1.5  h-6 mb-1'>

                                            <label className="inline-flex items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>


                                    </div>
                                    <div className='border-b-2 flex justify-between p-1 hover:bg-gray-200'>
                                        <div className='ml-3 mt-1'>Quick Links</div>
                                        <div className='mr-3 mt-1.5  h-6 mb-1'>

                                            <label className="inline-flex items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>


                                    </div>
                                    <div className='border-b-2 flex justify-between p-1 hover:bg-gray-200'>
                                        <div className='ml-3 mt-1'>Announcements</div>
                                        <div className='mr-3 mt-1.5  h-6 mb-1'>

                                            <label className="inline-flex items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>


                                    </div>
                                    <div className='border-b-2 flex justify-between p-1 hover:bg-gray-200'>
                                        <div className='ml-3 mt-1'>Leave Reports</div>
                                        <div className='mr-3 mt-1.5  h-6 mb-1'>

                                            <label className="inline-flex items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>


                                    </div> <div className='border-b-2 flex justify-between p-1 hover:bg-gray-200'>
                                        <div className='ml-3 mt-1'>Upcoming Holidays</div>
                                        <div className='mr-3 mt-1.5  h-6 mb-1'>

                                            <label className="inline-flex items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>


                                    </div> <div className='border-b-2 flex justify-between p-1 hover:bg-gray-200'>
                                        <div className='ml-3 mt-1'>My pending Tasks</div>
                                        <div className='mr-3 mt-1.5  h-6 mb-1'>

                                            <label className="inline-flex items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>


                                    </div>
                                    <div className='border-b-2 flex justify-between p-1 hover:bg-gray-200'>
                                        <div className='ml-3 mt-1'>My Files</div>
                                        <div className='mr-3 mt-1.5  h-6 mb-1'>

                                            <label className="inline-flex items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>


                                    </div> <div className='border-b-2 flex justify-between p-1 hover:bg-gray-200'>
                                        <div className='ml-3 mt-1'>My Goals</div>
                                        <div className='mr-3 mt-1.5  h-6 mb-1'>

                                            <label className="inline-flex items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>


                                    </div> <div className='border-b-2 flex justify-between p-1 hover:bg-gray-200'>
                                        <div className='ml-3 mt-1'>Work Anniversary</div>
                                        <div className='mr-3 mt-1.5  h-6 mb-1'>

                                            <label className="inline-flex items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>


                                    </div> <div className='border-b-2 flex justify-between p-1 hover:bg-gray-200'>
                                        <div className='ml-3 mt-1'>Wedding Anniversary</div>
                                        <div className='mr-3 mt-1.5  h-6 mb-1'>

                                            <label className="inline-flex items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>


                                    </div> <div className=' flex justify-between p-1 hover:bg-gray-200 '>
                                        <div className='ml-3 mt-1'>Employee Engagement</div>
                                        <div className='mr-3 mt-1.5  h-6 mb-1'>

                                            <label className="inline-flex items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>


                                    </div>

                                </div>
                            </Popover.Content>
                        </Popover.Portal>
                    </Popover.Root>





                </div>
            </div>
            <div className='grid grid-cols-4 mt-4 w-full gap-4'>
                <div className='w-[250px] h-[120px] border-2 rounded-md grid grid-cols-3 gap-6 p-3 bg-[#ECE6FF] shadow-xl'>
                    <div className=' col-span-2'>
                        <div className='text-[16px]'>Total Employees</div>
                        <div className='text-[30px]'>234</div>
                        <div className='text-[12px]'>Last month : 26</div>

                    </div>
                    <div className=' col-span-1 '>
                        <MdPeopleAlt className='size-8 p-1 text-white bg-[#67A7FF] ml-4 rounded-sm' />

                    </div>
                </div>
                <div className='w-[250px] h-[120px] border-2 rounded-md grid grid-cols-3 gap-6 p-3 bg-[#E6F4FF] shadow-xl'>
                    <div className=' col-span-2'>
                        <div className='text-[16px]'>New Employees</div>
                        <div className='text-[30px]'>48</div>
                        <div className='text-[12px]'>Last month : 03</div>

                    </div>
                    <div className=' col-span-1 '>
                        <MdPeopleAlt className='size-8 p-1 rounded-sm text-white bg-[#67A7FF] ml-4' />

                    </div>
                </div>
                <div className='w-[250px] h-[120px] border-2 rounded-md grid grid-cols-3 gap-6 p-3 bg-[#E8FFE6] shadow-xl'>
                    <div className=' col-span-2  w-[200px]'>
                        <div className='text-[16px]'>Resigned Employees</div>
                        <div className='text-[30px]'>12</div>
                        <div className='text-[12px]'>Last month : 07</div>

                    </div>
                    <div className=' col-span-1 '>
                        <MdPeopleAlt className='size-8 p-1 rounded-sm text-white bg-[#67A7FF] ml-4' />

                    </div>
                </div>
                <div className='w-[250px] h-[120px] border-2 rounded-md grid grid-cols-3 gap-6 p-3 bg-[#FFF5E6] shadow-xl'>
                    <div className=' col-span-2'>
                        <div className='text-[16px]'>Total Applicants</div>
                        <div className='text-[30px]'>143</div>
                        <div className='text-[12px]'>Last month : 28</div>

                    </div>
                    <div className=' col-span-1 '>
                        <MdPeopleAlt className='size-8 p-1 rounded-sm text-white bg-[#67A7FF] ml-4' />

                    </div>
                </div>

            </div>
            <div className='grid grid-cols-2 mt-4 gap-2'>
                <div className='w-[520px] h-[360px] border-2 rounded-md p-[30px] shadow-xl'>Attendence Activity</div>
                <div className='w-[520px] h-[360px] border-2 rounded-md shadow-xl'>
                    <div className='pl-4 p-2 pb-2'>Request For Approval</div>
                    <div className='grid grid-cols-2 w-full border-t-2 border-b-2 pl-4 pr-4 mt-1'>
                        <div className=''>
                            <span className='text-[16px]'>Compensatory Off</span><br />
                            <span className='text-[12px] font-light'>15-07-2024</span>
                        </div>
                        <div className='grid justify-items-end place-items-center'>

                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--hO-TXT_0uJC6qJ2kYUFttLrYU0TQd6wAQ&s" className='w-[30px] h-[30px] rounded-full' alt="" />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 w-full  border-b-2 pl-4 pr-4 mt-1'>
                        <div className=''>
                            <span className='text-[16px]'>Leave Request</span><br />
                            <span className='text-[12px] font-light'>15-07-2024</span>
                        </div>
                        <div className='grid justify-items-end place-items-center'>

                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--hO-TXT_0uJC6qJ2kYUFttLrYU0TQd6wAQ&s" className='w-[30px] h-[30px] rounded-full' alt="" />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 w-full  border-b-2 pl-4 pr-4 mt-1'>
                        <div className=''>
                            <span className='text-[16px]'>Asset Request</span><br />
                            <span className='text-[12px] font-light'>12-07-2024</span>
                        </div>
                        <div className='grid justify-items-end place-items-center'>

                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--hO-TXT_0uJC6qJ2kYUFttLrYU0TQd6wAQ&s" className='w-[30px] h-[30px] rounded-full' alt="" />
                        </div>
                    </div> <div className='grid grid-cols-2 w-full  border-b-2 pl-4 pr-4 mt-1'>
                        <div className=''>
                            <span className='text-[16px]'>Attendence on Duty</span><br />
                            <span className='text-[12px] font-light'>11-07-2024</span>
                        </div>
                        <div className='grid justify-items-end place-items-center'>

                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--hO-TXT_0uJC6qJ2kYUFttLrYU0TQd6wAQ&s" className='w-[30px] h-[30px] rounded-full' alt="" />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 w-full  border-b-2 pl-4 pr-4 mt-1'>
                        <div className=''>
                            <span className='text-[16px]'>Access Request</span><br />
                            <span className='text-[12px] font-light'>10-07-2024</span>
                        </div>
                        <div className='grid justify-items-end place-items-center'>

                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--hO-TXT_0uJC6qJ2kYUFttLrYU0TQd6wAQ&s" className='w-[30px] h-[30px] rounded-full' alt="" />
                        </div>
                    </div> <div className='grid grid-cols-2 w-full  pl-4 pr-4 mt-0'>
                        <div className=''>
                            <span className='text-[16px]'>Emergency Leave</span><br />
                            <span className='text-[12px] font-light'>10-07-2024</span>
                        </div>
                        <div className='grid justify-items-end place-items-center'>

                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--hO-TXT_0uJC6qJ2kYUFttLrYU0TQd6wAQ&s" className='w-[30px] h-[30px] rounded-full' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 mt-4'>
                <div className='w-[520px] h-[370px] border-2 rounded-md'>
                    <div className='grid grid-cols-2 w-full mt-3'>
                        <div className='pl-4 pt-1 '>Employees</div>
                        <div className='grid place-items-end  pr-4'>
                            <select name="" id="" className='w-[160px] h-[32px] border-2 rounded-md pl-2'>
                                <option value="">Active</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <Table>
                            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                            <TableHeader>
                                {/* <TableRow>
                                    <TableHead className="w-[100px]">Invoice</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Method</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow> */}
                            </TableHeader>
                            <TableBody>
                                <TableRow className='place-items-center'>
                                    <TableCell className="">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--hO-TXT_0uJC6qJ2kYUFttLrYU0TQd6wAQ&s" alt="" className='w-[30px] h-[30px] rounded-full float-left mr-2' />
                                        <div className='pt-1 font-semibold w-[80px] '>
                                            Helen
                                        </div>

                                    </TableCell>
                                    <TableCell className='text-[#555555]'>ABC001</TableCell>
                                    <TableCell className='text-[#555555]'>HR manager</TableCell>
                                    <TableCell className="text-right text-[#555555]  grid place-items-end">
                                        <div className='w-[72px] h-[32px] rounded-full bg-[#E6FFEE] place-items-center grid'>Active</div>
                                    </TableCell>
                                </TableRow >
                                <TableRow className='place-items-center '>
                                    <TableCell className="">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--hO-TXT_0uJC6qJ2kYUFttLrYU0TQd6wAQ&s" alt="" className='w-[30px] h-[30px] rounded-full float-left mr-2' />
                                        <div className='pt-1 font-semibold w-[80px] '>
                                            Biren
                                        </div>

                                    </TableCell>
                                    <TableCell className='text-[#555555]'>ABC002</TableCell>
                                    <TableCell className='text-[#555555]'>IT & R&D</TableCell>
                                    <TableCell className="text-right text-[#555555]  grid place-items-end">
                                        <div className='w-[72px] h-[32px] rounded-full bg-[#E6FFEE] place-items-center grid'>Active</div>
                                    </TableCell>
                                </TableRow>
                                <TableRow className='place-items-center'>
                                    <TableCell className="">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--hO-TXT_0uJC6qJ2kYUFttLrYU0TQd6wAQ&s" alt="" className='w-[30px] h-[30px] rounded-full float-left mr-2' />
                                        <div className='pt-1 font-semibold w-[80px] '>
                                            Anslie
                                        </div>

                                    </TableCell>
                                    <TableCell className='text-[#555555]'>ABC003</TableCell>
                                    <TableCell className='text-[#555555]'>Operations manager</TableCell>
                                    <TableCell className="text-right text-[#555555]  grid place-items-end">
                                        <div className='w-[72px] h-[32px] rounded-full bg-[#E6FFEE] place-items-center grid'>Active</div>
                                    </TableCell>                                </TableRow>
                                <TableRow className='place-items-center'>
                                    <TableCell className="">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--hO-TXT_0uJC6qJ2kYUFttLrYU0TQd6wAQ&s" alt="" className='w-[30px] h-[30px] rounded-full float-left mr-2' />
                                        <div className='pt-1 font-semibold w-[80px] '>
                                            Barker
                                        </div>

                                    </TableCell>
                                    <TableCell className='text-[#555555]'>ABC005</TableCell>
                                    <TableCell className='text-[#555555]'>HR Operations</TableCell>
                                    <TableCell className="text-right text-[#555555]  grid place-items-end">
                                        <div className='w-[72px] h-[32px] rounded-full bg-[#E6FFEE] place-items-center grid'>Active</div>
                                    </TableCell>
                                </TableRow> <TableRow className='place-items-center'>
                                    <TableCell className="">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--hO-TXT_0uJC6qJ2kYUFttLrYU0TQd6wAQ&s" alt="" className='w-[30px] h-[30px] rounded-full float-left mr-2' />
                                        <div className='pt-1 font-semibold w-[100px]  '>
                                            Sidhart
                                        </div>

                                    </TableCell>
                                    <TableCell className='text-[#555555]'>ABC0017</TableCell>
                                    <TableCell className='text-[#555555]'>Accounting</TableCell>
                                    <TableCell className="text-right text-[#555555]  grid place-items-end">
                                        <div className='w-[72px] h-[32px] rounded-full bg-[#E6FFEE] place-items-center grid'>Active</div>
                                    </TableCell>                                </TableRow>
                            </TableBody>
                        </Table>

                    </div>
                </div>
                <div className='w-[520px] h-[370px] border-2 rounded-md'></div>
            </div>
            <div className=' w-full h-[150px] border-2 p-[20px] mt-4 rounded-md shadow-lg'>
                <div className='mb-2'>Employee payrols</div>
                <div className='grid grid-cols-6 mt-2 gap-3'>
                    <div className='w-[160px] h-[80px] border-2 pl-4 pt-1 bg-[#EDECFF] rounded-md'>
                        <div className='text-[16px] text-[#555555]'>Total Payrols</div>
                        <div className='flex'>

                            <span className='w-[30px]  grid place-items-center'>
                                <MdOutlineAnalytics className='w-[18px] h-[18px]' />
                            </span>&nbsp;&nbsp;
                            <span className='text-[30px] font-semibold '>224</span>
                        </div>
                    </div>
                    <div className='w-[160px] h-[80px] border-2 pl-4 pt-1 bg-[#F0F0F0] rounded-md'>
                        <div className='text-[16px] text-[#555555]'>Draft </div>
                        <div className='flex'>

                            <span className='w-[30px]  grid place-items-center'>
                                <LuTextCursorInput className='w-[18px] h-[18px]' />
                            </span>&nbsp;&nbsp;
                            <span className='text-[30px] font-semibold '>13</span>
                        </div>
                    </div> <div className='w-[160px] h-[80px] border-2 pl-4 pt-1 bg-[#EDF6FF] rounded-md'>
                        <div className='text-[16px] text-[#555555]'>Over Due</div>
                        <div className='flex'>

                            <span className='w-[30px]  grid place-items-center'>
                                <SlCalender className='w-[18px] h-[18px]' />
                            </span>&nbsp;&nbsp;
                            <span className='text-[30px] font-semibold '>7</span>
                        </div>
                    </div>
                    <div className='w-[160px] h-[80px] border-2 pl-4 pt-1 bg-[#FBEDE6] rounded-md'>
                        <div className='text-[16px] text-[#555555]'>Failed</div>
                        <div className='flex'>

                            <span className='w-[30px]  grid place-items-center'>
                                <RiChatDeleteLine className='w-[18px] h-[18px]' />
                            </span>&nbsp;&nbsp;
                            <span className='text-[30px] font-semibold '>5</span>
                        </div>
                    </div> <div className='w-[160px] h-[80px] border-2 pl-4 pt-1 bg-[#FAE6FF] rounded-md'>
                        <div className='text-[16px] text-[#555555]'>Schedule</div>
                        <div className='flex'>

                            <span className='w-[30px]  grid place-items-center'>
                                <RiFlashlightLine className='w-[18px] h-[18px]' />
                            </span>&nbsp;&nbsp;
                            <span className='text-[30px] font-semibold '>24</span>
                        </div>
                    </div> <div className='w-[160px] h-[80px] border-2 pl-4 pt-1 bg-[#DDFFEE] rounded-md'>
                        <div className='text-[16px] text-[#555555]'>Paid</div>
                        <div className='flex'>

                            <span className='w-[30px]  grid place-items-center'>
                                <HiArrowRightEndOnRectangle className='w-[18px] h-[18px]' />
                            </span>&nbsp;&nbsp;
                            <span className='text-[30px] font-semibold '>286</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-[520px] h-[356px] border-2 rounded-md mt-4 shadow-lg rounded-md '>
                <div className='p-4 border-b-2 '>Birthdays</div>
                <div className='pl-4 flex justify-between border-b-2 pr-4 p-2'>
                    <div className='flex'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--hO-TXT_0uJC6qJ2kYUFttLrYU0TQd6wAQ&s" className='w-[30px] h-[30px] rounded-full mt-2' alt="" />
                        <div className='ml-2'>

                            <div className='w-[108px] text-[16px] font-semibold'>Helen johnson</div>
                            <div className='w-[66px] text-[12px] text-[#555555]'>20-07-2024</div>
                        </div>
                    </div>
                    <div className='w-[49px]'>
                        <div className='text-[12px] text-[#333333]'>In 5 Days 28 Years</div>
                    </div>
                </div>
                <div className='pl-4 flex justify-between border-b-2 pr-4 p-2'>
                    <div className='flex'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--hO-TXT_0uJC6qJ2kYUFttLrYU0TQd6wAQ&s" className='w-[30px] h-[30px] rounded-full mt-2' alt="" />
                        <div className='ml-2'>

                            <div className='w-[108px] text-[16px] font-semibold'>Biren Smith</div>
                            <div className='w-[66px] text-[12px] text-[#555555]'>22-07-2024</div>
                        </div>
                    </div>
                    <div className='w-[49px]'>
                        <div className='text-[12px] text-[#333333]'>In 3 Days 51 Years</div>
                    </div>
                </div>
                <div className='pl-4 flex justify-between border-b-2 pr-4 p-2'>
                    <div className='flex'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--hO-TXT_0uJC6qJ2kYUFttLrYU0TQd6wAQ&s" className='w-[30px] h-[30px] rounded-full mt-2' alt="" />
                        <div className='ml-2 '>

                            <div className='w-[150px] text-[16px] font-semibold'>Anselie Mahadeo</div>
                            <div className='w-[66px] text-[12px] text-[#555555]'>21-07-2024</div>
                        </div>
                    </div>
                    <div className='w-[49px]'>
                        <div className='text-[12px] text-[#333333]'>In 3 Days 32 Years</div>
                    </div>
                </div><div className='pl-4 flex justify-between border-b-2 pr-4 p-2'>
                    <div className='flex'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--hO-TXT_0uJC6qJ2kYUFttLrYU0TQd6wAQ&s" className='w-[30px] h-[30px] rounded-full mt-2' alt="" />
                        <div className='ml-2'>

                            <div className='w-[108px] text-[16px] font-semibold'>Barker Parmer</div>
                            <div className='w-[66px] text-[12px] text-[#555555]'>22-07-2024</div>
                        </div>
                    </div>
                    <div className='w-[49px]'>
                        <div className='text-[12px] text-[#333333]'>In 4 Days 28 Years</div>
                    </div>
                </div><div className='pl-4 flex justify-between  pr-4 p-2'>
                    <div className='flex'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--hO-TXT_0uJC6qJ2kYUFttLrYU0TQd6wAQ&s" className='w-[30px] h-[30px] rounded-full mt-2' alt="" />
                        <div className='ml-2'>

                            <div className='w-[150px] text-[16px] font-semibold'>Sidhart Wasoon</div>
                            <div className='w-[66px] text-[12px] text-[#555555]'>23-07-2024</div>
                        </div>
                    </div>
                    <div className='w-[49px]'>
                        <div className='text-[12px] text-[#333333]'>In 5 Days 31 Years</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
/hello this is adnan/