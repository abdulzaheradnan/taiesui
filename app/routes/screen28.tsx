import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import { designationtable } from 'public/designationslist'

function Screen28() {
  const [page,setpage]=useState(1)
  const designationlist: {
    designationname: string,
    associateduser: string,
    grade: string,
    updatedby: string,
    updateddate: string
  }[] = designationtable
  const date=new Date()
  const d=date.getDate()
  const m=date.getMonth()+1
  const y=date.getFullYear()
  console.log(d+ "/" + m +"/" +y)
  // console.log("apna", designationtable)
  return (
    <div className='sm:w-[1080px] mx-auto mt-[90px] border-2 sm:h-[778px] rounded-md'>
      <div className='sm:grid sm:grid-cols- sm:gap-28 mt-[30px] grid grid-cols-4 m-[30px] sm:ml-[-20px] sm:mr-[-30px]'>
        <div className='sm:col-span-3 sm:pl-8 text-2xl font-semibold col-span-3 lg:ml-[10px]'>Designations</div>
        <button className='border-2 sm:col-span-1 bg-[#466AF3] w-[145px] h-[40px] rounded-md text-white col-span-1 mr-[100px]'>Add Designation</button>
      </div>
      <div className='mt-[30px] border-t-2'>
        <Table className='h-[10px]'>
          <TableCaption>
            <button className='w-8 h-7 bg-[#466AF3] text-white mr-2 rounded-md' onClick={()=>setpage(1)}>1</button>
            <button className='w-8 h-7 bg-[#466AF3] text-white rounded-md mr-2' onClick={()=>setpage(2)}>2</button>
            <button className='w-8 h-7 bg-[#466AF3] text-white rounded-md' onClick={()=>setpage(3)}>3</button>


          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px] ">Designation name</TableHead>
              <TableHead className='text-center'>Associated users</TableHead>
              <TableHead className=' text-center'>Grade</TableHead>
              <TableHead className="text-center ">Updated By</TableHead>
              <TableHead className=''>Updated Date</TableHead>
              <TableHead className="text-left ">Options</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>

            {
              designationlist.slice(5*page-5, 5*page).map((item) => {

                return <TableRow>

                  <TableCell className="font-medium">{item.designationname}</TableCell>
                  <TableCell className='text-center font-medium text-[#466AF3]'>{item.associateduser}</TableCell>
                  <TableCell className='text-center font-medium'>{item.grade}</TableCell>
                  <TableCell className="text-center font-medium">{item.updatedby}</TableCell>
                  <TableCell className='text-left font-medium'>{d+ "/" + m +"/" +y}</TableCell>
                  <TableCell className='text-center font-medium'>
                    <span className='flex'>

                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                          <path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z" />
                        </svg>
                      </span>&nbsp;
                      <span>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                          <path d="M2 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2Z" />
                          <path fill-rule="evenodd" d="M2 7.5h16l-.811 7.71a2 2 0 0 1-1.99 1.79H4.802a2 2 0 0 1-1.99-1.79L2 7.5Zm5.22 1.72a.75.75 0 0 1 1.06 0L10 10.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L11.06 12l1.72 1.72a.75.75 0 1 1-1.06 1.06L10 13.06l-1.72 1.72a.75.75 0 0 1-1.06-1.06L8.94 12l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>

                      </span>
                    </span>
                  </TableCell>
                </TableRow>

              })
            }

          </TableBody>
          
        </Table>


      </div>
      <div className='mt-[250px] sm:grid sm:justify-items-end sm:grid-cols-5  m-[30px] grid grid-cols-5 mr-[30px] justify-items-end'>
        <button className='w-[81px] h-[40px] bg-[#DEDEDE] rounded-md sm:col-span-4 sm:mr-[-30px] col-span-4 border-2 mr-[60px]'>Reset</button>
        <button className='w-[146px] h-[40px] bg-[#466AF3] rounded-md sm:col-span-1 text-white col-span-1 border-2'>Save & continue</button>
      </div>
    </div>
  )
}

export default Screen28
