import { ActionFunctionArgs } from '@remix-run/node'
import { Form, useActionData, useNavigate } from '@remix-run/react'
import React from 'react'
import { Button } from '~/components/ui/button'
import { z } from "zod"
export default function Conatctdetails() {
    const actiondata = useActionData()
    console.log(actiondata)
    const navigate=useNavigate()
    
    const handlenavigate=()=>{
        navigate("/Employesetup/basicinformation")
    }
    return (
        <Form method='post'>

            <div className='w-[850px] h-[1150px] border-2 mx-auto p-[30px] bg-[#F4F4F4] rounded-md'>
                <div className='grid grid-cols-2 w-full border-red-400'>
                    <div className='font-bold text-[20px]'></div>
                    <div className='text-right'>

                        <button className='h-[36px] w-[36px] shadow-md rounded-md bg-[#FFFFFF]'>+</button>
                    </div>
                </div>
                <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>
                    <div>
                        <div className='font-medium'>Work Phone number</div>
                        <div className='mt-2'>
                            <input type="text" name="phonenumber" id="" className='w-full h-[42px] border-2 rounded-md pl-2' />
                        </div>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.phonenumber : ""}</span><br />

                    </div>
                    <div>
                        <div className='font-medium'>Personal mobile number</div>
                        <div className='mt-2'>
                            <input type="text" name="personalnumber" id="" className='w-full h-[42px] border-2 rounded-md pl-2' >

                            </input>
                        </div>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.personalnumber : ""}</span><br />

                    </div>

                </div>
                <div className='w-auto  grid grid-cols-2 gap-5 mt-0'>
                    <div>
                        <div className='font-medium'>Extention</div>
                        <div className='mt-1'>
                            <input type="text" name="extention" id="" className='w-full h-[42px] border-2 rounded-md pl-2' />

                        </div>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.extention : ""}</span><br />

                    </div>
                    <div>
                        <div className='font-medium'>Personal Email Address</div>
                        <div className='mt-1'>
                            <input type="text" name="email" id="" className='w-full h-[42px] border-2 rounded-md pl-2' />
                        </div>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.email : ""}</span><br />

                    </div>



                </div>
                <div className='font-medium'>Present Address</div>
                <div className='w-auto  grid grid-cols-2 gap-5 mt-2'>
                    <div className='mt-0'>
                        <input type="text" name="homenumber" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='254-258' />
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.homenumber : ""}</span><br />


                    </div>
                    <div className='mt-0'>
                        <input type="text" name="address" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='washeay rd' />
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.address : ""}</span><br />

                    </div>
                    <div className='mt-0'>
                        <input type="text" name="sale" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='sale' />
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.sale : ""}</span><br />

                    </div>
                    <div className='mt-0'>
                        <select type="select" name="city" id="" className='w-full h-[42px] border-2 rounded-md pl-2'  >
                            <option value="">select</option>
                            <option value="cashire">chashire</option>
                        </select>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.city : ""}</span><br />

                    </div>
                    <div className='mt-0'>
                        <select type="select" name="country" id="" className='w-full h-[42px] border-2 rounded-md pl-2'  >
                            <option value="">select</option>
                            <option value="uk">united kingdom</option>
                            <option value="usa">united states of america</option>

                        </select>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.country : ""}</span><br />

                    </div>
                    <div className='mt-0'>
                        <select type="select" name="pincode" id="" className='w-full h-[42px] border-2 rounded-md pl-2' >
                            <option value="">select</option>
                            <option value="gb-emea">GB-EMEA</option>
                        </select>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.pincode : ""}</span><br />

                    </div>
                    <div className='mt-0'>
                        <input type="text" name="pincode2" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='M33 4RZ' >

                        </input>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.pincode2 : ""}</span><br />
                    </div>

                </div>

                <div className='font-medium mt-5'>permanent Address </div>
                <div className='mt-3 mb-0'>
                    <input type="checkbox" name='checkbox' /> <label htmlFor="" className='ml-2'>Same as present Address</label>

                </div>
                    <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.checkbox : ""}</span><br />
                <div className='w-auto  grid grid-cols-2 gap-5 mt-2'>
                    <div className='mt-0'>
                        <input type="text" name="homenumber2" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='254-258' />
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.homenumber2 : ""}</span><br />


                    </div>
                    <div className='mt-0'>
                        <input type="text" name="address2" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='washeay rd' />
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.address2 : ""}</span><br />

                    </div>
                    <div className='mt-0'>
                        <input type="text" name="sale2" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='sale' />
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.sale2 : ""}</span><br />

                    </div>
                    <div className='mt-0'>
                        <select type="select" name="city2" id="" className='w-full h-[42px] border-2 rounded-md pl-2'  >
                            <option value="">select</option>
                            <option value="cashire">chashire</option>
                        </select>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.city2 : ""}</span><br />

                    </div>
                    <div className='mt-0'>
                        <select type="select" name="country2" id="" className='w-full h-[42px] border-2 rounded-md pl-2'  >
                            <option value="">select</option>
                            <option value="uk">united kingdom</option>
                            <option value="usa">united states of america</option>

                        </select>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.country2 : ""}</span><br />

                    </div>
                    <div className='mt-0'>
                        <select type="select" name="secondpincode" id="" className='w-full h-[42px] border-2 rounded-md pl-2' >
                            <option value="">select</option>
                            <option value="gb-emea">GB-EMEA</option>
                        </select>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.secondpincode : ""}</span><br />

                    </div>
                    <div className='mt-0'>
                        <input type="text" name="secondpincode2" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='M33 4RZ' >

                        </input>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.secondpincode2 : ""}</span><br />
                    </div>

                </div>

                <div className='grid grid-cols-12  mt-[40px] w-full'>
                    <div className='col-span-9  text-right'><Button className='w-[81px] h-[40px] border-2 rounded-md bg-[#DEDEDE]' type='button' onClick={handlenavigate}>Skip</Button></div>
                    <div className='col-span-3 text-right'><Button className='w-[146px] h-[40px] border-2  rounded-md bg-[#466AF3] text-white' type='submit'>save & continue</Button></div>
                </div>    </div>
        </Form>
    )
}
export const action = async ({ request }: ActionFunctionArgs) => {
    const formdata = Object.fromEntries(await request.formData())
    const formpayload = z.object({
        phonenumber: z.string().min(10, "Phone number required 10 digit"),
        personalnumber: z.string().min(10, "Phone number required 10 digit"),
        extention: z.string().min(3, "Extention is required"),
        email: z.string().email(),
        homenumber: z.string().min(6, "Home number required"),
        address: z.string().min(5, "Address is required"),
        sale: z.string().min(4, "sale is required"),
        city: z.string().min(4, "City name is required"),
        country: z.string().min(2, "Country name is required"),
        pincode: z.string().min(4, "Pincode is required"),
        pincode2: z.string().min(4, "Pincode2 is required"),
        checkbox: z.string(),
        homenumber2: z.string().min(6, "Home number2 required"),
        address2: z.string().min(5, "Address2 is required"),
        sale2: z.string().min(3, "Sale is required"),
        city2: z.string().min(3, "City2 is required"),
        country2: z.string().min(2, "Country2 is required"),
        secondpincode: z.string().min(3, "Secondpincode is required"),
        secondpincode2: z.string().min(3, "second pincode 2 is required")
    })
    console.log(formdata)
    try {
        const payload = formpayload.parse(formdata)
        return { formdata: payload, error: null }
    } catch (error) {
        return {
            formdata: formdata,
            error:error.issues.reduce((acc, curr) => {
                let key = curr.path[0]
                acc[key] = curr.message
                return acc

            }, {})
        }
    }
}