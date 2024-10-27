import { ActionFunctionArgs } from '@remix-run/node'
import { Form, useActionData, useNavigate } from '@remix-run/react'
import React from 'react'
import { Button } from '~/components/ui/button'
import { z } from 'zod'

export default function Educationdetails() {
    const actiondata = useActionData()
    console.log(actiondata)
    const navigat=useNavigate()
    const handlenavigate=()=>{
        navigat("/Employesetup/basicinformation")
        }
    return (
        <Form method='post'>

            <div className='w-[850px] h-[686px] border-2 mx-auto p-[30px] bg-[#F4F4F4] rounded-md'>
                <div className='grid grid-cols-2 w-full border-red-400'>
                    <div className='font-bold text-[20px]'>Education</div>
                    <div className='text-right'>

                        <button className='h-[36px] w-[36px] shadow-md rounded-md bg-[#FFFFFF]'>+</button>
                    </div>
                </div>
                <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>
                    <div>
                        <div className='font-medium'>Institute Name</div>
                        <div className='mt-2'>
                            <input type="text" name="intitutename" id="" className='w-full h-[42px] border-2 rounded-md' />
                        </div>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.intitutename : ""}</span><br />

                    </div>
                    <div>
                        <div className='font-medium'>Degree/Diploma</div>
                        <div className='mt-2'>
                            <input type="text" name="degree" id="" className='w-full h-[42px] border-2 rounded-md' />
                        </div>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.degree : ""}</span><br />

                    </div>

                </div>
                <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>
                    <div>
                        <div className='font-medium'>Specialization</div>
                        <div className='mt-2'>
                            <input type="text" name="specialization" id="" className='w-full h-[42px] border-2 rounded-md pl-2' />

                        </div>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.specialization : ""}</span><br />

                    </div>
                    <div>
                        <div className='font-medium'>Date of Completion</div>
                        <div className='mt-2'>
                            <input type="date" name="dateofcompletion" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='MM/DD/YY' />
                        </div>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.dateofcompletion : ""}</span><br />

                    </div>


                </div>

                <div className='w-auto  grid grid-cols-2 gap-5 mt-3'>
                    <div>
                        <div className=''>
                            <input type="checkbox" name='checkboxexp' value='Allow multiple Education details' />
                            <label className=' ml-[10px]'>Allow multiple Education Details</label>

                        </div>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.checkboxexp : ""}</span><br />

                    </div>



                </div>

                <div className='grid grid-cols-12  mt-[250px] w-full'>
                    <div className='col-span-9  text-right'><Button className='w-[81px] h-[40px] border-2 rounded-md bg-[#DEDEDE]' type='button' onClick={handlenavigate}>Skip</Button></div>
                    <div className='col-span-3 text-right'><Button className='w-[146px] h-[40px] border-2  rounded-md bg-[#466AF3] text-white' type='submit'>save & continue</Button></div>
                </div>    </div>
        </Form>
    )
}
export const action = async ({ request }: ActionFunctionArgs) => {
    const formdata = Object.fromEntries(await request.formData())

    const formpayload = z.object({
        intitutename: z.string().min(6,"Institute is required"),
        degree: z.string().min(5, "Degree name is required"),
        specialization: z.string().min(4,"Specialization is required"),
        dateofcompletion: z.string().min(6, "Date of completion required"),
        checkboxexp: z.string()


    })
    try {

        const payloadformdata = formpayload.parse(formdata)
        return { formdata: payloadformdata, error: null }
    } catch (error) {
        return {
            formdata:formdata,
            error:error.issues.reduce((acc,curr)=>{
                let key=curr.path[0]

                acc[key]=curr.message
                return acc
            },{})

        }
    }


}