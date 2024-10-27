import { ActionFunctionArgs } from '@remix-run/node'
import { Form, useActionData, useNavigate } from '@remix-run/react'
import React from 'react'
import { Button } from '~/components/ui/button'
import {z} from "zod"

export default function Dependentdetails() {
    const actiondata = useActionData()
    console.log(actiondata)
    const navigate=useNavigate()

    const handlenavigate=()=>{
        navigate("/Employesetup/basicinformation")
    }
    return (
        <Form method='post'>

            <div className='w-[850px] h-[840px] border-2 mx-auto p-[30px] bg-[#F4F4F4] rounded-md'>
                <div className='grid grid-cols-2 w-full border-red-400'>
                    <div className='font-bold text-[20px]'>Emergency contact (kith & kin)</div>
                    <div className='text-right'>

                        <button className='h-[36px] w-[36px] shadow-md rounded-md bg-[#FFFFFF]'>+</button>
                    </div>
                </div>
                <div className='w-auto  grid grid-cols-2 gap-5 mt-4'>
                    <div>
                        <div className='font-medium'>Name</div>
                        <div className='mt-2'>
                            <input type="text" name="name" id="" className='w-full h-[42px] border-2 rounded-md pl-2' />
                        </div>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.name : ""}</span><br />

                    </div>
                    <div>
                        <div className='font-medium'>Relationship</div>
                        <div className='mt-2'>
                            <select type="text" name="relationship" id="" className='w-full h-[42px] border-2 rounded-md pl-2' >
                                <option value="">select</option>
                                <option value="single">single</option>
                                <option value="married">married</option>

                            </select>
                        </div>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.relationship : ""}</span><br />

                    </div>

                </div>
                <div className='w-auto  grid grid-cols-2 gap-5 mt-0'>
                    <div>
                        <div className='font-medium'>DOB</div>
                        <div className='mt-1'>
                            <input type="date" name="dateofbirth" id="" className='w-full h-[42px] border-2 rounded-md pl-2' />

                        </div>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.dateofbirth : ""}</span><br />

                    </div>
                    <div>
                        <div className='font-medium'>Phone Number</div>
                        <div className='mt-1'>
                            <input type="text" name="phone" id="" className='w-full h-[42px] border-2 rounded-md pl-2' />
                        </div>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.phone : ""}</span><br />

                    </div>
                    <div>
                        <div className='font-medium'>Email Address</div>
                        <div className='mt-1'>
                            <input type="text" name="email" id="" className='w-full h-[42px] border-2 rounded-md pl-2'  />
                        </div>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.email : ""}</span><br />

                    </div>


                </div>
                <div className='font-medium'>Parent Details</div>
                <div className='w-auto  grid grid-cols-2 gap-5 mt-2'>
                    <div className='mt-0'>
                        <input type="text" name="homenumber" id="" className='w-full h-[42px] border-2 rounded-md pl-2'  placeholder='254-258'/>
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.homenumber : ""}</span><br />


                    </div>
                    <div className='mt-0'>
                        <input type="text" name="address" id="" className='w-full h-[42px] border-2 rounded-md pl-2' placeholder='washeay rd' />
                        <span className='text-red-600'>{actiondata?.error ? actiondata?.error?.address : ""}</span><br />

                    </div>
                    <div className='mt-0'>
                        <input type="text" name="sale" id="" className='w-full h-[42px] border-2 rounded-md pl-2'  placeholder='sale'/>
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







                <div className='grid grid-cols-12  mt-[40px] w-full'>
                    <div className='col-span-9  text-right'><Button className='w-[81px] h-[40px] border-2 rounded-md bg-[#DEDEDE]' type='button' onClick={handlenavigate}>Skip</Button></div>
                    <div className='col-span-3 text-right'><Button className='w-[146px] h-[40px] border-2  rounded-md bg-[#466AF3] text-white' type='submit'>save & continue</Button></div>
                </div>    </div>
        </Form>
    )
}
export const action=async({request}:ActionFunctionArgs)=>{
    const formdata=Object.fromEntries(await request.formData())
    const formpayload=z.object({
        name:z.string().min(5,"name required"),
        relationship:z.string().min(4,"relationshup required"),
        dateofbirth:z.string().min(5,"Date of Birth is required"),
        phone:z.string().min(10,"phone number required min 10 digit"),
        email:z.string().email(),
        homenumber:z.string().min(4,"Home number is required"),
        address:z.string().min(6,"Address is required"),
        sale:z.string().min(4,"Sale is required"),
        city:z.string().min(4,"City name is required"),
        country:z.string().min(3,"Country name Requir"),
        pincode:z.string().min(2,"pin code is required"),
        pincode2:z.string().min(2,"pin code 2 is required")

    })
    
    try{
        const payload=formpayload.parse(formdata)
return {formdata:payload,error:null}
    }catch(error){
        return {
            formdata:formdata,
            error:error.issues.reduce((acc,curr)=>{

                const key=curr.path[0]
                acc[key]=curr.message
                return acc
            },{})
        }

    }
// console.log(formdata)

}